import React from 'react';
import styled from './Main.module.css';
import SearchSection from '../../component/main/searchSection/SearchSection';
import ListSection from '../../component/main/listSection/ListSection';
import Pagination from '../../component/main/pagination/Pagination';

const Main = () => {
  return (
    <div className={styled.main}>
      <SearchSection />
      <ListSection />
      <Pagination />
    </div>
  );
};

export default Main;
