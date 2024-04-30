import { IProject } from '@/types/commonTypes.ts';
import { reactive } from 'vue';

interface IState {
  projects: IProject[];
  isOpenFormModal: boolean;
  projectSelected: IProject | null;
}

const state = reactive<IState>({
  projects: [],
  isOpenFormModal: false,
  projectSelected: null,
});

const getters = {
  getProjects: () => state.projects,
  getIsOpenFormModal: () => state.isOpenFormModal,
  getProjectSelected: () => state.projectSelected,
  existProject: (projectId: number) => state.projects.some((project) => project.id === projectId),
  getProject: (projectId: number) => state.projects.find((project) => project.id === projectId),
};

const mutations = {
  setProjects: (projects: IProject[]) => {
    state.projects = projects;
  },
  createProject: (project: IProject) => {
    project.id = Math.floor(Math.random() * 1000);
    state.projects.push(Object.assign({}, project));
  },
  deleteProject: (projectId: number) => {
    state.projects = state.projects.filter((project) => project.id !== projectId);
  },
  updateProject: (updatedProject: IProject) => {
    const index = state.projects.findIndex((project) => project.id === updatedProject.id);
    state.projects[index] = Object.assign({}, updatedProject);
    state.projects = [...state.projects];
  },
  setIsOpenFormModal: (isOpen: boolean) => {
    state.isOpenFormModal = isOpen;
  },
  setProjectSelected: (project: IProject | null) => {
    state.projectSelected = project;
  },
};

export default {
  ...getters,
  ...mutations,
};
