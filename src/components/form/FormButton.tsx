interface FormButton {
    label?: string;
    className?: string;
}

export default function FormButton({ label = 'submit', className } : FormButton) {
    return (
        <>
            <button id='form-button' className={className} type={'submit'} >{ label }</button>
        </>
    )
}
