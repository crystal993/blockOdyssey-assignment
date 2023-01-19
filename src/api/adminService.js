import httpService from './httpService';
import ApiConfig from './apiConfig';

export const getProductListApi = async (page, limit, keyword = '') => {
  const order = '&select=id,title,brand,description,price,rating,stock';
  let uri = 'skip=' + page * limit + '&limit=' + limit + order;
  let url = '';
  if (keyword !== '') url = ApiConfig.search + '?q=' + keyword + '&' + order;
  else url = ApiConfig.product + '?' + uri;
  const {data} = await httpService.get(url);
  return data;
};
