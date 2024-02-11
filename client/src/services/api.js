import axois from "axios";
const api_url = "http://localhost:8000";

export const upLoadFile = async (file) => {
  try {
    let reponse = await axois.post(api_url + "/upload", file);
    // console.log(reponse);
    // console.log(file);
    // console.log(reponse.data);
    return reponse.data;
  } catch (error) {
    console.error("the error is ", error.message);
  }
};
