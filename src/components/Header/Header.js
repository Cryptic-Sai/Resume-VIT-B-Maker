import React from "react"
import resumesvg from "../../assets/resume.svg";
import styles from "./Header.module.css";


function Header() {
  return (
    <div className = {styles.container}>
        <div className={styles.left}>
    <p className =  {styles.heading}>
  <span>Resume</span> that a VIT-B <span>Lion </span>Demands !!!
    </p>
    </div>
    <div className={styles.right}>
        <img src={resumesvg} alt ='Resume'
        style={{ height: 222, width: 555 }}/>
        
    </div>
    </div>
  )
}


 export default Header
