import axiosClient from "./axiosClient";

const uploadApi = {
  upload(data) {
    const url = "/uploads/photos";
    return axiosClient.post(url, data,);
  },
};

export default uploadApi;
