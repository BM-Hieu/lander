import axiosClient from "./axiosClient";

const usersApi = {
  register(user) {
    const url = "/users/create";
    return axiosClient.post(url, user);
  },
  login(user) {
    const url = "/users/login";
    return axiosClient.post(url, user);
  },
  update(user) {
    const url = `/users/me/${user.id}`;
    return axiosClient.put(url, user);
  },
};
export default usersApi;
