import React from "react";
import axios from 'axios';


export class Base {
    name: string;
    url: string;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }


    getCategoryName = (id: string) => {
        return <>

        </>
    }

    public getAxios = ():void => {

        axios.get(this.url)
            .then(
                result => {
                    result.data
                }
            )
    }
}