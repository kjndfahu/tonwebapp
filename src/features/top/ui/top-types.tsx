import {ArrowDown, ArrowUp} from "lucide-react";

export const TopTypes = () => {
    return (
        <div className="w-full px-[30px]">
            <div className="w-full bg-border p-[1px] rounded-b-[15px]">
                <div className="flex w-full rounded-b-[15px] bg-gradient">
                    <div
                        className="flex items-center text-[12px] font-medium gap-1 border-r-[2px] border-r-[#a0a0a0] justify-center rounded-bl-[15px] w-full h-[30px]">
                        <ArrowUp width={15} height={15}/>
                        Внести
                    </div>
                    <div
                        className="flex items-center text-[12px] font-medium gap-1 justify-center rounded-br-[15px] w-full h-[30px]">
                        <ArrowDown width={15} height={15}/>
                        Вывести
                    </div>
                </div>
            </div>
        </div>
    )
}