import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import { Router, navigate } from '@reach/router';
import Display from './views/Display';

function App() {
  const [searchTerms, setSearchTerms] = useState({
    category: 'people',
    id: ''
  });

  const [data, setData] =useState({

  });

  const changeHandler = e => {
    setSearchTerms({
      ...searchTerms,
      [e.target.name]: e.target.value
    })
  };

  const submitHandler = e => {
    const { category, id } = searchTerms;
    e.preventDefault();
    navigate('/${category}/${id}');
  };

  return (
    <div className="container">
      <Search searchTerms={ searchTerms } changeHandler={ changeHandler }submitHandler={ submitHandler } />
      <Router>
        <Display path="/:category/:id"/>
      </Router>
    </div>
  );
}

export default App;
