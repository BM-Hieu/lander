import types from "./authTypes";

const initialState = {
  loading: true,
  isAuth: false,
  token: {},
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        user: {
          ...action.payload.user,
        },
      };
    default:
  }
};
export default authReducer;
