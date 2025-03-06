import axios from "axios"
import WebApp from "@twa-dev/sdk";

export interface ClaimBlockInfo {
    block_id: number;
}

interface ClaimBlockResponse {
    success: boolean
    message: string
    block?: ClaimBlockInfo
}

export const claimBlockReward = async (block_id: ClaimBlockInfo): Promise<ClaimBlockResponse> => {
    try {
        const telegramInitData = WebApp.initData
        const userId= WebApp.initDataUnsafe.user?.id
        const response = await axios.post<ClaimBlockInfo>(`http://localhost:8080/api/claim_block_reward`, {
            headers: {
                "x-telegram-data": telegramInitData,
                "Content-Type": "application/json",
            },
            params: {
                user_id: WebApp.initDataUnsafe.user?.id,
                block_id
            },
        })

        console.log("Block response:", response.data)

        return {
            success: true,
            message: "Информация о получении награды получена успешно",
            block: response.data,
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Ошибка при получении награды:", error.response?.data)
            if (error.response?.status === 404 || error.response?.data?.message === "Награда не найдена") {
                return {
                    success: false,
                    message: "Сессия истекла. Пожалуйста, войдите снова.",
                }
            }
            return {
                success: false,
                message: error.response?.data?.message || "Ошибка при получении награды",
            }
        } else {
            console.error("Неизвестная ошибка:", error)
            return {
                success: false,
                message: "Неизвестная ошибка при получении награды",
            }
        }
    }
}

