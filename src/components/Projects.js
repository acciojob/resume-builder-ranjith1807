import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProjects } from './redux/resumeSlice';

export default function Projects() {
  const projects = useSelector((state) => state.resume.projects);
  const dispatch = useDispatch();

  const handleChange = (index, e) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [e.target.name]: e.target.value };
    dispatch(updateProjects(newProjects));
  };

  const handleAdd = () => {
    dispatch(updateProjects([...projects, { projectName: '', techStack: '', description: '' }]));
  };

  const handleDelete = (index) => {
    dispatch(updateProjects(projects.filter((_, i) => i !== index)));
  };

  return (
    <div className="section-container">
      {/* Update the text below to match Cypress expectations */}
      <p>Add your Mini Projects</p>

      {projects.map((proj, index) => (
        <div key={index} className="item-group">
          <input type="text" name="projectName" placeholder="Project Name" value={proj.projectName} onChange={(e) => handleChange(index, e)} />
          <input type="text" name="techStack" placeholder="Tech Stack" value={proj.techStack} onChange={(e) => handleChange(index, e)} />
          <textarea name="description" placeholder="Description" value={proj.description} onChange={(e) => handleChange(index, e)}></textarea>
          <button id="delete" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button id="add_project" onClick={handleAdd}>Add Project</button>
    </div>
  );
}