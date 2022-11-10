import http from 'k6/http';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { check } from 'k6';

export default function() {
  const url = 'http://localhost:3000/qa/questions?product_id=40350';


  const response = http.get(url);
  check(response, {
    "success": (r) => r.status === 200,
  })
}

export let options = {
  vus: 1,
  duration: '30s',
  // thresholds: {
  //     'failed requests': ['rate<0.02'],
  //     http_req_duration: ['p(95)<500'],
  //     http_reqs: ['count>6000']
  // },
};