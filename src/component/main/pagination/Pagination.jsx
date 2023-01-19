import React from 'react';
import styled from './Pagination.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Pagination = (props) => {
  const {page, setPage, hasMore, isPreviousData, total = 0, limit = 0} = props;

  const pageSize = total % limit === 0 ? total / limit : total / limit + 1;

  // 이전 페이지로 이동
  const onPreviousPageClick = () => setPage((old) => Math.max(old - 1, 0));

  // 다음 페이지로 이동
  const onNextPageClick = () => {
    setPage((old) => (hasMore ? old + 1 : old));
  };

  // 페이지 버튼을 누를 때
  const onNumPageClick = (e) => {
    setPage(parseInt(e.target.innerText) - 1);
    e.stopPropagation();
  };

  return (
    <div className={`${styled.wrapper}`}>
      <button
        className={`${styled.button}`}
        onClick={onPreviousPageClick}
        disabled={page === 0}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {Array(pageSize)
        .fill(0)
        .map((_, i) => {
          if (i === page)
            return (
              <button
                onClick={onNumPageClick}
                className={`${styled.button} ${styled.currentPage}`}>
                {i + 1}
              </button>
            );
          else
            return (
              <button onClick={onNumPageClick} className={`${styled.button}`}>
                {i + 1}
              </button>
            );
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
