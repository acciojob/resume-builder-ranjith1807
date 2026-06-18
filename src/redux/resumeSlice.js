import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  profile: { fname: '', lname: '', phone: '', address: '', url: '' },
  education: [{ courseName: '', completionYear: '', college: '', percentage: '' }],
  skills: [{ skill: '' }],
  projects: [{ projectName: '', techStack: '', description: '' }],
  social: [{ Social: '' }]
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    nextStep: (state) => { state.step += 1; },
    prevStep: (state) => { state.step -= 1; },
    updateProfile: (state, action) => { state.profile = { ...state.profile, ...action.payload }; },
    
    updateEducation: (state, action) => {
      const { index, field, value } = action.payload;
      state.education[index][field] = value;
    },
    addEducation: (state) => { state.education.push({ courseName: '', completionYear: '', college: '', percentage: '' }); },
    deleteEducation: (state, action) => { state.education.splice(action.payload, 1); },

    updateSkill: (state, action) => {
      const { index, value } = action.payload;
      state.skills[index].skill = value;
    },
    addSkill: (state) => { state.skills.push({ skill: '' }); },
    deleteSkill: (state, action) => { state.skills.splice(action.payload, 1); },

    updateProject: (state, action) => {
      const { index, field, value } = action.payload;
      state.projects[index][field] = value;
    },
    addProject: (state) => { state.projects.push({ projectName: '', techStack: '', description: '' }); },
    deleteProject: (state, action) => { state.projects.splice(action.payload, 1); },

    updateSocial: (state, action) => {
      const { index, value } = action.payload;
      state.social[index].Social = value;
    },
    addSocial: (state) => { state.social.push({ Social: '' }); },
    deleteSocial: (state, action) => { state.social.splice(action.payload, 1); }
  }
});

export const { 
  nextStep, prevStep, updateProfile, 
  updateEducation, addEducation, deleteEducation,
  updateSkill, addSkill, deleteSkill,
  updateProject, addProject, deleteProject,
  updateSocial, addSocial, deleteSocial 
} = resumeSlice.actions;

export default resumeSlice.reducer;