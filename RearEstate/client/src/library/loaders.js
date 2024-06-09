import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const chiTietNhaDatPageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};

export const DanhSachPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const hoSoPageLoader = async () => {
  const postPromise = apiRequest("/users/hoSoPosts");
  // const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
  //   chatResponse: chatPromise,
  });
};