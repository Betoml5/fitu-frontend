import axios from "axios";
// const BASE_API = "http://localhost:3001/api";
const BASE_API = process.env.REACT_APP_API;

export const createCustomerService = async (customer) => {
  try {
    const response = await axios.post(`${BASE_API}/auth/signup`, {
      user: customer,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getCustomersService = async () => {
  try {
    const response = await axios.get(`${BASE_API}/customers/all`);
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const findCustomerByNameService = async (name) => {
  try {
    const response = await axios.get(
      `${BASE_API}/customers/customer?name=${name}`
    );
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getCustomerDetailsService = async (id) => {
  try {
    const response = await axios.get(`${BASE_API}/customers/customer/${id}`);
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const createMeetingService = async (meeting) => {
  try {
    if (!meeting) {
      throw new Error("Missing meeting data");
    }
    const response = await axios.post(`${BASE_API}/meetings/create`, {
      meeting: meeting,
    });
    return response.data.body;
  } catch (error) {
    console.log(error)
    return error;
  }
};

export const getOneMeetingService = async (id) => {
  try {
    if (!id) {
      throw new Error("Missing id");
    }

    const response = await axios.get(`${BASE_API}/meetings/${id}`);
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const updateOneMeetingService = async (id, meeting) => {
  try {
    if (!id || !meeting) {
      throw new Error("Missing id or meeting");
    }

    const response = await axios.put(`${BASE_API}/meetings/update/${id}`, {
      meeting: meeting,
    });
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const deleteOneMeetingService = async (id) => {
  try {
    if (!id) {
      throw new Error("Missing data");
    }
    const response = await axios.delete(`${BASE_API}/meetings/delete/${id}`);
    return response.data.body;
  } catch (error) {
    return error;
  }
};

export const getAllMeetingsService = async () => {
  try {
    const response = await axios.get(`${BASE_API}/meetings/all`);
    return response.data.body;
  } catch (error) {
    return error;
  }
};
