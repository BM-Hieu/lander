import types from "./authTypes";

const loadingUser = () => ({ type: types.LOADING });

const loadUserSuccess = (payload) => ({
  type: types.LOAD_USER_SUCCESS,
  payload,
});

export const login = (payload) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_SUCCESSS,
    payload,
  });
};

//logout
export const logout = () => ({
  type: types.LOGOUT,
});
