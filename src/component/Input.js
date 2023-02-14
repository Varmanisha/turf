import { useState } from "react";

const Input = ({ schema, editMode }) => {
    const {name, placeholder, type, minlength, maxlength} = schema;
    const [ipValue, setIpValue] = useState("")

    const handleChange = () => {
        setIpValue(e.target.value);
    }


    return (
        <>
            <input onBlur={(e) => {handleChange(e)}} type={type} name={name} placeholder={placeholder} disabled={!editMode} />
        </>
    );
}

export default Input;