import axios from "axios"
import WebApp from "@twa-dev/sdk";

export interface BlocksInfo {
    blocks: [
        {
            id: number;
            reward: number;
            count_push: number;
            price: number;
            days: number;
        }
    ]
}

interface BlocksInfoResponse {
    success: boolean
    message: string
    blocks?: BlocksInfo
}

export const getBlocksInfo = async (): Promise<BlocksInfoResponse> => {
    try {
        const telegramInitData = WebApp.initData
        const response = await axios.get<BlocksInfo>(`http://localhost:8080/api/blocks`, {
            headers: {
                "x-telegram-data": telegramInitData,
                "Content-Type": "application/json",
            },
            params: {
                user_id: WebApp.initDataUnsafe.user?.id,
            },
        })

        console.log("Blocks response:", response.data)

        return {
            success: true,
            message: "Информация о блоках получена успешно",
            blocks: response.data,
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Ошибка при получении инфо о блоках:", error.response?.data)
            if (error.response?.status === 404 || error.response?.data?.message === "Блоки не найден") {
                return {
                    success: false,
                    message: "Сессия истекла. Пожалуйста, войдите снова.",
                }
            }
            return {
                success: false,
                message: error.response?.data?.message || "Ошибка при получении блоков",
            }
        } else {
            console.error("Неизвестная ошибка:", error)
            return {
                success: false,
                message: "Неизвестная ошибка при получении блоков",
            }
        }
    }
}

