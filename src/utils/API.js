import axios from "axios";

const API = {
  searchBreeds: breed => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  },
  getRandom: ()=>{
    return axios.get(`https://dog.ceo/api/breeds/image/random`)
  }
};

export default API
