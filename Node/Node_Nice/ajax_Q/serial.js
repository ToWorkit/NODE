/* 串行 */
let Q = require('q'),
    request = require('request');
    request('http://localhost:3000/one', (err_01, response_01, body_01) => {
      console.log(body_01);
      request('http://localhost:3000/two', (err_02, response_02, body_02) => {
        console.log(body_o2);
        request('http://localhost:3000/three', (err_03, response_03, body_03) => {
          console.log(body_03)
        })
      })
    })
