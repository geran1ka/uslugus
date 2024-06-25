import { CustomError } from "./customError";

export const postData = async (url, data, method = "POST") => {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(data),
    });

    if (!response.ok || response.status === 404) {
      throw new CustomError(await response.json());
    }

    return response.json();
  } catch (error) {
    return error.data || error;
  }
};
