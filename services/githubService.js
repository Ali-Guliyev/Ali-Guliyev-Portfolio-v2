import axios from "axios"

const userName = "Ali-Guliyev"
const token = "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"

const apiClient = axios.create({
  baseURL: `https://api.github.com`,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  login: {},
})

export default {
  getRepos() {
    return apiClient.get(`/user/repos`)
  },
  getRepoByName(repoName) {
    return apiClient.get(`/repos/${userName}/${repoName}`)
  },
}
