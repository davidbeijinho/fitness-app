import axios from 'axios';

function loadData() {
  return Promise.all([axios.get('/data/questions.json'), axios.get('/data/results.json'), axios.get('/data/others.json')])
    .then((values) => ({
                questions: values[0].data,
                results: values[1].data,
                others: values[2].data,
            }));
}

export default {
  loadData,
};
