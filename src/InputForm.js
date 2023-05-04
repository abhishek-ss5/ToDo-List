import React , {useState} from 'react'

const InputForm = (props) => {

    const [inputText, setInputText] = useState("")

    function handleChange(event) {
        setInputText(event.target.value)
    }

    return (
        <div className="form">
            <input onChange={handleChange} value={inputText} type="text" />

            <button onClick={() => {
                props.onAddClick(inputText)
                setInputText("")
            }}>
                <span>Add</span>
            </button>

        </div>
    )
}

export default InputForm