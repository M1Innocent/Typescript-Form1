import"./Input.css"
interface InputContainerProps{
    name: string;
    id: string;
    placeholder: string;
    inputType: string;
    labelName: string;
}

function InputContainer({name, id, placeholder, inputType, labelName}:InputContainerProps){
    return(
        <div>
            <label htmlFor={id}>{labelName}</label>   
            <input type={inputType} name={name} id={id} placeholder={placeholder} />
        </div>
    );
}

export default InputContainer;