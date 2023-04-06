import axios from "axios";

const root = "http://localhost:4000";

export const logMe = async (body) => {
  return await axios.post(`${root}/auth/login`, body);
};

export const registerMe = async (body) => {
  return await axios.post(`${root}/auth/register`, body);
};

export const getProfile = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}/user/profile`, config);
};

export const appointmentMe = async (body, token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios.post(`${root}/appointment/appointment`, body, config);
};

export const getAppointment = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}/user/appointments/checkall`, config);
};

export const getAllAppointment = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}/user/appointments/checkall/admin`, config);
};

export const getAllClients = async (token) => {
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return await axios.get(`${root}/user/profile/checkallclients`, config);
};
