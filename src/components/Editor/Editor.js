import React, { useEffect, useState } from 'react';
import InputControl from '../InputControl/InputControl';
import styles from "./Editor.module.css"

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = React.useState
    (Object.keys(sections)[0]);


  const [activeInformation, setActiveInformation] = React.useState
    (information[sections[Object.keys(sections)[0]]]
    );

  // For preefilled jaise section ke andar vaale title 
  // mein setion likjh ke aayega , achivement vaale section mein achievement likh ke ayega
  const [sectionTitle, setsectionTitle] = React.useState
    (sections[Object.keys(sections)[0]]);

  // hamare kissi bhi point pe updated values hogi always "values" ki vajh se
  const [values, setValues] = React.useState
    ({
      name: activeInformation?.detail?.name || "",
      registraionNumber: activeInformation?.detail?.registraionNumber || "",
      email: activeInformation?.detail?.email || "",
      phone: activeInformation?.detail?.phone || "",
      linkdin: activeInformation?.detail?.linkdin || "",
      github: activeInformation?.detail?.github || "",
      portfolio: activeInformation?.detail?.portfolio || "",
      leetcodeCodechef: activeInformation?.detail?.leetcodeCodechef || "",
      technical: activeInformation?.detail?.technical || "",
      certifications: activeInformation?.detail?.certifications || "",
    })

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...values }
    tempValues.points[index] = value
    setValues(tempValues)
  }
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <div><label>Name</label>
          <InputControl
            label="Name"
            placeholder="Enter your Full name eg. SAI"
            value={values.name}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          /></div>
        <div><label>Registraion Number</label>
          <InputControl
            label="Registraion Number"
            value={values.registraionNumber}
            placeholder="Enter your Registraion Number "
            onChange={(event) =>
              setValues((prev) => ({ ...prev, registraionNumber: event.target.value }))
            }
          /></div>
      </div>
      <div className={styles.row}>
        <div><label>Email</label>
          <InputControl
            label="Email"
            value={values.email}
            placeholder="Enter your Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          /></div>
        <div><label>Enter Phone</label>
          <InputControl
            label="Phone"
            value={values.phone}
            placeholder="Enter your Phone number"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, phone: event.target.value }))
            }
          /></div>
      </div>

      <div className={styles.row}>
        <div><label>Linkdin Link</label>
          <InputControl
            label="Linkedin Link"
            placeholder="Enter your Linkdin profile Link"
            value={values.linkedinlink}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, linkedin: event.target.value }))
            }
          /></div>

        <div><label>Github Link</label>
          <InputControl
            label="Github Link"
            placeholder="Enter your Github profile link"
            value={values.github}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, github: event.target.value }))
            }
          /></div>
      </div>
      <div className={styles.row}>
        <div><label>Portfolio Link</label>
          <InputControl
            label="Portfolio Link"
            placeholder="Enter your Porfolio profile Link"
            value={values.portfolio}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, portfolio: event.target.value }))
            }
          /></div>

        <div><label>Leetcode/Codechef Link</label>
          <InputControl
            label="Leetcode/Codechef Link"
            placeholder="Enter your Leetcode/Codecheflink"
            value={values.leetcodeCodechef}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, leetcodeCodechef: event.target.value }))
            }
          /></div>
      </div>
      <div className={styles.row}>
        <div><label>Technical Skills</label>
          <InputControl
            label="Technical Skills"
            placeholder="Enter your Technical skills."
            value={values.technical}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, technical: event.target.value }))
            }
          /></div>
        <div><label>Certifications</label>
          <InputControl
            label="Certifications"
            value={values.certifications}
            placeholder="Enter your Certifications eg. AWS"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, certifications: event.target.value }))
            }
          /></div>
      </div>

    </div>
  );
  const educationBody = (
    <div className={styles.detail}>

      <div className={styles.row}>
        <div><label>Graduation</label>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title eg. B-tech"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /> </div>
        <div><label>College Name</label>
          <InputControl
            label="College/School Name"
            value={values.college}
            placeholder="Enter name of your college/school"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, college: event.target.value }))
            }
          /> </div>
      </div>

      <div className={styles.row}>
        <div><label>CGPA</label>
          <InputControl
            label="CGPA"
            //   type="date"
            placeholder="Enter CGPA"
            value={values.CGPA}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, CGPA: event.target.value }))
            }
          /> </div>
        <div><label>Tenure</label>
          <InputControl
            label="Tenure"
            //   type="date"
            placeholder="Enter end date of this education"
            value={values.Tenure}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Tenure: event.target.value }))
            }
          /> </div>
      </div>

      <div className={styles.row}>
        <div><label>Class XII</label>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title Class XII"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /> </div>
        <div><label>School Name</label>
          <InputControl
            label="College/School Name"
            value={values.college}
            placeholder="Enter name of your school"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, college: event.target.value }))
            }
          /> </div>
      </div>
      <div className={styles.row}>
        <div><label>Percentage</label>
          <InputControl

            placeholder="Enter the percentage"
            value={values.Percentage}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Percentage: event.target.value }))
            }
          /> </div>
        <div><label>Tenure</label>
          <InputControl
            label="Tenure"
            //   type="date"
            placeholder="Enter end date of this education"
            value={values.Tenure}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Tenure: event.target.value }))
            }
          /> </div>
      </div>
      <div className={styles.row}>
        <div><label>Class X</label>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter title Class X"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /> </div>
        <div><label>School Name</label>
          <InputControl
            label="College/School Name"
            value={values.college}
            placeholder="Enter name of your school"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, college: event.target.value }))
            }
          /> </div>
      </div>
      <div className={styles.row}>
        <div><label>Percentage</label>
          <InputControl
            placeholder="Enter the percentage"
            value={values.Percentage}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Percentage: event.target.value }))
            }
          /> </div>
        <div><label>Tenure</label>
          <InputControl
            label="Tenure"
            placeholder="Enter end date of this education"
            value={values.Tenure}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, Tenure: event.target.value }))
            }
          /> </div>
      </div>
    </div>
  );
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.extra}>
        <div className={styles.row}>
          <div><label>Titile</label>
            <InputControl
              //   label="Title"
              value={values.title}
              placeholder="Enter title eg. Chat app"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, title: event.target.value }))
              }
            /> </div>
          <div><label>Domain of the Project</label>
            <InputControl
              label="Overview"
              value={values.overview}
              placeholder="Eg: Full stack, Front-End"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, overview: event.target.value }))
              }
            /> </div>
        </div>


        <div className={styles.row}>
          <div><label>Deployed Link</label>
            <InputControl
              label="Deployed Link"
              value={values.link}
              placeholder="Enter deployed link of project"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, link: event.target.value }))
              }
            /> </div>
          <div><label>Github Link</label>
            <InputControl
              label="Github Link"
              value={values.github}
              placeholder="Enter github link of project"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, github: event.target.value }))
              }
            /> </div>
        </div>

      </div>
      <div className="{styles.column}">
        <label>Enter project description</label>

        <InputControl

          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );
  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <div><label>Titile</label>
          <InputControl
            label="Title"
            placeholder="Enter title eg. Frontend developer"
            value={values.title}
            onChange={(event) => setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /></div>

        <div><label>Company Name</label>
          <InputControl
            label="Company Name"
            placeholder="Enter company name eg. amazon"
            value={values.companyName}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, companyName: event.target.value }))
            }
          />
        </div>
      </div>
      <div className={styles.row}>
        <div><label>Certification Link</label>
          <InputControl
            label="Certificate Link"
            placeholder="Enter certificate link"
            value={values.certificationLink}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, certificationLink: event.target.value, }))
            }
          /> </div>
        <div><label>Start Date</label>
          <InputControl
            //   label="Start Date"
            type="date"
            placeholder="Enter start date of work"
            value={values.startDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, startDate: event.target.value }))
            }
          />
        </div>
      </div>
      <div className={styles.row}>
        <div><label>Enter work description</label>
          <InputControl
            placeholder="Line 1"
            value={values.points ? values.points[0] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 0)}
          />
          <InputControl
            placeholder="Line 2"
            value={values.points ? values.points[1] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 1)}
          />
          <InputControl
            placeholder="Line 3"
            value={values.points ? values.points[2] : ""}
            onChange={(event) => handlePointUpdate(event.target.value, 2)}
          /></div>
        <div><label>End Date</label>
          <InputControl
            //   label="End Date"
            type="date"
            placeholder="Enter end date of work"
            value={values.endDate}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, endDate: event.target.value }))
            }
          /></div>
      </div>


    </div>
  );
  const cocurricularbody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <div><label>Co-Curricular</label>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter Co-Curricular Activity"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /> </div>
        <div><label>Description</label>
          <InputControl
            label="Description"
            value={values.description}
            placeholder="Enter Description"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          /> </div>
      </div>

      <div className={styles.row}>
        <div><label>Co-Curricular</label>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter Co-Curricular Activity"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /> </div>
        <div><label>Description</label>
          <InputControl
            label="Description"
            value={values.description}
            placeholder="Enter Description"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          /> </div>
      </div>

      <div className={styles.row}>
        <div><label>Co-Curricular</label>
          <InputControl
            label="Title"
            value={values.title}
            placeholder="Enter Co-Curricular Activity"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, title: event.target.value }))
            }
          /> </div>
        <div><label>Description</label>
          <InputControl
            label="College/School Name"
            value={values.description}
            placeholder="Enter Description"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          /> </div>
      </div>
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <div><label>Co-Curricular</label>
          <InputControl
            label="Title"
            value={values.cocurricularbody}
            placeholder="Enter Co-Curricular Activity"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, cocurricularbody: event.target.value }))
            }
          /> </div>
        <div><label>Description</label>
          <InputControl
            label="College/School Name"
            value={values.description}
            placeholder="Enter Description"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          /> </div>
      </div>
      <div className={styles.row}>
        <div><label>Co-Curricular</label>
          <InputControl
            label="Title"
            value={values.cocurricularbody}
            placeholder="Enter Co-Curricular Activity"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, cocurricularbody: event.target.value }))
            }
          /> </div>
        <div><label>Description</label>
          <InputControl
            label="College/School Name"
            value={values.description}
            placeholder="Enter Description"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          /> </div>
      </div>
      <div className={styles.row}>
        <div><label>Co-Curricular</label>
          <InputControl
            label="Title"
            value={values.cocurricularbody}
            placeholder="Enter Co-Curricular Activity"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, cocurricularbody: event.target.value }))
            }
          /> </div>
        <div><label>Description</label>
          <InputControl
            label="College/School Name"
            value={values.description}
            placeholder="Enter Description"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, description: event.target.value }))
            }
          /> </div>
      </div>

    </div>
  );


  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.BasicInfo:
        return basicInfoBody;
      case sections.WorkExp:
        return workExpBody;
      case sections.Project:
        return projectBody;
      case sections.Education:
        return educationBody;
      case sections.Cocurricular:
        return cocurricularbody;
      case sections.Other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission=()=>{
      console.log(values);
  }
  //  For Updation our keys, values,
  useEffect(() => {
    const actveInfo = information[sections[activeSectionKey]]
    setActiveInformation(actveInfo);
    setsectionTitle([activeSectionKey]);
    setValues({
      
    })
  }, [activeSectionKey]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>{Object.keys(sections).map((key) => (

        <div
          className={`{styles.section} ${activeSectionKey === key ? "active" : ""
            }`} key={key}
          onClick={() => setActiveSectionKey(key)}

        >{sections[key]}
        </div>
      ))}
      </div>

      <div className={styles.body}>
        <div><label>Title</label></div>
        <InputControl
          placeholder="Enter Title"
          value={sectionTitle}

        />
        {/*  So that project buttons comes in one line */}
        <div className={styles.chips} style={{ display: "flex" }} >
          {
            activeInformation?.details ?
              activeInformation?.details?.map((item, index) => (
                <div className={styles.chip} key={item.title + index} >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                </div>
              ))
              : ""}
        </div>

        {generateBody()}

        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
}

export default Editor