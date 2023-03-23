import React from "react";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";


const styles = {
  icons: {
    borderRadius: '25%',
    filter: 'opacity(100%)',
    margin: '5px',
  },
};

function Footer() {
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">
          
        <a href="https://www.linkedin.com/in/nhan-duong-95059b268/" target="blank">
          <img style={styles.icons} src={LinkedIn} alt="linkedin icon" />
          </a>
          <a href="https://github.com/Nhancoding" target="blank">
            <img style={styles.icons} src={Github} alt="github icon" />
          </a>
        
        </section>
      </div>
    </footer>
  );
}

export default Footer;
