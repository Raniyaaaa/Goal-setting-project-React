import React,{useState} from "react";
import Button from "../../UI/Button/Button"
import "./CourseInput.css";

const CourseInput=(props)=>{
    const [enteredValue,setEnteredValue]=useState("")
    const [isValid,setIsValid]=useState(true);

    const goalInputChangeHandler=(event)=>{
        if(event.target.value.trim().length>0){
            setIsValid(true);
        }
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        if(enteredValue.trim().length===0){
            setIsValid(false);
            return;
        }
          props.onAddGoal(enteredValue);
          setEnteredValue("")
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label htmlFor="goalInput" style={{color: !isValid? "red" : "black"}}>Course Goal </label>
                <input style={{backgroundColor: !isValid? "lightpink" : "transparent",borderColor: !isValid? "red" : "black"}} id="goalInput" type="text" value={enteredValue} onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    )
}

export default CourseInput;