import {MdAdd} from 'react-icons/md';
import '../css/TodoInsert.css'
import {useState, useCallback} from 'react';

const TodoInsert = (props) => {
    const [value, setValue] = useState('');

    //컴포넌트가 렌더링 될 때마다 생성하지 않고 재사용
    const onChange = useCallback((e)=>{ 
        setValue(e.target.value);
    });

    //APP의 todos 배열에 항목 추가하기
    const onSubmit = useCallback((e)=>{
        props.onInsert(value);
        setValue('');
        e.preventDefault();
    },[value]);

    return (
    <form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="할 일을 입력하세요" 
        value = {value} onChange = {onChange}/>
        <button type="submit"><MdAdd/></button>
    </form>
    );
};

export default TodoInsert;