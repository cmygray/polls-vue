import axios from 'axios';

const stage = process.env.NODE_ENV;

function baseURL(): string {
  if (stage === 'production') {
    return 'https://mission-service-243911.appspot.com/';
  } else {
    return 'http://localhost:8000/';
  }
}

export const client = axios.create({
  baseURL: baseURL(),
});
