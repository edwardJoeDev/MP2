import { students } from "./data";
import '../css/student.css'


export default function StudentList () {
    const listItems = students.map(student => {
    return(
        <li key={student.id} className="student-list">
            <div className="student-list-info">
                <img src={require(`../img/students/${student.imageId}.png`)} className="student-img"/>
                <div className="student-info">
                    <p className="student-name">{student.fisrtName} {student.lastName}</p> 
                    <p className="student-age">{student.age} years of age</p> 
                    <p className="student-course">{student.course.map((course) => `Bachelor of ${course.bachelor} Major in ${course.major}`)}</p>
                </div>
            </div>
            <table className="subject-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
            {student.subjects.map((subject) => {
                return (
                    <tr>
                        <td>{subject.subject}</td>
                        <td>{subject.grade}</td>
                        <td>{subject.time}</td>
                    </tr>
                    )})}
                </tbody>
            </table>
        </li>
    )
                });
    return (
        <div>
            <ul className="student">{listItems}</ul>
        </div>
    )
}