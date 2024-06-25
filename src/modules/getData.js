import { CustomError } from "./customError.js";

export const getData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new CustomError(await response.json());
    }

    return await response.json();
  } catch (error) {
    console.warn(error);
  }
};
