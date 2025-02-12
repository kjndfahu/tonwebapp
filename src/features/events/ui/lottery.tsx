import {QuestionBlock} from "@/features/events/ui/question-block";
import {LotteryInfo} from "@/features/events/ui/lottery-info";
import {PastWinners} from "@/features/events/ui/past-winners";

export const Lottery = () => {
    return (
        <div className="bg-border relative z-[5] w-full rounded-[20px] p-[1px] h-[350px]">
            <div
                className="flex md:gap-5 gap-2 h-full overflow-hidden md:p-[14px] p-[11px] bg-top z-[50] w-full relative rounded-[20px]">
                <PastWinners/>
                <LotteryInfo/>
                <QuestionBlock/>
                <div
                    className="absolute left-[-20px] bottom-0 w-full h-[150px] z-[12] bg-top"
                    style={{
                        maskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
                        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                    }}>
                </div>
            </div>
        </div>
    )
}