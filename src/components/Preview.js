import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { prevStep } from '../redux/resumeSlice';

const Preview = () => {
  const data = useSelector(state => state.resume);
  const dispatch = useDispatch();

  return (
    <div style={{width: '100%'}}>
      <div className="preview-header">
        <h2>All steps completed - your resume is ready!!</h2>
        <button id="back" onClick={() => dispatch(prevStep())}>EDIT</button>
      </div>

      <div id="resume-preview">
        {/* Left Sidebar */}
        <div className="preview-left">
          {data.profile.url && <img src={data.profile.url} alt="Profile" style={{width: '100px', marginBottom: '20px', border: '1px solid #ccc'}} />}
          <h4>Skills</h4>
          <ul>
            {data.skills.map((s, i) => <li key={i}>{s.skill}</li>)}
          </ul>
        </div>

        {/* Right Content */}
        <div className="preview-right">
          <h3>{data.profile.fname} {data.profile.lname}</h3>
          <p>Address : {data.profile.address}</p>
          <p>Phone Number : {data.profile.phone}</p>
          
          <h4>Education</h4>
          {data.education.map((edu, i) => (
            <div key={i} style={{marginBottom: '10px'}}>
              <p><strong>College</strong></p>
              <p>Graduation Year : {edu.completionYear}</p>
              <p>Course : {edu.courseName}</p>
              <p>Percentage : {edu.percentage}%</p>
            </div>
          ))}
          
          <h4>Mini Projects</h4>
          {data.projects.map((p, i) => (
            <div key={i} style={{marginBottom: '10px'}}>
              <p><strong>{p.projectName}</strong></p>
              <p>Description : {p.description}</p>
              <p>Tech Stack : {p.techStack}</p>
            </div>
          ))}
          
          <h4>Social Links</h4>
          <ul>
            {data.social.map((soc, i) => <li key={i}>{soc.Social}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Preview;