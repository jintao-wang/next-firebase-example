import Model from './model';

export const testStore = new Model({
  initialState: {
    isLogin: false,
  },
  actions: {
    onChange(bool) {
      return { isLogin: bool };
    },
  },
});
