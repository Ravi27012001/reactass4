import React from 'react';
import { Link } from 'react-router-dom'; 

import './add.css'
const Student=()=>{

    return(<div>
        <h1 className='class2'>Student Details</h1>
        <Link to ="./addstudent" className='class4'><button style={{fontSize:"50px",backgroundColor:"rgb(236, 221, 71)",borderRadius:"20px"}}>Add Student</button></Link>
           <table className='class5' border={1}> 
            <thead>
             <tr>
                <th scope="col">Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
             </tr>
             </thead>
            <tbody>
                <tr>
                    <th>Ravi</th>
                    <th>21</th>
                    <th>B.tech</th>
                    <th>A1</th>
                    <th><Link to = "/studentEdit">Edit</Link></th>
                </tr>
                <tr>
                    <th>saurav</th>
                    <th>22</th>
                    <th>B.tech</th>
                    <th>B1</th>
                    <th><Link to = "/studentEdit">Edit</Link></th>
                </tr>
                <tr>
                    <th>Aman</th>
                    <th>21</th>
                    <th>Civil</th>
                    <th>A2</th>
                    <th><Link to = "/studentEdit">Edit</Link></th>
                </tr>
                <tr>
                    <th>Ravi</th>
                    <th>21</th>
                    <th>B.tech</th>
                    <th>A1</th>
                    <th><Link to = "/studentEdit">Edit</Link></th>
                </tr>
                <tr>
                    <th>Shubham</th>
                    <th>25</th>
                    <th>B.tech</th>
                    <th>A1</th>
                    <th><Link to = "/studentEdit">Edit</Link></th>
                </tr>
            </tbody>
            </table>

        </div>
    )
}
export default Student;