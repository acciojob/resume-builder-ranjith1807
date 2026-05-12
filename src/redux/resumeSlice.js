import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  profile: { fname: '', lname: '', phone: '', address: '', url: '' },
  education: [{ courseName: '', completionYear: '', college: '', percentage: '' }],
  skills: [{ skill: '' }],
  projects: [{ projectName: '', techStack: '', description: '' }],
  social: [{ Social: '' }],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    nextStep: (state) => { if (state.step < 6) state.step += 1; },
    prevStep: (state) => { if (state.step > 1) state.step -= 1; },
    updateProfile: (state, action) => { state.profile = { ...state.profile, ...action.payload }; },
    updateEducation: (state, action) => { state.education = action.payload; },
    updateSkills: (state, action) => { state.skills = action.payload; },
    updateProjects: (state, action) => { state.projects = action.payload; },
    updateSocial: (state, action) => { state.social = action.payload; },
  },
});

export const { 
  nextStep, prevStep, updateProfile, 
  updateEducation, updateSkills, updateProjects, updateSocial 
} = resumeSlice.actions;

export default resumeSlice.reducer;