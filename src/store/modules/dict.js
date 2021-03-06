import { getStore, setStore, removeStore } from '@/util/store'

import { getDictionary } from '@/api/common'

const dict = {
  state: {
    commonDict: getStore({ name: 'commonDict' }) || {}
  },
  actions: {
    /**
     * 字典组
     */
    CommonDict({ state, commit }, name) {
      return new Promise((resolve, reject) => {
        if (state.commonDict[name]) {
          resolve(state.commonDict[name])
          return
        }
        getDictionary({ code: name })
          .then((data) => {
            commit('SET_COMMON_DICT', { name, data })
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  mutations: {
    SET_COMMON_DICT: (state, { name, data }) => {
      state.commonDict[name] = data
      setStore({
        name: 'commonDict',
        content: state.commonDict
      })
    },
    DEL_ALL_TAG: (state) => {
      state.tagList = []
      setStore({ name: 'tagList', content: state.tagList })
    },
    CLEAR_LOCK: (state) => {
      state.isLock = false
      state.lockPasswd = ''
      removeStore({
        name: 'lockPasswd'
      })
      removeStore({
        name: 'isLock'
      })
    }
  }
}

export default dict
