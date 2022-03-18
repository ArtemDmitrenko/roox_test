import React from 'react';
import Reference from '../Reference/Reference';
import './sorting.scss';

function Sorting() {
  return (
    <div className="sorting">
      <div className="sorting__title">
        Сортировка
      </div>
      <div className="sorting__button">
        <Reference text="по городу" isButton buttonType="button" />
      </div>
      <div className="sorting__button">
        <Reference text="по компании" isButton buttonType="button" />
      </div>
    </div>
  );
}

export default Sorting;
