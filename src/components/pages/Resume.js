import React from "react";


const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#0000FF",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>
      
      <h3 style={styles.h3}>Technical Skills</h3>
      <p>
        <h4>Front-End</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
      </p>
      <p>
        <h4>Back-End</h4>
        <ul>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
          <li>GraphQL</li>
        </ul>
      </p>
      <h3 style={styles.h3}>Work Experience</h3>
      <p>
        <h4>Real Estate Agent</h4>
        <h5>MJ Real Estate, Renton, WA</h5>
        (7/2022 – current)
        <ul>
          <li>
          Utilized innovative tools and platforms to enhance clients' home buying and selling experiences.
          </li>
          <li>
          Leveraged a wide range of digital marketing strategies to attract prospective buyers and increase property visibility.
          </li>
          <li>
          Utilized advanced data analytics to better understand market trends and make informed decisions on behalf of clients.
          </li>
          <li>
          Provided buyers with a realistic, immersive experience through the use of virtual tours and advanced visual aids.
          </li>
        </ul>
      </p>
      <p>
        <h4>Airbnb Superhost</h4>
        <h5>Properties in PA & WA</h5>
        (9/2020- 6/2022)
        <ul>
          <li>
          Utilized online booking platforms, property management software, and digital marketing to attract diverse clientele.
          </li>
          <li>
          Maintained high occupancy rates and ensured top-notch guest satisfaction ratings.
          </li>
          <li>
          Expertise in utilizing technology to create efficient and effective systems that maximize profits while minimizing operational costs.
          </li>
          <li>
          Exceptional communication and problem-solving skills to ensure seamless guest experiences and timely issue resolution.
          </li>
        </ul>
      </p>
      
      <h3 style={styles.h3}>Education</h3>
      <p>
        <h4>Coding Bootcamp Certificate of Completion (3/2023)</h4>
        University of Washington Professional & Continuing Education, Seattle,
        WA 
      </p>
      <p>
        <h4>Majored in Health Science for 2 years at RU</h4>
        Rutgers University, Camden, NJ
      </p>
      
    </div>
  );
}
