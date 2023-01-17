import React from 'react';
import styled from './Main.module.css';
import SearchSection from '../../component/main/searchSection/SearchSection';
import ListSection from '../../component/main/listSection/ListSection';
import Pagination from '../../component/main/pagination/Pagination';

const Main = () => {
  return (
    <div className={styled.main}>
      <SearchSection />
      <div className={styled.search_result_wrapper}>
        <div className={styled.search_result}>
          검색된 데이터 : <p className={styled.highlight}>100</p> 건
        </div>
      </div>
      <ListSection />
      <Pagination />
    </div>
  );
};

export default Main;
