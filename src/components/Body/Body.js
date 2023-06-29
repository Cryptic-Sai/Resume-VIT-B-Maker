import React from 'react';
import Editor from '../Editor/Editor';
import styles from './Body.module.css';

function Body() {
  const sections = {
    basicInfo: "Basic-Info",
    education: "Education",
    project: "Academic Projects",
    workExp: "Work Experience",
    cocurricular: "Co-Curricular",
    // summary: "Summary",
    other: "Extra-Curricular and achievements",
    // basicInfo: "Basic Info",
    // education: "Education",
    // academicProjects: "Academic Projects",
    // workExp: "Work Experience",
    // cocurricular: "Co-Curricular",
    // // achievement: "Achievements",
    // other: "Extra-Curricular and Achievements",
  };
  return (
    <div className ={styles.container}>
        <p className ={styles.heading}>Resume Maker</p>
        <div className ={styles.toolbar}>
          <button>Download Resume</button>
        </div>
        <div className={styles.main}>
          <Editor sections={sections} />
        </div>
    </div>
    
  )
}

export default Body

 