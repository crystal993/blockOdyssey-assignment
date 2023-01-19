import React from 'react';
import styled from './ListSection.module.css';
import Pagination from '../pagination/Pagination';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {getProductListApi} from '../../../api/adminService';
import {ellepsis} from '../../../utils/ellipsisFunction';
import {useDispatch, useSelector} from 'react-redux';
import {
  setHasMore,
  setPage,
  setProducts,
} from '../../../redux/modules/adminSlice';

const ListSection = () => {
  const dispatch = useDispatch();
  const {keyword, page, hasMore, limit} = useSelector((state) => state.admin);
  const queryClient = useQueryClient();

  const {status, data, isPreviousData} = useQuery({
    queryKey: ['products', page, limit, keyword],
    queryFn: () => getProductListApi(page, limit, keyword),
    keepPreviousData: true,
    staleTime: 5000,
  });

  React.useEffect(() => {
    if (page * limit < data?.total - limit) dispatch(setHasMore(true));
    else dispatch(setHasMore(false));

    if (!isPreviousData && hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['products', page + 1, limit, keyword],
        queryFn: () => getProductListApi(page + 1, limit, keyword),
        keepPreviousData: true,
      });
      dispatch(setPage(page));
      dispatch(setProducts(data?.products));
    }
  }, [
    data,
    isPreviousData,
    page,
    queryClient,
    hasMore,
    limit,
    dispatch,
    keyword,
  ]);

  return (
    <>
      <div className={styled.search_result}>
        검색된 데이터 : <p className={styled.highlight}>{data?.total}</p> 건
      </div>
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
          <div>
            {status === 'loading' && (
              <div className={`${styled.wrapper}`}>Loading...</div>
            )}
            {data?.products.map((product) => (
              <div key={product.id} className={`${styled.item}`}>
                <p className={`${styled.text}`}>{product.id}</p>
                <p className={`${styled.text}`}>{product.title}</p>
                <p className={`${styled.text}`}>{product.brand}</p>
                <p className={`${styled.text} `}>
                  {ellepsis(product.description)}
                </p>
                <p className={`${styled.text}`}>{`$${product.price}`}</p>
                <p className={`${styled.text}`}>{product.rating}</p>
                <p className={`${styled.text}`}>{product.stock}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Pagination isPreviousData={isPreviousData} total={data?.total} />
        </div>
      </div>
    </>
  );
};

export default ListSection;
