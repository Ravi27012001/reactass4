import React from 'react'

const StudentEdit = ()=> {

  return (
   <>
   <form style={{marginTop:"25px"}}>
    <label>Name:</label>
    <input type="text" id="name" />
    <br></br><br></br>
    <label>Age:</label>
    <input type="text" id="age" />
    <br></br><br></br>
    <label>Batch:</label>
    <input type="text" id="batch" />
    <br></br><br></br>
    <label>Course:</label>
    <input type="text" id="course" />
    <br></br><br></br>
   </form>
  
  <button style={{backgroundColor:"aqua"}}>Update</button>
  <button style={{backgroundColor:"aqua"}}>Cancel</button>
   </>

  )
}

export default StudentEdit;