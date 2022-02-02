/* eslint-disable no-console */
export const submitAction = async (obj) => {
  try {
    const results = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: obj,
    });
    const data = await results.json();
    if (data) {
      return {
        status: 200,
        data,
      };
    }
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
