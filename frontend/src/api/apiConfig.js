const API_BASE_URL = "http://localhost:5000/api";

const endPoint = {
  // Auth
  login: `${API_BASE_URL}/login`,
  registerUser: `${API_BASE_URL}/register`,
  getUser: `${API_BASE_URL}/users`,
  updateProfile: `${API_BASE_URL}/users/profile`,

  // Schedule
  createSchedule: `${API_BASE_URL}/schedules`,
  getSchedule: `${API_BASE_URL}/schedules`,
  getUpComingSchedule: `${API_BASE_URL}/schedules/upcoming`,
  getTodaySchedule: `${API_BASE_URL}/schedules/today`,
  updateSchedule: `${API_BASE_URL}/schedules`,
  deleteSchedule: `${API_BASE_URL}/schedules`,

  //ImageUploader
  uploadMedia: `${API_BASE_URL}/media`,
  deleteMedia: `${API_BASE_URL}/media`,
};

export default endPoint;
