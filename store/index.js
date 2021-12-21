import Model from './model';

export const loginStore = new Model({
  initialState: {
    isLogin: false,
  },
  actions: {
    onChange(bool) {
      return { isLogin: bool };
    },
  },
});
