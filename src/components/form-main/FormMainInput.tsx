interface formMainInput {
    label: string;
    type?: string;
    idName?:string;
    className?: string;
    placeholder?: string;
}

export default function FormMainInput({ label, type, idName, className, placeholder } : formMainInput) {
    return (
        <>
            <div className={'form-main-input-group'}>
                <label className={'form-main-label'}>{ label }</label>
                <input type={type} className={className} id={idName} placeholder={placeholder} required></input>
            </div>
        </>
    )
}
