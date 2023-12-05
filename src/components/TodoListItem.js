import React from "react";
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox
} from "react-icons/md";
import '../css/TodoListItem.css';

const TodoListItem = (props) =>{
    const {id ,text, checked, date} = props.todo;
    return(
        <div className="TodoListItem">
            
            <div className={checked ? 'checkbox checked':'checkbox'}
            onClick={()=>props.onToggle(id)}>
                {checked? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>}

                <div className="text">
                    <span className="text_item">{text}</span>
                    <span className="date">{date}</span> 
                </div>
            </div>
            <div className="remove" onClick={()=>{
                props.onRemove(id);
            }}>
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    );
};

// export default TodoListItem;
export default React.memo(TodoListItem);