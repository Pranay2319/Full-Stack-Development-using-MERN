//4. React Components, Props, and State
//a. Create multiple components and render them on a single page.
/* ===========================
   App.jsx
=========================== */
// Main App component passing data using props

import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Hotel Cards with props */}
      <HotelCard
        restaurant="Domino's Pizza"
        food="Farmhouse Pizza"
        price={499}
        discount={20}
        rating={4.5}
      />

      <HotelCard
        restaurant="McDonald's"
        food="McAloo Tikki Meal"
        price={299}
        discount={15}
        rating={4.3}
      />

      <HotelCard
        restaurant="Burger King"
        food="Veg Whopper Combo"
        price={399}
        discount={10}
        rating={4.4}
      />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;


/* ===========================
   Header.jsx
=========================== */
// Header component

function Header() {
  return (
    <div>
      <h1> Online Food Delivery Dashboard </h1>
      <hr />
    </div>
  );
}

export default Header;


/* ===========================
   Footer.jsx
=========================== */
// Footer component

function Footer() {
  return (
    <div>
      <h3> © 2026 Food Delivery App </h3>
    </div>
  );
}

export default Footer;


/* ===========================
   HotelCard.jsx
=========================== */
// HotelCard component receiving props

function HotelCard(props) {

  // Calculate discount amount
  const discount = (props.price * props.discount) / 100;

  // Calculate final price after discount
  const finalPrice = props.price - discount;

  return (
    <div>
      {/* Display data from props */}
      <h2>{props.restaurant}</h2>
      <p>Food Item: {props.food}</p>
      <p>Original Price: ₹{props.price}</p>
      <p>Discount: {props.discount}%</p>
      <p>Discount Amount: ₹{discount}</p>

      <p>
        <b>Final Price: ₹{finalPrice}</b>
      </p>

      <p>Rating: {props.rating}</p>
      <hr />
    </div>
  );
}

export default HotelCard;


//b. Pass data between components using props
// ========================= App.jsx =========================

import Header from "./components/Header";
import HotelCard from "./components/HotelCard";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />

            <HotelCard
                restaurantName="Domino's Pizza"
                food="Farmhouse Pizza 🍕"
                price={399}
                discount={20}
                rating={4.5}
            />

            <HotelCard
                restaurantName="KFC"
                food="Zinger Burger 🍔"
                price={399}
                discount={15}
                rating={4.2}
            />

            <Footer />
        </div>
    );
}

export default App;


// ========================= Header.jsx =========================

function Header() {
    return (
        <div>
            <h1>🍔 Online Food Delivery Dashboard</h1>
            <hr />
        </div>
    );
}

export default Header;


// ========================= HotelCard.jsx =========================

function HotelCard(props) {

    const discount = (props.price * props.discount) / 100;
    const finalPrice = props.price - discount;

    return (
        <div>
            <h2>{props.restaurantName}</h2>

            <p>Food Item 🍔 : {props.food}</p>
            <p>Original Price : ₹{props.price}</p>
            <p>Discount : {props.discount}%</p>
            <p>Discount Amount : ₹{discount}</p>
            <p><b>Final Price : ₹{finalPrice}</b></p>

            <p>Rating ⭐ : {props.rating}</p>

            <hr />
        </div>
    );
}

export default HotelCard;


// ========================= Footer.jsx =========================

function Footer() {
    return (
        <div>
            <h3>© 2026 Food Delivery App</h3>
            <h4>Pranay Bhadwalkar (T003)</h4>
        </div>
    );
}

export default Footer;

//c. Use the useState hook to manage and update data.
import { useState } from "react";
function App() {
    // State Variable
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Button Click Counter</h1>
            <hr />
            <h2>User Clicks : {count} Times</h2>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
            <p> Pranay T003</p>
        </div>
    );
}
export default App;


//d. Create a form component to accept user input and display it Dynamically.
//===========App.jsx:===============
import StudentForm from "./StudentForm";
function App() {
    return (
        <div>
            <StudentForm />
        </div>
    );
}
export default App;

//============StudentForm.jsx:============
import { useState } from "react";
function StudentForm() {
    // State Variables
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [branch, setBranch] = useState("");
    const [cgpa, setCgpa] = useState("");
    return (
        <div>
            <h1>Student Registration Form</h1>
            <hr />
            <label>Student Name : </label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Roll Number : </label>
            <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
            />
            <br />
            <label>Branch : </label>
            <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
            />
            <br />
            <label>CGPA : </label>
            <input
                type="text"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
            />
            <hr />
            <h2>Student Details</h2>
            <h3>Name : {name}</h3>
            <h3>Roll Number : {rollNo}</h3>
            <h3>Branch : {branch}</h3>
            <h3>CGPA : {cgpa}</h3>
        </div>
    );
}
export default StudentForm;


//e. Display a list of items stored in the state using map().
//=========App.jsx:========
import CompanyList from "./components/CompanyList";
function App() {
  return (
    <div>
      <CompanyList />
    </div>
  );
}
export default App;

//===========CompanyList.jsx:============
import { useState } from "react";
function CompanyList() {
  const [companies] = useState([
    "TCS",
    "Infosys",
    "Accenture",
    "Wipro",
    "Capgemini"
  ]);
  return (
    <div>
      <h1>Placement Companies</h1>
      <hr />
      <ul>
        {companies.map((company, index) => (
          <li key={index}>{company}</li>
        ))}
      </ul>
      <p>Pranay T003</p>
    </div>
  );
}
export default CompanyList;


//f. Build a small interactive component (e.g., counter or to-do list). 
//==========App.jsx:===========
import { useState } from "react";
function App() {
  // State Variable
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React Counter Application</h1>
      <hr />
      <h2>Current Count: {count} Times</h2>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      &nbsp;
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease
      </button>
       &nbsp;
      <button onClick={() => setCount(0)}>Reset</button>
      <p>Pranay T003</p>
    </div>
  );
}
export default App;


//EXTRA 
//==============EXTRA (To-DO-List ):====================
Code:
App.jsx:
import { useState } from "react";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  // Add Task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <hr />
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <br></br>
      {/* Display Tasks */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>Pranay T0030</h4>
    </div>
  );
}
export default App;

App.css:
.container {
  text-align: center;
  margin-top: 50px;
}
/* Input Field */
input {
  padding: 8px;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
/* Add Button */
button {
  background-color: #e63946;
  color: white;
  border: none;
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background-color: #d62828;
}
/* Task List with BULLETS */
.task-list {
  margin-top: 20px;
  text-align: left;
  display: inline-block;
  list-style-type: disc;   /* 👈 Bullet Points */
  padding-left: 20px;
}
/* Each Task */
.task-list li {
  margin: 8px 0;
  font-size: 16px;
}
/* Delete Button */
.delete-btn {
  margin-left: 10px;
  background-color: #555;
}
.delete-btn:hover {
  background-color: #222;
}

