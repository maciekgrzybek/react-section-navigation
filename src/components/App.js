import React from 'react';
import {useQuery} from 'urql';
import gql from 'graphql-tag';

import './app.css';
import 'typeface-roboto-mono';

import {Navigation} from './Navigation';
import {Loading} from './Loading';

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

  if (res.fetching || typeof res.data === 'undefined') {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
        <div className="page-wrapper">
          <aside className="sidebar">
            <Navigation items={res.data.characters.results}/>
          </aside>
          <div className="content"></div>
        </div>
      </div>
    );
  }
}

export default App;
