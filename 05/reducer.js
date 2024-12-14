const initialState = { message: 'Działa!', time: new Date(), users: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCurrentTime':
      return { ...state, time: new Date() };
    case 'addUser':
      const { data } = action.payload;
      return { ...state, users: [...state.users, data] };
    case 'removeUser': {
      const { id } = action.payload;
      return {
        ...state,
        users: state.users.filter((user) => user.id !== id),
      };
    }
    case 'removeAllUsers':
      return { ...state, users: [] };
    default:
      return state;
  }
  return state;
};
export default reducer;