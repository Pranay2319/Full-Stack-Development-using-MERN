a. Create a React application using Vite/CRA and display “Welcome
to MERN Stack Development”.
Code :
function App()
{
return(
<div>
<h1>Welcome to MERN Stack Development</h1>
<h2>Pranay T003</h2>
</div>
);
}
export default App

b. Display dynamic data using JSX.
1) Code:
function App()
{
const emp ="Pranay Bhadwalkar";
const dept="IT";
const sal =90000;
return(
<div>
<h1>Employee Details :</h1>
<p>Name : {emp}</p>
<p>Department : {dept}</p>
<p>Salary : {sal}</p>
<h4> Pranay(T003)</h4>
</div>
);
}
export default App

2) Code:
function App() {
const studentName = "Pranay Bhadwalkar";
const totalClasses = 60;
const attendedClasses = 54;
const attendance = (attendedClasses / totalClasses) * 100;
return (
<h1>Attendance Dashboard</h1>
<hr />

<p>Name : {studentName}</p>
<p>Total Classes : {totalClasses}</p>
<p>Classes Attended : {attendedClasses}</p>
<p>Attendance : {attendance.toFixed(2)}%</p>

<h3>
    Status : {attendance >= 75 ? "Eligible for Exam" : "Not Eligible"}
</h3>

<h4>Pranay (T003)</h4>
</div>
);
}
export default App

c. Declare variables and write a function to calculate the sum of two numbers and display the result.
Code:
function App() {

  const maths = 85;
  const sci = 90;

  function calculate(mark1, mark2) {
    return mark1 + mark2;
  }

  return (
    <div>
      <h1>Student Marks</h1>
      <hr />

      <p>Mathematics Marks : {maths}</p>
      <p>Science Marks : {sci}</p>

      <hr />

      <h2>Total Marks : {calculate(maths, sci)}</h2>

      <h3>Pranay (T003)</h3>
    </div>
  );
}

export default App

d. Apply basic CSS styling to a React component.
Code:
import "./App.css";

function App() {

    return (
        <div className="container">

            <h1>Student Dashboard</h1>

            <hr />

            <p>Name : Pranay Bhadwalkar</p>

            <p>Roll Number : T003</p>

            <p>Course : MCA</p>

            <p>Semester : III</p>

            <button>View Result</button>

        </div>
    );
}

export default App;
.container{

    width:700px;

    margin:50px auto;

    padding:20px;

    border:2px solid black;

    border-radius:10px;

    background-color:whitesmoke;

    text-align:center;

}

h1{

    color:darkblue;

}

p{

    font-size:18px;

    color:black;

}
button{

    background-color: green;

    color: white;

    border: none;

    padding: 10px 20px;

    font-size: 16px;

    border-radius: 5px;

    cursor: pointer;

}

button:hover{

    background-color:darkgreen;

}

e. Create a simple functional component and render it in App.js.
App.jsx:
import Student from "./components/Student";

function App() {

    return (

        <div>

            <h1>This is fuctional component practical</h1>

            <hr />

            <Student />

        </div>

    );
}

export default App;

Student,jsx:
function Student() {

    return (

        <div>

            <h2>Student Components</h2>

            <p>Name : Pranay Bhadwalkar </p>

            <p>Course : MCA</p>

            <p>Semester : III</p>

        </div>

    );

}

export default Student;


f. Create a React component that displays the current date and time dynamically using JavaScript.
Code:
function App() {

    // Create a object
    const currentDate = new Date();

    return (
        <div>

            <h1>Current Date and Time</h1>

            <hr />

            <p>Date : {currentDate.toLocaleDateString()}</p>

            <p>Time : {currentDate.toLocaleTimeString()}</p>

            <h2>Pranay (T003)</h2>

        </div>
    );
}

export default App;

