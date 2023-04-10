import axios from "axios"
import { baseApiUrl } from "../constants/defaultValues"

const createInstance = function () {
    const axiosInstance = axios.create({
        baseURL: baseApiUrl,
        headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer " + localStorage.getItem("x-access-token"),
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("x-access-token"))}`,
        },
    });
    return axiosInstance;
}

export const Service = {

    signup: function (payload) {
        return new Promise(function (resolve, reject) {
            const axiosInstance = createInstance();
            axiosInstance
                .post("signup/", payload)
                .then(function (response) {
                    resolve(response.data)
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    login: function (payload) {
        return new Promise(function (resolve, reject) {
            const axiosInstance = createInstance();
            axiosInstance
                .post("login/", payload)
                .then(function (response) {
                    resolve(response.data)
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    },

    signupall: function (id){
        console.log(id);
        return new Promise(function (resolve, reject){
            const axiosInstance = createInstance();
            axiosInstance
            .get(`signupall/${id}`)
            .then(function (response){
                resolve(response.data)
            })
            .catch(function (error){
                reject(error)
            });
        });
    }

}