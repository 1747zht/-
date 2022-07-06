import { requestWithOutToken } from '@/utils/request'

export const getTopCategoryByIdApi = (id) => {
  return requestWithOutToken('/category', 'get', { id })
}
/*
 获取筛选条件
*/
export const getSubCategoryFilterByIdApi = (id) => {
  return requestWithOutToken('/category/sub/filter', 'get', { id })
}

/**
 * 获取商品列表
 * @param params 分类ID、筛选条件、排序条件、分页信息
 * @returns {Promise}
 */
export const getGoodsListApi = (params) => {
  return requestWithOutToken('/category/goods', 'post', params)
}
