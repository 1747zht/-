import { requestWithOutToken } from '@/utils/request'

/*
  获取分类列表数据
    @return {Promise}
*/
export const getCategoriesApi = () => {
  return requestWithOutToken('/home/category/head', 'get')
}

/*
  获取热门品牌数据
*/
export const getHotBrandApi = (limit) => {
  return requestWithOutToken('/home/brand', 'get', { limit })
}

/*
获取轮播图数据
*/
export const getBannerApi = (distributionSite = 1) => {
  return requestWithOutToken('/home/banner', 'get', { distributionSite })
}

/*
 获取新鲜好物
*/
export const getNewGoodsApi = (limit) => {
  return requestWithOutToken('/home/new', 'get', { limit })
}

/*
 获取人气推荐数据
*/
export const getHotGoodsApi = () => {
  return requestWithOutToken('/home/hot', 'get')
}

/*
产品专区数据
*/
export const getProductsApi = () => {
  return requestWithOutToken('/home/goods', 'get')
}
/*
获取最新专题数据
*/
export const getSpecialApi = (limit) => {
  return requestWithOutToken('/home/special', 'get', { limit })
}
