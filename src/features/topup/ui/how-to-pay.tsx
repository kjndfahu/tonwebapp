'use client'

import {ChevronDown, ChevronUp} from "lucide-react";
import {useState} from "react";

export const HowToPay = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="w-full px-[1px] bg-border rounded-[15px]">
            <div onClick={() => setOpen(!isOpen)} className={`flex flex-col relative py-[10px] px-[20px] ${isOpen ? ('') : ('')} bg-top text-white text-[14px] font-bold rounded-[15px]`}>
                Как оплатить?
                <div className="absolute right-[20px]">
                    {isOpen ? (
                        <ChevronUp className="#ffffff" width={20} height={20} />
                        ) : (
                        <ChevronDown className="#ffffff" width={20} height={20} />
                    )}
                </div>
                {isOpen && (
                    <div className="flex flex-col text-white text-[13px] font-semibold gap-2 pt-[10px]">
                        <p>1. Скопируйте адрес, отображенный ниже</p>
                        <p>2. Вставьте адрес в вашем кошельке или на бирже</p>
                        <p>3. Введите как минимум 0.2 TON для перевода</p>
                        <p>4. Пенные еще раз <br/> <span className="text-[12px] leading-[14px] text-[#9d9d9d] font-medium">
                            Убедитесь, что введен правильный адрес и количество токенов TON
                        </span> </p>
                        <p>5. Подтвердите транзакцию и дождитесь подтверждения <br/> <span
                            className="text-[12px] leading-[14px] text-[#9d9d9d] font-medium">
                            Перевод будет обработан в блокчейне, что может занять несколько минут
                        </span></p>
                    </div>
                )}
            </div>
        </div>
    )
}