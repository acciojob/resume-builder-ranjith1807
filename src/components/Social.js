import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSocial } from '../redux/resumeSlice';

export default function Social() {
  const social = useSelector((state) => state.resume.social);
  const dispatch = useDispatch();

  const handleChange = (index, e) => {
    const newSocial = [...social];
    newSocial[index] = { ...newSocial[index], [e.target.name]: e.target.value };
    dispatch(updateSocial(newSocial));
  };

  const handleAdd = () => {
    dispatch(updateSocial([...social, { Social: '' }]));
  };

  return (
    <div className="section-container">
      <h2>Social Media Section</h2>
      {social.map((soc, index) => (
        <div key={index} className="item-group">
          <input type="text" name="Social" placeholder="Social Media Link" value={soc.Social} onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <button id="add_social" onClick={handleAdd}>Add Social</button>
    </div>
  );
}