import { reactive } from 'vue';

interface IState {
  userName: string;
}

const state = reactive<IState>({
  userName: 'John Doe',
});

const getters = {
  getUserName: () => state.userName,
};

const mutations = {
  setUserName: (newName: string) => {
    state.userName = newName;
  },
};

export default {
  ...getters,
  ...mutations,
};
