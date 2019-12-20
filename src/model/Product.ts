import {userData} from "../server/userdata";
import axios from "axios";
import {APICollection} from "../server/config";


export async function getAllCategory() {
    const response = await fetch(APICollection.apiCategory);
    let data = await response.json()
    return data;
};