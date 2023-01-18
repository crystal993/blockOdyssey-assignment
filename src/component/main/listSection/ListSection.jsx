import React from 'react';
import styled from './ListSection.module.css';
import Pagination from '../pagination/Pagination';
import ListItem from '../listItem/ListItem';

// 상품번호, 상품명, 브랜드, 상품내용, 가격, 평점, 재고
const ListSection = () => {
  return (
    <div className={`${styled.wrapper}`}>
      <div className={`${styled.item_wrapper}`}>
        <div className={`${styled.item} ${styled.item_title}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
        <div className={`${styled.item}`}>
          <p className={`${styled.text}`}>상품번호</p>
          <p className={`${styled.text}`}>상품명</p>
          <p className={`${styled.text}`}>브랜드</p>
          <p className={`${styled.text}`}>상품내용</p>
          <p className={`${styled.text}`}>가격</p>
          <p className={`${styled.text}`}>평점</p>
          <p className={`${styled.text}`}>재고</p>
        </div>
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ListSection;
