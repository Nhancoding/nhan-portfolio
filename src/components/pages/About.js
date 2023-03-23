import React from 'react';
import AndreaHergert from "../../img/nhanduong.jpeg";

const styles = {
  andreahergert: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    textAlign: 'center',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
      <img style={styles.andreahergert} src={AndreaHergert} alt="Andrea Hergert" />
      </div>
      <p>
        As a full-stack web developer, I am a driven and self-motivated individual with a passion for technology and a desire to make a positive impact through my work. I have a strong foundation in programming languages and a proven ability to learn and adapt quickly in a fast-paced environment. With a focus on delivering high-quality, reliable solutions, I am committed to constantly improving my skills and staying up-to-date with the latest technologies. Whether working independently or as part of a team, I am always striving to contribute to the success of the project and the company.
      </p>
      <p>
      As a seasoned real estate agent with a strong focus on technology, I have gained extensive experience in utilizing innovative tools and platforms to enhance my clients' home buying and selling experiences. Over the years, I have leveraged a wide range of digital marketing strategies to attract prospective buyers, increase property visibility, and ultimately secure the best possible deals for my clients. Additionally, I have made use of advanced data analytics to help me better understand market trends and make more informed decisions on behalf of my clients. Through the use of virtual tours and other advanced visual aids, I have been able to provide buyers with a realistic, immersive experience that allows them to envision themselves in their future homes. Furthermore, I have always been committed to staying up-to-date with the latest advancements in real estate technology, and I am constantly seeking out new and innovative tools to help me stay ahead of the competition.
      </p>
      <p>
        Over the past two years, I have gained extensive experience in managing Airbnb properties while utilizing the latest technology to streamline operations and enhance guest experiences. Through my strong grasp of online booking platforms, property management software, and digital marketing, I have been able to attract a diverse clientele while maintaining high occupancy rates and ensuring top-notch guest satisfaction ratings. My expertise in utilizing technology has been instrumental in creating an efficient and effective system that maximizes profits while minimizing operational costs. Additionally, my exceptional communication and problem-solving skills have been instrumental in ensuring seamless guest experiences while resolving any issues in a timely and professional manner. I am committed to staying up-to-date with the latest industry trends and technology to maintain my competitive edge and provide the best possible service to my clients.
      </p>
    
    </div>
  );
}
