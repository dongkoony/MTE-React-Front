import axios from 'axios';

function getData() {
  axios.get('/add')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

export default getData;