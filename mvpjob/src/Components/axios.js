import axios from "axios";

/**base url to make requests to the database */

const instance = axios.create({
    baseurl:'http://localhost:5000/api',
})

export default instance