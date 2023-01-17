import React from 'react';
import styled from './SearchSection.module.css';
import Input from '../../elements/input/Input';
import Select from '../../elements/select/SelectButton';
import Button from '../../elements/button/Button';
import {searchConditionOptions} from '../../elements/select/selectOptions/searchConditionOptions';

const SearchSection = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.upper_wrapper}>
        <h3 className={styled.title}>상품 검색</h3>
      </div>
      <div className={styled.lower_wrapper}>
        <h3 className={styled.title}>검색</h3>
        <div className={styled.search_wrapper}>
          <Select options={searchConditionOptions} />
          <Input />
          <Button text={'조회'} />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
