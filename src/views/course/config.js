import variables from '@/styles/variables.scss'
export const COURSE_TYPE_MAP = {
  '1': '在线课程',
  '2': '面授课程',
  '3': '直播课程'
}
export const COURSE_CHAPTER_TYPE_MAP = {
  '1': {
    text: '文章',
    color: variables.primaryColor
  },
  '2': {
    text: '文档',
    color: '#FC7C01'
  },
  '3': {
    text: '资料',
    color: '#FF4329'
  },
  '4': {
    text: '作业',
    color: '#FCBA00'
  },
  '6': {
    text: '课前思考',
    color: '#00B061'
  },
  '5': {
    text: '视频',
    color: variables.primaryColor
  }
}
