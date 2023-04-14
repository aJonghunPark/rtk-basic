import axios from "axios";

import { User } from "./type";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
export const fetchAll = async () => await axios.get<User[]>("/users");
