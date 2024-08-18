import axios from "axios";
/* base url to make req to movie db */

const instance= axios.create({baseURL:"http://api.themoviedb.org/3"});
//instance.get('/foo-bar')= "http://api.themoviedb.org/3/foo-bar"

export default instance;
