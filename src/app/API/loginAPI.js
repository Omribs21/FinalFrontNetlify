import axios from "axios";

const URL = "hhttps://finalbackendrender.onrender.com/token/";

export function Login(data) {
  // console.log(data);
  return new Promise((resolve) =>
    axios.post(URL, data).then((res) => resolve({ data: res.data }))
  );
}