import React from 'react';
import Sorting from '../Sorting/Sorting';
import './sideBar.scss';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__sorting">
        <Sorting />
      </div>
    </div>
  );
}

export default SideBar;
