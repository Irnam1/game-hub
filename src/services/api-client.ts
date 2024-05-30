import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '69bae195aa1e4e708704943cc7140cef'
    }
})