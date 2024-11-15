import FormInput from "@/components/form/FormInput";
import FormButton from "@/components/form/FormButton";

export default function Login() {
    return (
        <>
            <section className={'background-primary max-screen-sm'}>
                <form className={'w-full'}>
                    <h1 className={'label-panel'}>Login</h1>
                    <div className={'flex flex-col gap-[15px]'}>
                        <FormInput label={'Name'} type={'text'} placeholder={'Enter Username/Email'} hiddenLabel={false}/>
                        <FormInput label={'Name'} type={'password'} placeholder={'Enter Password'} hiddenLabel={false}/>
                        <FormButton label={'Login'} className={'mt-[25px]'}/>
                        <div className={'mt-10'}>
                            <p className={'text-white text-center'}>No account? <a href={'#'}>Register here</a></p>
                        </div>
                    </div>
                </form>
            </section>

        </>
    )
}
