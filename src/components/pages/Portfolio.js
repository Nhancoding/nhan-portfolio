import React from "react";
import DevelopmentTracker from "../../img/developmenttracker.png";
import EmployeeTracker from "../../img/employee_tracker.png";
import MakinMoves from "../../img/Travel Plan IMG.jpg";

import "../../style/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://howardlee2022.github.io/Makin-Moves-fe/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={MakinMoves}
                alt="screenshot of curriculum corner"
              />
              <header>
                <h3 style={styles.header}>Makin Moves</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/HowardLee2022/Makin-Moves-be"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This is our group project for Project 3 created in the UW Coding Bootcamp. This is a MERN (MongoDB, Express.js, React, and Node.js) app that will allow a user to create trips and add activities.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="#"
              target="blank"
            >
              <img
                className="card-img-top"
                src={EmployeeTracker}
                alt="screenshot of employee tracker on command line showing list of employees"
              />
              <header>
                <h3 style={styles.header}>Employee Tracker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/Nhancoding/Employee-tracker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is an employee tracker database created in the UW Coding
              Bootcamp. It allows users to input departments, roles, and
              employees, update an employee's role, and view a table of
              departments, roles, and employees.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://development-tracker.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={DevelopmentTracker}
                alt="screenshot of motivation station showing a list of goals on the homepage"
              />
              <header>
                <h3 style={styles.header}>Development Tracker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="hhttps://github.com/Nhancoding/development-tracker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is our group project for Project 2 created in the UW Coding
              Bootcamp. On the front-end, the app can be accessed at Heroku. On
              the back-end, this is a node command line application that
              utilizes sequilize, dotenv, mysql2, express, handlebars, dayjs,
              and bcrypt. The Development Tracker app allows users to create projects and keep track of contractors.
            </p>
          </section>
        </div>

        
      </div>
    </div>
  );
}
