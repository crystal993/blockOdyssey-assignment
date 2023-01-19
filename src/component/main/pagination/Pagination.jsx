import React from 'react';
import styled from './Pagination.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
  const {page, setPage, hasMore, isPreviousData, total, limit} = props;

  const pageSize = total % limit === 0 ? total / limit : total / limit + 1;

  // 이전 페이지로 이동
  const onPreviousPageClick = () => setPage((old) => Math.max(old - 1, 0));

  // 다음 페이지로 이동
  const onNextPageClick = () => {
    setPage((old) => (hasMore ? old + 1 : old));
  };

  return (
    <div className={`${styled.wrapper}`}>
      <div>Current Page: {page + 1}</div>
      <button
        className={`${styled.button}`}
        onClick={onPreviousPageClick}
        disabled={page === 0}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {Array(pageSize)
        .fill(0)
        .map((_, page) => {
          return <button className={`${styled.button}`}>{page + 1}</button>;
        })}
      <button
        className={`${styled.button}`}
        onClick={onNextPageClick}
        disabled={isPreviousData || !hasMore}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Pagination;
