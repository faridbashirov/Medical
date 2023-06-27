import axios from 'axios';

export default axios.create({
  baseURL: `https://hospitalbackend.efgroup.az/`
});