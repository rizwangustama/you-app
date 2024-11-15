'use client';
import React from 'react';
import ButtonIcon from "@/components/ButtonIcon";
import FormMainInput from "@/components/form-main/FormMainInput";

export default function AboutCard() {
    const handleButtonClick = () => {
        alert('Hello World');
    }
    return (
        <>
            <div className={'bg-[#0E191F] w-full rounded-[14px] py-[27px] px-[27px]'}>
                <div className={'flex justify-between mb-[33px]'}>
                    <h2 className={'text-white text-[14px] font-bold'}>About</h2>
                    <ButtonIcon onButtonClick={handleButtonClick} />
                </div>

                {/* Ketika Datanya Tidak ada */}
                {/*<p className={'text-[14px] text-white'}>Add in your your to help others know you*/}
                {/*    better*/}
                {/*</p>*/}

                <form className={'w-full flex flex-col gap-3'}>
                    <FormMainInput label={'Display name'} placeholder={'Enter name'}/>
                    <FormMainInput label={'Gender'} placeholder={'Enter gender'}/>
                    <FormMainInput label={'Birthday'} placeholder={'Enter Birthday'}/>
                    <FormMainInput label={'Horoscope'} placeholder={'Horoscope'}/>
                    <FormMainInput label={'Zodiac'} placeholder={'Enter Zodiac'}/>
                    <FormMainInput label={'Height'} placeholder={'Enter Height'}/>
                    <FormMainInput label={'Weight'} placeholder={'Enter Weight'}/>
                </form>

            </div>
        </>
    )
}
