import axios from "axios"
import WebApp from "@twa-dev/sdk";
import {BlockStatus} from "@/kernel/types";

export interface UserBlocksInfo {
    user_blocks: [
        {
            id: number,
            next_push: number,
            count_push: number,
            reward: number,
            push_reward: number,
            price: number,
            "status": BlockStatus,
            "expire_date": number
        }
    ]
}

interface UserBlocksInfoResponse {
    success: boolean
    message: string
    blocks?: UserBlocksInfo
}

export const getUserBlocksInfo = async (): Promise<UserBlocksInfoResponse> => {
    try {
        const telegramInitData = WebApp.initData
        const userId= WebApp.initDataUnsafe.user?.id
        const response = await axios.get<UserBlocksInfo>(`http://localhost:8080/api/user_block?user_id=${userId}`, {
            headers: {
                "x-telegram-data": telegramInitData,
                "Content-Type": "application/json",
            },
            params: {
                user_id: WebApp.initDataUnsafe.user?.id,
            },
        })

        console.log("User blocks response:", response.data)

        return {
            success: true,
            message: "Информация о блоках пользователя получена успешно",
            blocks: response.data,
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Ошибка при получении инфо о блоках пользователя:", error.response?.data)
            if (error.response?.status === 404 || error.response?.data?.message === "Блоки пользователя не найден") {
                return {
                    success: false,
                    message: "Сессия истекла. Пожалуйста, войдите снова.",
                }
            }
            return {
                success: false,
                message: error.response?.data?.message || "Ошибка при получении блоков пользователя",
            }
        } else {
            console.error("Неизвестная ошибка:", error)
            return {
                success: false,
                message: "Неизвестная ошибка при получении блоков пользователя",
            }
        }
    }
}

