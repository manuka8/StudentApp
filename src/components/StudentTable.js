import React, { useState } from 'react';
import '../css/StudentTable.css'
import {studentlist} from '../StudentsDb';
import StudentProfile from './StudentProfile';
function StudentTable() {
    const [student, setStudent] = useState({
        studentId: studentlist[0].studentId,
        firstName: studentlist[0].firstName, 
        lastName: studentlist[0].lastName, 
        age: studentlist[0].age, 
        course: studentlist[0].course, 
        gender: studentlist[0].gender, 
        address: { city: studentlist[0].address.city, country: studentlist[0].address.country }, 
        skills: studentlist[0].skills,
        profilePic:studentlist[0].profilePic
      });
    const handleView=(id, firstName, lastName, age, course, gender,city,country,skills,profilePic)=>{
        setStudent({
          studentId: id,
          firstName,
          lastName,
          age,
          course,
          gender,
          address:{city,
          country},
          skills,
          profilePic:profilePic
        });
      };
  return (
    
    <div className='main-container'>
        <div className='students-list'>
        <table border='1'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Course</th>
                    <th>Country</th>
                    <th> </th>
                    </tr>
                    {studentlist.map((student,index)=>(
            
                        <tr key={index}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.course}</td>
                        <td>{student.address.country}</td>
                        <td><button onClick={()=>handleView(student.studentId,student.firstName,student.lastName,student.age,student.course,student.gender,student.address.city,student.address.country,student.skills,student.profilePic)}>View</button></td>
                        </tr>
                    ))}
          </table>
        </div>
        <div className='student-profile'>
            <StudentProfile student={student}/>
        </div>
    </div>

  )
}

export default StudentTable
