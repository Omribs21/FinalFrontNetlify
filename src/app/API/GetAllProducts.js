import axios from "axios";

const URL = "https://finalbackendrender.onrender.com/products/";

const URL1 = "https://finalbackendrender.onrender.com/PersonalProducts/";

export function getallproducts() {
  return new Promise((resolve) =>
    axios.get(URL).then((res) => resolve({ data : res.data}))
  );
}

export function GetAllPersonalProducts(){
  return new Promise((resolve) =>
    axios.get(URL1).then((res) => resolve({ data : res.data}))
  );
}