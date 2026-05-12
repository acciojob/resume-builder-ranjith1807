import React from 'react';
import { useSelector } from 'react-redux';

export default function Preview() {
  const { profile, education, skills, projects, social } = useSelector((state) => state.resume);

  return (
    <div className="preview-container">
      <h1>{profile.fname} {profile.lname}</h1>
      <p>{profile.phone} | {profile.address}</p>
      
      <h3>Education</h3>
      <ul>{education.map((edu, i) => <li key={i}>{edu.courseName} at {edu.college} ({edu.percentage}%)</li>)}</ul>
      
      <h3>Skills</h3>
      <ul>{skills.map((s, i) => <li key={i}>{s.skill}</li>)}</ul>
      
      <h3>Projects</h3>
      <ul>{projects.map((p, i) => <li key={i}><strong>{p.projectName}</strong> ({p.techStack}) - {p.description}</li>)}</ul>
      
      <h3>Social Links</h3>
      <ul>{social.map((soc, i) => <li key={i}>{soc.Social}</li>)}</ul>
    </div>
  );
}