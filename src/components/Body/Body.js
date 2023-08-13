import React from 'react';
import Editor from '../Editor/Editor';
import styles from './Body.module.css';
import { useState } from 'react';

function Body() {
  const sections = {
    BasicInfo: "Basic-Info",
    Education: "Education",
    Project: "Academic Projects",
    WorkExp: "Work Experience",
    Cocurricular: "Co-Curricular",
    Other: "Extra-Curricular and cocurriculars",

  };
  const [resumeInformation, setresumeInformation] = useState({
    [sections.BasicInfo]: {
      id: sections.BasicInfo,
      sectionTitle: sections.BasicInfo,
      detail: {},
    },
    [sections.Education]: {
      id: sections.Education,
      sectionTitle: sections.Education,
      details: [],
    },
    [sections.Project]: {
      id: sections.Project,
      sectionTitle: sections.Project,
      details: [],
    },
    [sections.WorkExp]: {
      id: sections.WorkExp,
      sectionTitle: sections.WorkExp,
      details: [],
    },

    [sections.Cocurricular]: {
      id: sections.Cocurricular,
      sectionTitle: sections.Cocurricular,
      points: [],
    },

    [sections.Other]: {
      id: sections.Other,
      sectionTitle: sections.Other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Maker</p>
      <div className={styles.toolbar}>
        <button>Download Resume</button>
      </div>
      <div className={styles.main}>
        <Editor sections={sections} information={resumeInformation} />
      </div>
    </div>

  )
}

export default Body

