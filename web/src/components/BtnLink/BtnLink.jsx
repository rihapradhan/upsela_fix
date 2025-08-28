// BtnLink.js
import React from 'react';
import { Link, routes } from '@redwoodjs/router';
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext';

const BtnLink = (props) => {
  const { color, text, id, item } = props;
  const { setSharedData } = useSharedData();

  const handleClick = () => {
    localStorage.setItem('sharedData', JSON.stringify({ id, item }));
    setSharedData({ id, item });
  };

  return (
    <Link to={`/blog/${id}` } className={`btn ${color} m-t-20`} onClick={handleClick}>
      {text}
      <img src="/images/arrow-right.svg" alt="" />
    </Link>
  );
};

export default BtnLink;
