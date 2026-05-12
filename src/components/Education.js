import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEducation } from '../redux/resumeSlice';

export default function Education() {
  const education = useSelector((state) => state.resume.education);
  const dispatch = useDispatch();

  const handleChange = (index, e) => {
    const newEdu = [...education];
    newEdu[index] = { ...newEdu[index], [e.target.name]: e.target.value };
    dispatch(updateEducation(newEdu));
  };

  const handleAdd = () => {
    dispatch(updateEducation([...education, { courseName: '', completionYear: '', college: '', percentage: '' }]));
  };

  const handleDelete = (index) => {
    dispatch(updateEducation(education.filter((_, i) => i !== index)));
  };

  return (
    <div className="section-container">
      <h2>Education Section</h2>
      {education.map((edu, index) => (
        <div key={index} className="item-group">
          <input type="text" name="courseName" placeholder="Course Name" value={edu.courseName} onChange={(e) => handleChange(index, e)} />
          <input type="text" name="completionYear" placeholder="Completion Year" value={edu.completionYear} onChange={(e) => handleChange(index, e)} />
          <input type="text" name="college" placeholder="College" value={edu.college} onChange={(e) => handleChange(index, e)} />
          <input type="text" name="percentage" placeholder="Percentage" value={edu.percentage} onChange={(e) => handleChange(index, e)} />
          <button id="delete" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button id="add_education" onClick={handleAdd}>Add Education</button>
    </div>
  );
}