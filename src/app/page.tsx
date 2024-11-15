import Image from 'next/image'
import AboutCard from "@/components/AboutCard";
import InterestCard from "@/components/InterestCard";
import ImageProfileCard from "@/components/ImageProfileCard";

export default function Home() {
  return (
    <main className={'background-secondary max-screen-sm-main'}>
        <div className={'flex flex-col w-full gap-[18px]'}>
            <ImageProfileCard />
            <AboutCard />
            <InterestCard />
        </div>

    </main>
  )
}
