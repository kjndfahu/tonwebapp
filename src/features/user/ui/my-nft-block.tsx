export const MyNftBlock = () => {
    return (
        <div className="flex w-full items-center bg-cover gap-[14px] bg-block-token rounded-[16px] h-[150px]">
            <div className="w-[166px] rounded-l-[16px] bg-white h-[150px]"></div>
            <div className="flex items-center justify-center flex-col h-full pt-[20px] pb-[15px] text-[14px] font-bold text-white">
                <div className="flex flex-col">
                    Наше NFT
                    <h2 className="text-[12px] font-medium leading-[14px]">Описание - NFT-коллекции<br/> необходимо разместить тут</h2>
                    <p className="text-[10px] pt-[8px] font-medium text-[#bfbfbf]">дополнительная инфа</p>
                </div>
            </div>
        </div>
    )
}