import {useState} from "react";

function TodoInput(props) {
//   const number=[1,2,3,4,5];
// const newNuber=number.map(function(number){
// return <li>{number}</li>
// });
// <ul>{newNuber}</ul> 

 
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }


  return (
    <>
    {/* <div><h1>Todo-list</h1></div> */}
    <div className="input-container">
      
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button> 
      {/* <ul>{newNuber}</ul>   */}
       
    </div>
    </>
    
  );
}

export default TodoInput;