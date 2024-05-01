import { reactive } from 'vue';
import { ITask } from '@/types/commonTypes.ts';
import taskData from '@/components/projects/data/task.data.ts';

interface IState {
  tasks: ITask[];
  isOpenFormModal: boolean;
  taskSelected: ITask | null;
}

const state = reactive<IState>({
  tasks: taskData,
  isOpenFormModal: false,
  taskSelected: null,
});

const getters = {
  getIsOpenFormModal: () => state.isOpenFormModal,
  getTaskSelected: () => state.taskSelected,
  getTasksByProjectId: (projectId: number) => state.tasks.filter((task) => task.projectId === projectId),
  getAllPendingTasks: () => state.tasks.filter((task) => !task.isCompleted),
  getTodayTasks: () =>
    state.tasks.filter((task) => new Date(task.created_at).toDateString() === new Date().toDateString()),
  getTodayCompletedTasks: () =>
    state.tasks.filter(
      (task) => task.isCompleted && new Date(task.created_at).toDateString() === new Date().toDateString(),
    ),
};

const mutations = {
  createTask: (task: ITask) => {
    task.id = Math.floor(Math.random() * 1000);
    task.created_at = new Date().toLocaleString();
    task.progress = 0;
    task.isCompleted = false;
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
