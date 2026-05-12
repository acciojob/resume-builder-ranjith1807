import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSkills } from '../redux/resumeSlice';

export default function Skills() {
  const skills = useSelector((state) => state.resume.skills);
  const dispatch = useDispatch();

  const handleChange = (index, e) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], [e.target.name]: e.target.value };
    dispatch(updateSkills(newSkills));
  };

  const handleAdd = () => {
    dispatch(updateSkills([...skills, { skill: '' }]));
  };

  const handleDelete = (index) => {
    dispatch(updateSkills(skills.filter((_, i) => i !== index)));
  };

  return (
    <div className="section-container">
      <h2>Skills Section</h2>
      {skills.map((s, index) => (
        <div key={index} className="item-group">
          <input type="text" name="skill" placeholder="Skill" value={s.skill} onChange={(e) => handleChange(index, e)} />
          <button id="delete_skill" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button id="add_skill" onClick={handleAdd}>Add Skill</button>
    </div>
  );
}