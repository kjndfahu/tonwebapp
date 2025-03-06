import axios from "axios"
import WebApp from "@twa-dev/sdk";

export interface UserInfo {
    avatar: null
    balance: number
    domainType: string
    id: string
    nickname: string
    notifications: boolean
    refCode: string
    role: string
    showNickInChannel: boolean
}

interface UserInfoResponse {
    success: boolean
    message: string
    user?: UserInfo
}

export const getProfile = async (): Promise<UserInfoResponse> => {
    try {
        const telegramInitData = WebApp.initData
        const response = await axios.get<UserInfo>(`http://localhost:8080/api/user_info`, {
            headers: {
                "x-telegram-data": telegramInitData,
                "Content-Type": "application/json",
            },
            params: {
                user_id: WebApp.initDataUnsafe.user?.id,
            },
        })

        console.log("Profile response:", response.data)

        return {
            success: true,
            message: "Профиль пользователя получен успешно",
            user: response.data,
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Ошибка при получении профиля:", error.response?.data)
            if (error.response?.status === 404 || error.response?.data?.message === "Пользователь не найден") {
                return {
                    success: false,
                    message: "Сессия истекла. Пожалуйста, войдите снова.",
                }
            }
            return {
                success: false,
                message: error.response?.data?.message || "Ошибка при получении профиля пользователя",
            }
        } else {
            console.error("Неизвестная ошибка:", error)
            return {
                success: false,
                message: "Неизвестная ошибка при получении профиля пользователя",
            }
        }
    }
}

