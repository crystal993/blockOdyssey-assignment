import React from 'react';
import styled from './SearchSection.module.css';
import Input from '../../elements/input/Input';
import Select from '../../elements/select/SelectButton';
import Button from '../../elements/button/Button';
import {searchConditionOptions} from '../../elements/select/selectOptions/searchConditionOptions';
import {useDispatch} from 'react-redux';
import {setKeyword} from '../../../redux/modules/adminSlice';

const SearchSection = () => {
  const dispatch = useDispatch();
  const [inputKeyword, setInputKeyword] = React.useState('');
  const onChange = (e) => {
    setInputKeyword(e.target.value);
  };
  const onClick = (e) => {
    dispatch(setKeyword(inputKeyword));
  };
  return (
    <div className={styled.wrapper}>
      <div className={styled.upper_wrapper}>
        <h3 className={styled.title}>상품 검색</h3>
      </div>
      <div className={styled.lower_wrapper}>
        <h3 className={styled.title}>검색</h3>
        <div className={styled.search_wrapper}>
          <Select options={searchConditionOptions} />
          <Input onChange={onChange} />
          <Button text={'조회'} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
