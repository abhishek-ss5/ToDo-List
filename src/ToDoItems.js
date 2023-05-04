import React from 'react'

const ToDoItems = (props) => {

    // const [isClicked, setIsClicked] = useState(false)

    // function handleListClick() {
    //     setIsClicked(value => !value)
    // }

    return (
        <div onClick={() => props.onChecked(props.id)}>
            <li /* style={{ textDecoration: isClicked ? "line-through" : "none" }}*/ >{props.item}</li>
        </div>
    )
}

export default ToDoItems  
