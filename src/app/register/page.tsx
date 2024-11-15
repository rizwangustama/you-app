import FormInput from "@/components/form/FormInput";
import FormButton from "@/components/form/FormButton";

export default function Register() {
    return (
        <>
            <section className={'background-primary max-screen-sm'}>
                <form className={'w-full'}>
                    <h1 className={'label-panel'}>Register</h1>
                    <div className={'flex flex-col gap-[15px]'}>
                        <FormInput label={'Name'} type={'email'} placeholder={'Enter Email'}
                                   hiddenLabel={false}/>
                        <FormInput label={'Create Username'} type={'text'} placeholder={'Create Username'}
                                   hiddenLabel={false}/>
                        <FormInput label={'Create Password'} type={'password'} placeholder={'Create Password'} hiddenLabel={false}/>
                        <FormInput label={'Confirm Password'} type={'password'} placeholder={'Confirm Password'} hiddenLabel={false}/>
                        <FormButton label={'Register'} className={'mt-[25px]'}/>
                        <div className={'mt-10'}>
                            <p className={'text-white text-center'}>Have an account? <a href={'#'}>Login here</a></p>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
