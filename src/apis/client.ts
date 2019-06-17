import axios from 'axios';

function baseURL(): string {
  if (process.env === 'production') {
    return 'https://mission-service-243911.appspot.com/';
  } else {
    return 'http://localhost:8000/';
  }
}

export const client = axios.create({
  baseURL: baseURL(),
});
