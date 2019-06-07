import React from 'react';

export function Navigation({items}) {

  function renderItems() {
    return items.slice(0, 6).map(item => {
      return (
        <li key={item.name} className="navigation-list-item">{item.name}</li>
      )
    })
  }

  return (
    <ul className="navigation-list">{renderItems()}</ul>
  )
};