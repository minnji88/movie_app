import React from 'react';
import './Vote.scss'

function Vote(){
  function add(e){
    e.preventDefault();
    e.currentTarget.classList.toggle('liked');
  }
  return (
      <button onClick={add} className="like-button"></button>
  );
}

export default Vote;