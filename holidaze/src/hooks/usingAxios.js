import axios from "axios";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../constants/api";


export default function usingAxios() {
const options = {
    headers: { Authorization: `Bearer ${
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcHJvamVjdGV4YW0yLmN1dGVkZXZlbG9wLm5vIiwiaWF0IjoxNjQwMDIxNDgxLCJuYmYiOjE2NDAwMjE0ODEsImV4cCI6MTY0MDYyNjI4MSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMiJ9fX0.HoPm2d_S4fyqeJltyQY_7dDGQMIo7eB_5OyUHVNw0Ac"
    }` 
    },
};
   
   axios.get("BASE_URL", options);
}