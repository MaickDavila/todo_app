import { IProject } from '@/types/commonTypes.ts';
import { reactive } from 'vue';

interface IState {
  projects: IProject[];
  isOpenFormModal: boolean;
}

const state = reactive<IState>({
  projects: [],
  isOpenFormModal: false,
});

const getters = {
  getProjects: () => state.projects,
  getIsOpenFormModal: () => state.isOpenFormModal,
};

const mutations = {
  setProjects: (projects: IProject[]) => {
    state.projects = projects;
  },
  createProject: (project: IProject) => {
    state.projects.push(project);
  },
  deleteProject: (projectId: number) => {
    state.projects = state.projects.filter((project) => project.id !== projectId);
  },
  updateProject: (updatedProject: IProject) => {
    const index = state.projects.findIndex((project) => project.id === updatedProject.id);
    state.projects[index] = updatedProject;
  },
  setIsOpenFormModal: (isOpen: boolean) => {
    state.isOpenFormModal = isOpen;
  },
};

export default {
  ...getters,
  ...mutations,
};
