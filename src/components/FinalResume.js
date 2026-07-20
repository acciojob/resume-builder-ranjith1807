import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button, Divider, Paper } from '@material-ui/core';

export const FinalResume = () => {
  const state = useSelector((s) => s);
  const { profile, education, skills, projects, socialMedia } = state;

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Box textAlign="center">
      <Typography variant="subtitle1" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        All steps completed - your resume is ready!!
      </Typography>

      <Box display="flex" justifyContent="center" gridGap="15px" marginBottom="15px">
        <Button variant="text" size="small" onClick={handleReset}>RESET</Button>
        <Button variant="text" size="small">EDIT</Button>
      </Box>

      <Box marginBottom="30px">
        <Button
          variant="contained"
          style={{ backgroundColor: '#ff0055', color: '#fff', fontWeight: 'bold' }}
          onClick={handlePrint}
        >
          DOWNLOAD / PREVIEW
        </Button>
      </Box>

      {/* Document Output Preview */}
      <Paper style={{ padding: '40px', textAlign: 'left', maxWidth: '750px', margin: '0 auto', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', backgroundColor: '#fff' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
          <Box flex="1">
            <Typography variant="h4" style={{ fontWeight: 'bold', color: '#333' }}>
              {profile.fname || 'Name'} {profile.lname || 'Last'}
            </Typography>
            <Typography variant="body2" style={{ marginTop: '10px', color: '#555' }}>
              <strong>Address :</strong> {profile.address || 'Somewhere'}
            </Typography>
            <Typography variant="body2" style={{ color: '#555' }}>
              <strong>Phone Number:</strong> {profile.phone || '2345678901'}
            </Typography>
          </Box>
          {profile.url && (
            <Box marginLeft="20px">
              <img src={profile.url} alt="Profile" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ccc' }} />
            </Box>
          )}
        </Box>

        <Divider style={{ margin: '20px 0' }} />

        <Box display="flex">
          {/* Left Column: Skills & Social */}
          <Box width="35%" paddingRight="20px" borderRight="1px solid #eee">
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
              Skills
            </Typography>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {skills.map((s, idx) => (
                <li key={s.id || idx} style={{ marginBottom: '5px' }}>
                  <Typography variant="body2">{s.skill || `Skill ${idx + 1}`}</Typography>
                </li>
              ))}
            </ul>

            <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '25px', marginBottom: '10px', color: '#333' }}>
              Social Links
            </Typography>
            <ul style={{ paddingLeft: '20px', margin: 0 }}>
              {socialMedia.map((soc, idx) => (
                <li key={soc.id || idx} style={{ marginBottom: '5px' }}>
                  <Typography variant="body2" style={{ color: '#0066cc', textDecoration: 'underline', wordBreak: 'break-all' }}>
                    {soc.Social || 'Social'}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>

          {/* Right Column: Education & Mini Projects */}
          <Box width="65%" paddingLeft="20px">
            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
              Education
            </Typography>
            {education.map((edu, idx) => (
              <Box key={edu.id || idx} marginBottom="15px">
                <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: '#444' }}>
                  {edu.college || 'College'}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.85rem' }}>
                  Graduation Year : {edu.completionYear || '2023'}
                </Typography>
                <Typography variant="body2" style={{ fontSize: '0.9rem' }}>
                  {edu.courseName || 'Course'}
                </Typography>
                <Typography variant="body2" style={{ fontSize: '0.85rem', color: '#666' }}>
                  Percentage : {edu.percentage || '87'}%
                </Typography>
              </Box>
            ))}

            <Divider style={{ margin: '15px 0' }} />

            <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
              Mini Projects
            </Typography>
            {projects.map((proj, idx) => (
              <Box key={proj.id || idx} marginBottom="15px">
                <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: '#444' }}>
                  {proj.projectName || 'Name'}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.85rem' }}>
                  Description : {proj.description || 'Description'}
                </Typography>
                <Typography variant="body2" style={{ fontSize: '0.85rem', color: '#666' }}>
                  Tech Stack : {proj.techStack || 'Stack'}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};