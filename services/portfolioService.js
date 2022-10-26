import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Ali-Guliyev/portfolio-db",
  //
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getSkills() {
    return apiClient.get("/skills");
  },
  getProjects() {
    return apiClient.get("/projects");
  },
  getAbout() {
    return apiClient.get("/about");
  },
  getSocial() {
    return apiClient.get("/social");
  },
  getEmail() {
    return apiClient.get("/email");
  },
};
