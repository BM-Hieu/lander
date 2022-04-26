import axiosClient from "./axiosClient";

const postApi = {
  get(params) {
    const url = "/posts";
    return axiosClient.get(url, { params });
  },
  create(data) {
    const url = "/posts/create";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/posts/edit/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/posts/remove/${id}`;
    return axiosClient.delete(url);
  },
};
export default postApi;
