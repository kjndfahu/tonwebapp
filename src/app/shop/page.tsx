import {Shop} from "@/features/shop/container/shop";

export default function ShopPage() {
    return (
        <>
            <div className="flex items-center flex-col text-center text-[#666666] pb-[15px] text-[12px] gap-1 pt-[15px]">
                <h2 className="text-white text-[16px]">Магазин</h2>
                <p>Покупай монеты BLOCK и увеличивай свою<br/> доходность навсегда!</p>
            </div>
            <Shop/>
        </>
    )
}
