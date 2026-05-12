import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../redux/resumeSlice';

export default function Profile() {
  const profile = useSelector((state) => state.resume.profile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(updateProfile({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="section-container">
      <h2>Profile Section</h2>
      <input type="text" name="fname" placeholder="First Name" value={profile.fname} onChange={handleChange} />
      <input type="text" name="lname" placeholder="Last Name" value={profile.lname} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone Number" value={profile.phone} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={profile.address} onChange={handleChange} />
      <input type="file" name="url" onChange={(e) => dispatch(updateProfile({ url: URL.createObjectURL(e.target.files[0]) }))} />
    </div>
  );
}