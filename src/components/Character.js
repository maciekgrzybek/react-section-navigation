import React, {useEffect} from 'react';

export function Character({
  data,
  activeCharacter,
  setActiveCharacter,
  pageHeight = 100,
  refs,
}) {
  const observerMargin = `${Math.floor((pageHeight - 1) / 2)}px`;
  const activeClass = activeCharacter === data.name
    ? 'character-block--active'
    : '';
  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${observerMargin} 0px -${observerMargin} 0px`,
    };
    const handleIntersection = function(entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeCharacter && entry.isIntersecting) {
          setActiveCharacter(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(
        handleIntersection,
        observerConfig);
    observer.observe(refs[data.name].current);
  }, [activeCharacter, setActiveCharacter, observerMargin, refs, data]);

  return (
    <div
      className={`character-block ${activeClass}`}
      ref={refs[data.name]}
      id={data.name}>
      <div>
        <img src={data.image} alt="" className="character-block__image"/>
      </div>
      <div className="character-block__text">
        <h2>{data.name}</h2>
        <p><b>Status</b>: {data.status}</p>
        <p><b>Location</b>: {data.location ? data.location.name : '-'}</p>
        <p><b>Species</b>: {data.species}</p>
        <p><b>Dimension</b>: {data.origin.dimension || '-'}</p>
      </div>
    </div>
  );
}
