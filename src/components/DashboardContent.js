import { NavLink } from "react-router-dom";
import { useState } from "react";
import { classes } from "../data/Data";
import { subjects } from "../data/Data";
import { chapters } from "../data/Data";
import { useNavigate } from "react-router-dom";

function DashboardContent() {
  const navigate = useNavigate();
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [chapter, setChapter] = useState("");

  const showMCQs = (e) =>{
    navigate("/practice")
  }


  return (
    <div className="content">
      <h1>Dashboard</h1>
      <div className="class-name">
        <h2>10th Class</h2>
        <p>
          Your currently active class is: 10th class. Do you want to{" "}
          <NavLink to="/settings">Switch Class</NavLink>
        </p>
      </div>
      <div className="dashboard-parts">
        <div className="short-analytics">
          <h3>Overall Performance</h3>

          <h4>Your Progress</h4>
          <div className="progress-div">
            <h4>Lessons</h4>
            <p>56 completed out of 80</p>
          </div>
          <div className="progress-div">
            <h4>Quizzes</h4>
            <p>48 completed out of 100</p>
          </div>
          <div className="progress-div">
            <h4>Attendance</h4>
            <p>46 presents in 60 classes</p>
          </div>
        </div>
        <div className="choose-test">
          <div className="choose-test-upper">
            <div className="container1">
              <h2>Let's start a quick test</h2>
              <p>Fill the below requirements</p>
            </div>
          </div>
          <form className="practice-mcqs-content" onSubmit={showMCQs}>
            <select
              name="classes-dropdown"
              className="classes-dropdown"
              onChange={(e) => setClassName(e.target.value)}
              required
            >
              {classes.map((value, index) => {
                return <option value={value.class}>{value.class}</option>;
              })}
            </select>
            <select
              name="subjects-dropdown"
              className="subjects-dropdown"
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              {subjects.map((subject, index) => {
                return (
                  <option value={subject.subject}>{subject.subject}</option>
                );
              })}
            </select>
            <label htmlFor="id-mcq">Select Chapter</label>
            <select
              name="chapters-dropdown"
              className="chapters-dropdown"
              onChange={(e) => setChapter(e.target.value)}
              required
            >
              {chapters.map((chapter, index) => {
                return (
                  <option value={chapter.class}>{chapter.class}</option>
                );
              })}
            </select>
            <div>
              <button type="submit" className="start-test">
                Start Test
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
