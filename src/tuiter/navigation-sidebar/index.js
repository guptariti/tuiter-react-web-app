import React from 'react';
import navItems from './navItems';

//test comment
const NavigationSidebar = ({ active = 'explore' }) => {
  return (
    <div className="list-group">
      <a href="/" className="list-group-item">Tuiter</a>
      {navItems.map((item) => {
        return (
          <a
            href={`${item.link}`}
            className={`list-group-item list-group-item-action
                    ${(item.title).toLowerCase() === active ? 'active' : ''}`}
          >
            <span style={{ marginRight: '4px' }}>
              <i className={`${item.icons}`}></i>
            </span>
            <span className="d-none d-xl-inline">{`${item.title}`}</span>
          </a>
        );
      })}
    </div>
  );
};
export default NavigationSidebar;
