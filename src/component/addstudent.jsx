import React from "react";
import { useState } from "react";
const AddStudent = () =>{
      const [displayData,setDisplayData] = useState([]);
      const[inpValue,setInpValue]= useState({
        Name:"",
        Age:"",
        Course:"",
        Batch:"",
      });
const handleInput=(e)=>{
    const value = e.target.value;
    setInpValue({
        ...inpValue,
        [e.target.name]: value,
      });
     
}
const onsubmit=(e)=>{
    e.preventDefault();
    const checkEmptyInput = e.target.value;
    if (checkEmptyInput !== "") {
      const data = inpValue;
      setDisplayData([...displayData, data]);

      const emptyInput = { Name: "", Age: "", Course: "",Batch:""};
      setInpValue(emptyInput);
    }
  };

    return(<div>
    <form onSubmit={onsubmit}>
       <label>Name:</label>
       <input type="text" name="Name" id="Name" required value={inpValue.Name}  onChange={handleInput}/> 
       <br></br>    
       <label>Course:</label>
       <input type="text" name="Course" id="Course" required value={inpValue.Course}  onChange={handleInput}/> 
       <br></br> 
       <label>Age:</label>
       <input type="text" name="Age" id="Age" required value={inpValue.Age}  onChange={handleInput}/> 
       <br></br>  
       <label>Batch:</label>
       <input type="text" name="Batch" id="Batch" required value={inpValue.Batch}  onChange={handleInput}/> 
       <br></br>  
<input type="submit" id="submit" />
    </form>
</div>
      )
}
export default AddStudent;