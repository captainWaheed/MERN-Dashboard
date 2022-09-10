import axios from "axios";
import { RestartProcess } from "concurrently";
import goalSlice from "./goalSlice";

const API_URL = "/api/goals/";

// Create new goal

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

// Create user goal

const getGoal = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoal,
};

export default goalService;
