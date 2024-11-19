import React from 'react';
import '../css/StudentProfile.css'
const StudentProfile = ({student}) => {
  return (
    <div className='student-details'>
          <div className='student-img'>
            <img src={require('../assets/profilepic/'+student.profilePic)} alt={student.profilePic}/>
          </div>
          <div className='detail-table'>
          <table border="1" className='student-deatails-table'>
              <tr>
                <td>ID : {student.studentId}</td>
              </tr>
              <tr>
                <td>Full Name : {student.firstName} {student.lastName}</td>
              </tr>
              <tr>
                <td>Age : {student.age}</td>
              </tr>
              <tr>
                <td>Course : {student.course}</td>
              </tr>
              <tr>
                <td>Gender : {student.gender}</td>
              </tr>
              <tr>
                <td>address : {student.address.city},{student.address.country}</td>
              </tr>
              <tr>
                <td>skills : {student.skills.join(',')}
                </td>
              </tr>
            </table>
        </div>
    </div>
  )
}

export default StudentProfile
