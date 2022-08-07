import axios from "axios";
import { selector } from 'recoil';

export const userSelector = selector({
    key: "userSelector",
    get: async () => {
        return axios.get("https://randomuser.me/api/")
        .then(sleeper(2000))
        .then(response => {
            return response.data;
        })
        .catch(err => {
            throw err
        })
    }
});

function sleeper(ms) {
    return function(x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}