import { useState } from "react"
import "./item.css"

function Item(props){
    //鼠标移入移出回调
    let [mouse, setMouse] = useState(false)
    const handleMouse = (flag) => {
        mouse = flag
        setMouse(mouse)
    }

    //（取消）勾选todo回调
    const hanldeCheck = (id, event) => {
        props.updateTodo(id, event.target.checked)
    }
    return(
        <label>
            <li style={{backgroundColor:mouse ? "#ddd" : "white"}} onMouseLeave={() => handleMouse(false)} onMouseEnter={() => handleMouse(true)} onChange={(event) => hanldeCheck(props.id, event)}>
                <label>
                <input type="checkbox" defaultChecked={props.done} />  
                {/*input ckeckbox是勾选类，defaultChecked状态表示默认是否勾选*/}
                <span>{props.name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?"block":"none"}} >删除</button>
            </li>
        </label>
    )
}

export default Item