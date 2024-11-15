import { formInput } from "@/types/formInput";

export  default function FormInput({label, placeholder, type, idName, className, hiddenLabel = true}: formInput ) {
    return (
        <>
            <div className={'form-group'}>
                { hiddenLabel && <label id={idName} className={'label'}>{label}</label> }
                <input id={idName} className={className} type={type} placeholder={placeholder}/>
            </div>
        </>
    )
}
