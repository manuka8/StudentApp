import React, { useState } from 'react'
import {studentlist} from './StudentsDb';
import './App.css'
const App = () => {
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

  const [fontSize, setFontSize] = useState('16px');
  
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
    <div className='body' style={{ fontSize }}>
      <h1>Students Information Protal</h1><hr/>
        <div className="font-size-controls">
          Font Size:
          <button onClick={() => setFontSize('16px')}>Small</button>
          <button onClick={() => setFontSize('20px')}>Medium</button>
          <button onClick={() => setFontSize('24px')}>Large</button><hr/>
        </div>
      <div className='main-container'>
        <div className='students-list'>
          <table border='1'>
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
        <div className='student-details'>
          <table border="1">
          <tr colspan="7">
              <img src={require('./assets/profilepic/'+student.profilePic)} alt={student.profilePic}/>
            </tr>
            <tr>
              <td>ID : {student.studentId}</td>
            </tr>
            <tr>
              <td>Full Name : {student.firstName} {student.lastName}</td>
            </tr>
            <tr>
              <td>Age : {student.lastName}</td>
            </tr>
            <tr>
              <td>Course : {student.age}</td>
            </tr>
            <tr>
              <td>Gender : {student.gender}</td>
            </tr>
            <tr>
              <td>address : {student.address.city},{student.address.country}</td>
            </tr>
            <tr>
              <td>skills : {student.skills.map(skill=>
                skill+=", ")}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
