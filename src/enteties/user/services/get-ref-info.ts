import axios from "axios"
import WebApp from "@twa-dev/sdk";

export interface RefInfo {
    refs: [
        {
            userId: number;
            username: string;
            ref_earn: number;
        }
    ],
    ref_earn: number
}

interface RefInfoResponse {
    success: boolean
    message: string
    ref?: RefInfo
}

export const getRefInfo = async (): Promise<RefInfoResponse> => {
    try {
        const telegramInitData = WebApp.initData
        const userId  = WebApp.initDataUnsafe.user?.id;
        const response = await axios.get<RefInfo>(`http://localhost:8080/api/ref_info?user_id=${userId}`, {
            headers: {
                "x-telegram-data": telegramInitData,
                "Content-Type": "application/json",
            },
            params: {
                user_id: WebApp.initDataUnsafe.user?.id,
            },
        })

        console.log("Ref response:", response.data)

        return {
            success: true,
            message: "Реф получен успешно",
            ref: response.data,
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Ошибка при получении рефа:", error.response?.data)
            if (error.response?.status === 404 || error.response?.data?.message === "Реф не найден") {
                return {
                    success: false,
                    message: "Сессия истекла. Пожалуйста, войдите снова.",
                }
            }
            return {
                success: false,
                message: error.response?.data?.message || "Ошибка при получении рефа",
            }
        } else {
            console.error("Неизвестная ошибка:", error)
            return {
                success: false,
                message: "Неизвестная ошибка при получении рефа",
            }
        }
    }
}

