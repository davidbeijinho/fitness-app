import axios from 'axios';

function loadData() {
  return Promise.all([axios.get('/wp-content/data/questions.json'), axios.get('/wp-content/data/results.json'), axios.get('/wp-content/data/others.json')])
    .then(values => ({
      questions: values[0].data,
      results: values[1].data,
      others: values[2].data,
    })).catch((err, ...args) => {
      console.log(args);
      console.log('error', err);
    });
}

export default {
  loadData,
};
