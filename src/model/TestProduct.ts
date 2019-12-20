import axios from 'axios';
import {APICollection} from "../server/config";
import {userData} from "../server/userdata";

interface IProducts {
    id: string;
    getDetail?: Function
}

export class TestProduct implements IProducts {

    public _id!: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    getDetail(): Promise<any> {
        return axios.get('http://localhost:8001/products')

    }

    getProductDetail(id: string) {
        return id + 'wow';
    }

    getCategory() {
        return userData;
    }

    getCategoryName() {

    }


}