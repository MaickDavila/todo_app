import { reactive } from 'vue';
import { ITask } from '@/types/commonTypes.ts';

interface IState {
  tasks: ITask[];
  isOpenFormModal: boolean;
  taskSelected: ITask | null;
}

const state = reactive<IState>({
  tasks: [],
  isOpenFormModal: false,
  taskSelected: null,
});

const getters = {
  getTasks: () => state.tasks as ITask[],
  getIsOpenFormModal: () => state.isOpenFormModal,
  getTaskSelected: () => state.taskSelected,
  existTask: (taskId: number) => state.tasks.some((task) => task.id === taskId),
  getTask: (taskId: number) => state.tasks.find((task) => task.id === taskId),
  getTasksByProjectId: (projectId: number) => state.tasks.filter((task) => task.projectId === projectId),
};

const mutations = {
  setTasks: (tasks: ITask[]) => {
    state.tasks = tasks;
  },
  createTask: (task: ITask) => {
    task.id = Math.floor(Math.random() * 1000);
    state.tasks.push(Object.assign({}, task));
  },
  deleteTask: (taskId: number) => {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
  updateTask: (updatedTask: ITask) => {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    state.tasks[index] = Object.assign({}, updatedTask);
  },
  setIsOpenFormModal: (isOpen: boolean) => {
    state.isOpenFormModal = isOpen;
  },
  setTaskSelected: (task: ITask | null) => {
    state.taskSelected = task;
  },
};

export default {
  ...getters,
  ...mutations,
};
