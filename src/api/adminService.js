import httpService from './httpService';
import ApiConfig from './apiConfig';

export const getProductListApi = async (page, limit) => {
  const {data} = await httpService.get(
    ApiConfig.product + '?skip=' + page * limit + '&limit=' + limit
  );
  console.log(data);
  return data;
};
