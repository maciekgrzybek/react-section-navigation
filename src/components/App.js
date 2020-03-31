import React, { useState, useEffect, createRef } from 'react';

import './app.css';
import 'typeface-roboto-mono';
import { characters } from '../data.json';

import { Navigation } from './Navigation';
import { Loading } from './Loading';
import { Character } from './Character';
import { Footer } from './Footer';

function App() {
  const [activeCharacter, setActiveCharacter] = useState();
  const [pageHeight, setPageHeight] = useState();

  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener('resize', (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);

  if (!characters) {
    return <Loading />;
  } else {
    const charactersToRender = characters.results.slice(0, 9);
    const refs = charactersToRender.reduce((refsObj, character) => {
      refsObj[character.name] = createRef();
      return refsObj;
    }, {});
    const handleCLick = (name) => {
      refs[name].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    };
    return (
      <>
        <div className="page-wrapper">
          <aside className="sidebar">
            <Navigation
              items={charactersToRender}
              activeCharacter={activeCharacter}
              handleCLick={handleCLick}
            />
          </aside>
          <div className="content">
            <div className="page-intro">
              <h1 className="page-title">Check out these cool Rick&apos;s!</h1>
              <p>
                This is an example of using Intersection Observer API with
                React.
                <br />
                I&apos;ve created this simple app to show how you can create
                side navigation that will detect current visible section. Read
                more on{' '}
                <a
                  href="https://dev.to/maciekgrzybek/create-section-navigation-with-react-and-intersection-observer-fg0"
                  target="blank"
                >
                  dev.to
                </a>{' '}
                and{' '}
                <a href="https://medium.com/@maciekgrzybek/create-section-navigation-with-react-and-intersection-observer-b01c5085307d">
                  medium.com
                </a>{' '}
                or check out the{' '}
                <a href="https://github.com/maciekgrzybek/react-section-navigation">
                  repo
                </a>
                .
              </p>
            </div>
            {charactersToRender.map((item) => {
              return (
                <Character
                  key={item.name}
                  activeCharacter={activeCharacter}
                  data={item}
                  setActiveCharacter={setActiveCharacter}
                  pageHeight={pageHeight}
                  refs={refs}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
