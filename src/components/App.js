import React from 'react';
import {useQuery} from 'urql';
import gql from 'graphql-tag';

import './app.css';
import 'typeface-roboto-mono';

import {Navigtion} from './Navigation';

const getCharacters = gql`
  query AllCharacters{
    characters(filter: {name: "rick"}) {
      info {
        count
      }
      results {
        name
        image
      }
    }
  }
`;

function App() {
  
  const[res] = useQuery({
    query: getCharacters
  });

  return (
    <div>
      <div className="page-wrapper"><aside className="sidebar">
        {res.fetching ? <h2>Loading</h2> :  <Navigtion items={res.data}/>}
      </aside>
      <div className="content">
      
      </div></div>
    </div>
  );
}

export default App;
