import {Earn} from "@/features/blocks/container/earn";

export default function Home() {
    return (
        <>
            <div className="flex items-center text-center flex-col text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
                <h2 className="text-white text-[16px]">Блоки</h2>
                <p>Активируй блоки и получай награды в TON!</p>
            </div>
            <Earn/>
        </>
    )
}
