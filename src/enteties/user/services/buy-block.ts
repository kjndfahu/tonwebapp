import axios from "axios"
import WebApp from "@twa-dev/sdk";

export interface BuyBlockInfo {
    block_id: number;
}

interface BuyBlockResponse {
    success: boolean
    message: string
    block?: BuyBlockInfo
}

export const buyBlock = async (block_id: BuyBlockInfo): Promise<BuyBlockResponse> => {
    try {
        const telegramInitData = WebApp.initData
        const userId= WebApp.initDataUnsafe.user?.id
        const response = await axios.post<BuyBlockInfo>(`http://localhost:8080/api/buy_block?user_id=${userId}&block_id=${block_id}`, {
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
            message: "Информация о получении покупки блока успешно",
            block: response.data,
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Ошибка при покупке блока:", error.response?.data)
            if (error.response?.status === 404 || error.response?.data?.message === "Блок не найден") {
                return {
                    success: false,
                    message: "Сессия истекла. Пожалуйста, войдите снова.",
                }
            }
            return {
                success: false,
                message: error.response?.data?.message || "Ошибка при покупке блока",
            }
        } else {
            console.error("Неизвестная ошибка:", error)
            return {
                success: false,
                message: "Неизвестная ошибка при покупке блока",
            }
        }
    }
}

