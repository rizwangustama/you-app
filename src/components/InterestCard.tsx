import ButtonIcon from "@/components/ButtonIcon";

export default function InterestCard() {
    return (
        <>
            <div className={'bg-[#0E191F] w-full rounded-[14px] py-[27px] px-[27px]'}>
                <div className={'flex justify-between mb-[33px]'}>
                    <h2 className={'text-white text-[14px] font-bold'}>Interest</h2>
                    <ButtonIcon/>
                </div>
                {/* Ketika Datanya Tidak ada */}
                <p className={'text-[14px] text-white'}>Add in your your to help others know you
                    better
                </p>
            </div>
        </>
    )
}
