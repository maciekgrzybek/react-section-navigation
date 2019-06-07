import React from 'react';
import pickleRick from '../img/pickle-rick.png';

export function Loading() {

  return (
    <div className="loading-wrapper">
      <img src={pickleRick} alt="" className="loading-image"/>
      <p>Loading...</p>
    </div>
  )
}