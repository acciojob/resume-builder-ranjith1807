import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  nextStep, prevStep, updateProfile, 
  updateEducation, addEducation, deleteEducation,
  updateSkill, addSkill, deleteSkill,
  updateProject, addProject, deleteProject,
  updateSocial, addSocial, deleteSocial 
} from '../redux/resumeSlice';

// --- PROFILE ---
export const Profile = () => {
  const data = useSelector(state => state.resume.profile);
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(updateProfile({ [e.target.name]: e.target.value }));

  return (
    <div>
      <h2>Add your profile details</h2>
      <div>
        <input name="fname" placeholder="First Name" value={data.fname} onChange={handleChange} />
        <input name="lname" placeholder="Last Name" value={data.lname} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" value={data.phone} onChange={handleChange} />
        <input name="address" placeholder="Address" value={data.address} onChange={handleChange} />
      </div>
      <div>
        <label style={{gridColumn: '1/-1', fontSize: '14px', color: '#666'}}>Profile Image URL</label>
        <input name="url" placeholder="Image URL (e.g., https://...)" value={data.url} onChange={handleChange} style={{gridColumn: '1/-1'}} />
      </div>
      <NavigationButtons />
    </div>
  );
};

// --- EDUCATION ---
export const Education = () => {
  const education = useSelector(state => state.resume.education);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Education Details</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <input name="courseName" placeholder="Course Name*" value={edu.courseName} onChange={(e) => dispatch(updateEducation({ index, field: 'courseName', value: e.target.value }))} />
          <input name="completionYear" placeholder="Completion Year*" value={edu.completionYear} onChange={(e) => dispatch(updateEducation({ index, field: 'completionYear', value: e.target.value }))} />
          <input name="college" placeholder="College/School*" value={edu.college} onChange={(e) => dispatch(updateEducation({ index, field: 'college', value: e.target.value }))} />
          <input name="percentage" placeholder="Percentage*" value={edu.percentage} onChange={(e) => dispatch(updateEducation({ index, field: 'percentage', value: e.target.value }))} />
          {education.length > 1 && <button id="delete" onClick={() => dispatch(deleteEducation(index))}>Delete</button>}
        </div>
      ))}
      <button id="add_education" onClick={() => dispatch(addEducation())}>Add Education</button>
      <NavigationButtons />
    </div>
  );
};

// --- SKILLS ---
export const Skills = () => {
  const skills = useSelector(state => state.resume.skills);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Skills</h2>
      {skills.map((s, index) => (
        <div key={index} className="single-col-input">
          <input name="skill" placeholder="Skill*" value={s.skill} onChange={(e) => dispatch(updateSkill({ index, value: e.target.value }))} />
          <div className="button-group">
            {skills.length > 1 && <button id="delete_skill" onClick={() => dispatch(deleteSkill(index))}>Delete Skill</button>}
          </div>
        </div>
      ))}
      <button id="add_skill" onClick={() => dispatch(addSkill())}>Add Skill</button>
      <NavigationButtons />
    </div>
  );
};

// --- PROJECTS ---
export const Projects = () => {
  const projects = useSelector(state => state.resume.projects);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add your Mini Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="three-col-input">
          <input name="projectName" placeholder="Project Name*" value={proj.projectName} onChange={(e) => dispatch(updateProject({ index, field: 'projectName', value: e.target.value }))} />
          <input name="techStack" placeholder="Tech Stack" value={proj.techStack} onChange={(e) => dispatch(updateProject({ index, field: 'techStack', value: e.target.value }))} />
          <textarea name="description" placeholder="Description" value={proj.description} onChange={(e) => dispatch(updateProject({ index, field: 'description', value: e.target.value }))} />
          <div className="button-group">
            {projects.length > 1 && <button id="delete" onClick={() => dispatch(deleteProject(index))}>Delete</button>}
          </div>
        </div>
      ))}
      <button id="add_project" onClick={() => dispatch(addProject())}>Add Project</button>
      <NavigationButtons />
    </div>
  );
};

// --- SOCIAL MEDIA ---
export const SocialMedia = () => {
  const social = useSelector(state => state.resume.social);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Add social links like linkedin, github etc</h2>
      {social.map((soc, index) => (
        <div key={index} className="single-col-input">
          <input name="Social" placeholder="Social Links*" value={soc.Social} onChange={(e) => dispatch(updateSocial({ index, value: e.target.value }))} />
          <div className="button-group">
             {social.length > 1 && <button onClick={() => dispatch(deleteSocial(index))}>Delete Social</button>}
          </div>
        </div>
      ))}
      <button id="add_social" onClick={() => dispatch(addSocial())}>Add Social</button>
      <NavigationButtons />
    </div>
  );
};

// --- NAVIGATION COMPONENT ---
const NavigationButtons = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.resume.step);
  
  return (
    <div style={{ marginTop: 'auto' }}>
      {step > 1 && <button id="back" onClick={() => dispatch(prevStep())}>Back</button>}
      {step < 5 && <button id="next" onClick={() => dispatch(nextStep())}>Next</button>}
      {step === 5 && <button id="save_continue" onClick={() => dispatch(nextStep())}>Save and Continue</button>}
    </div>
  );
};