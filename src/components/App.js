import axios from 'axios';

function fetchAPI() {
  axios.get('http://localhost:5000/hello')
    .then(response => console.log(response.data))
}

class App extends React.Component {
    componentDidMount() {
      fetchAPI();
    }
  
    render() {
      return (
        // render code here
      );
    }
  }