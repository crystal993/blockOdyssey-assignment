import httpService from './httpService';
import ApiConfig from './apiConfig';

export const getProductListApi = async (page, limit, keyword = '') => {
  let uri =
    'skip=' +
    page * limit +
    '&limit=' +
    limit +
    '&select=id,title,brand,description,price,rating,stock';

  let url = '';
  if (keyword !== '') url = ApiConfig.search + '?q=' + keyword + '&' + uri;
  else url = ApiConfig.product + '?' + uri;
  const {data} = await httpService.get(url);
  return data;
};
