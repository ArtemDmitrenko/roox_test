import React, { useContext } from 'react';
import Reference from '../Reference/Reference';
import sortItems from '../../types/sortItems';
import SortingContext from '../../context/sortingContext';
import './sorting.scss';

function Sorting() {
  const value = useContext(SortingContext);

  const handleOnClick = (data: string) => {
    value?.sortData(data);
  };

  return (
    <div className="sorting">
      <div className="sorting__title">
        Сортировка
      </div>
      <div className="sorting__button">
        <Reference
          text="по городу"
          isButton
          buttonType="button"
          onClick={() => { handleOnClick(sortItems.CITY); }}
          type="solid"
          bgColor="blue"
        />
      </div>
      <div className="sorting__button">
        <Reference
          text="по компании"
          isButton
          buttonType="button"
          onClick={() => { handleOnClick(sortItems.COMPANY); }}
          type="solid"
          bgColor="blue"
        />
      </div>
    </div>
  );
}

export default Sorting;
