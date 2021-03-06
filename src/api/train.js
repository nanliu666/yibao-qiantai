import request from '@/util/axios'
export const getKonwList = (params) => {
  return request({
    url: '/api/blade-resource/v1/category/relatedKnowledgeList',
    method: 'post',
    params
  })
}
export const getList = (params) => {
  return request({
    url: '/api/blade-manage/v1/web/queryTrainList',
    method: 'get',
    params
  })
}
export const getDetail = (params) => {
  return request({
    url: '/api/blade-manage/v1/train/getTrainDetail',
    method: 'get',
    params
  })
}

export function getCourseList(params) {
  return request({
    url: '/api/blade-manage/v1/web/course/queryCourseList',
    method: 'get',
    params
  })
}

export function queryExamList(params) {
  return request({
    url: '/api/blade-manage/v1/web/course/queryExamList',
    method: 'get',
    params
  })
}

export function getOfflineTodo(params) {
  return request({
    url: '/api/blade-manage/v1/train/getOfflineTodo',
    method: 'get',
    params
  })
}
export function getOnlineCourse(params) {
  return request({
    url: '/api/blade-manage/v1/train/getOnlineCourse',
    method: 'get',
    params
  })
}
export function getTrainExamList(params) {
  return request({
    url: '/api/blade-manage/v1/train/examList',
    method: 'get',
    params
  })
}

export function getExamDetail(params) {
  return request({
    url: '/api/blade-manage/v1/train/examDetail',
    method: 'get',
    params
  })
}

export function getTrainEvaluate(params) {
  return request({
    url: '/api/blade-manage/v1/train/queryEvaluate',
    method: 'get',
    params
  })
}

export function addEvaluate(data) {
  return request({
    url: '/api/blade-manage/v1/train/addEvaluate',
    method: 'post',
    data
  })
}

export function studentList(params) {
  return request({
    url: '/api/blade-manage/v1/web/course/studentList',
    method: 'get',
    params
  })
}

export function examResult(params) {
  return request({
    url: '/api/blade-manage/v1/train/examResult',
    method: 'get',
    params
  })
}
// 查询培训安排(线上课程/线下课程/考试信息)
export function getTrainDate(params) {
  return request({
    url: '/api/blade-manage/v1/web/train/queryTrainDate',
    method: 'get',
    params
  })
}
// 查询培训安排(线上课程/线下课程/考试信息)
export function getTrainInfo(params) {
  return request({
    url: '/api/blade-manage/v1/web/train/queryTrainInfo',
    method: 'get',
    params
  })
}
// 查询培训评定
export function queryAssessment(params) {
  return request({
    url: '/api/blade-manage/v1/train/queryAssessment',
    method: 'get',
    params
  })
}
// 获取报名状态
export function getTrainState(params) {
  return request({
    url: '/manage/v1/getTrainState',
    method: 'get',
    params
  })
}
// 立即报名课程
export function signUp(data) {
  return request({
    url: '/manage/v1/train/apply/join',
    method: 'post',
    data
  })
}
// 查询培训上报材料
export function getFileLists(params) {
  return request({
    url: 'api/manage/v1/trainsubmitfile/listSubmitFile',
    method: 'get',
    params
  })
}
// 保存培训上报材料
export function saveFile(data) {
  return request({
    url: 'api/manage/v1/trainsubmitfile/saveFile',
    method: 'post',
    data
  })
}
// 删除培训上报材料
export function deleteSubmitFile(params) {
  return request({
    url: 'api/manage/v1/trainsubmitfile/deleteSubmitFile',
    method: 'get',
    params
  })
}
// 培训请假
export function leave(params) {
  return request({
    url: 'api/manage/v1/web/train/trainLeaveApply',
    method: 'get',
    params
  })
}
// 获取培训参加人数
export function trainNum(params) {
  return request({
    url: 'api/manage/v1/train/people/statistics',
    method: 'get',
    params
  })
}
// 培训收藏
export function trainCollect(params) {
  return request({
    url: `api/manage/v1/train/trainCollect?type=${params.type}&trainId=${params.trainId}`,
    method: 'post',
    params
  })
}

// 取消培训收藏
export function cancelTrainCollect(params) {
  return request({
    url: `api/manage/v1/train/cancelTrainCollect?type=${params.type}&trainId=${params.trainId}`,
    method: 'post',
    params
  })
}
// 用户培训收藏列表
export function getCollectionTrainList(params) {
  return request({
    url: 'api/manage/v1/user/collect/train/list',
    method: 'get',
    params
  })
}
// 查询是否收藏
export function queryFavoriteStatus(params) {
  return request({
    url: 'api/blade-manage/v1/train/queryFavoriteStatus',
    method: 'get',
    params
  })
}
// 获取知识体系
export function getKnowList(data) {
  return request({
    url: 'api/blade-resource/v1/category/getKnowledgeCatalogList',
    method: 'post',
    data
  })
}
