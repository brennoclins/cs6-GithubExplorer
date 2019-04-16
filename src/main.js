import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try{
            const response = axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err){
            console.warn(err);
        }
    }
}

Api.getUserInfo('diego3')