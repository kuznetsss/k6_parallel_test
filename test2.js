import {sleep} from 'k6';

export const options = {
  duration: '30s',
  vus: 5,
};

export default function() {
  console.log("request 2");
  sleep(1);
}
