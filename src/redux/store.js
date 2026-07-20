import { createStore } from 'redux';

const initialState = {
  profile: { fname: '', lname: '', phone: '', address: '', url: '' },
  education: [{ id: Date.now(), courseName: '', completionYear: '', college: '', percentage: '' }],
  skills: [{ id: Date.now(), skill: '' }],
  projects: [{ id: Date.now(), projectName: '', techStack: '', description: '' }],
  socialMedia: [{ id: Date.now(), Social: '' }]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return { ...state, profile: { ...state.profile, [action.field]: action.value } };

    // --- EDUCATION ACTIONS ---
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, { id: Date.now() + Math.random(), courseName: '', completionYear: '', college: '', percentage: '' }]
      };
    case 'UPDATE_EDUCATION':
      return {
        ...state,
        education: state.education.map((item, idx) =>
          idx === action.index ? { ...item, [action.field]: action.value } : item
        )
      };
    case 'DELETE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((_, idx) => idx !== action.index)
      };

    // --- SKILLS ACTIONS ---
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, { id: Date.now() + Math.random(), skill: '' }]
      };
    case 'UPDATE_SKILL':
      return {
        ...state,
        skills: state.skills.map((item, idx) =>
          idx === action.index ? { ...item, skill: action.value } : item
        )
      };
    case 'DELETE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((_, idx) => idx !== action.index)
      };

    // --- PROJECTS ACTIONS ---
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, { id: Date.now() + Math.random(), projectName: '', techStack: '', description: '' }]
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((item, idx) =>
          idx === action.index ? { ...item, [action.field]: action.value } : item
        )
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((_, idx) => idx !== action.index)
      };

    // --- SOCIAL MEDIA ACTIONS ---
    case 'ADD_SOCIAL':
      return {
        ...state,
        socialMedia: [...state.socialMedia, { id: Date.now() + Math.random(), Social: '' }]
      };
    case 'UPDATE_SOCIAL':
      return {
        ...state,
        socialMedia: state.socialMedia.map((item, idx) =>
          idx === action.index ? { ...item, Social: action.value } : item
        )
      };
    case 'DELETE_SOCIAL':
      return {
        ...state,
        socialMedia: state.socialMedia.filter((_, idx) => idx !== action.index)
      };

    case 'LOAD_RESUME':
      return action.payload;

    default:
      return state;
  }
};

export const store = createStore(rootReducer);