/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
  // eslint-disable-next-line max-len
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}
/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s)
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/*验证pad还是pc*/
export const vaildatePc = function() {
  const userAgentInfo = navigator.userAgent
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  // eslint-disable-next-line max-len
  const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/**
 * 判断身份证号码
 */
export function cardid(code) {
  let list = []
  let result = true
  let msg = ''
  var city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  if (!validatenull(code)) {
    if (code.length == 18) {
      if (!code || !/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(code)) {
        msg = '证件号码格式错误'
      } else if (!city[code.substr(0, 2)]) {
        msg = '地址编码错误'
      } else {
        //18位身份证需要验证最后一位校验位
        code = code.split('')
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2, 'x']
        var sum = 0
        var ai = 0
        var wi = 0
        for (var i = 0; i < 17; i++) {
          ai = code[i]
          wi = factor[i]
          sum += ai * wi
        }
        if (parity[sum % 11] != code[17]) {
          msg = '证件号码校验位错误'
        } else {
          result = false
        }
      }
    } else {
      msg = '证件号码长度不为18位'
    }
  } else {
    msg = '证件号码不能为空'
  }
  list.push(result)
  list.push(msg)
  return list
}
/**
 * 判断手机号码是否正确
 */
export function isvalidatemobile(phone) {
  let list = []
  let result = true
  let msg = ''
  var isPhone = /^0\d{2,3}-?\d{7,8}$/
  //增加134 减少|1349[0-9]{7}，增加181,增加145，增加17[678]
  if (!validatenull(phone)) {
    if (phone.length == 11) {
      if (isPhone.test(phone)) {
        msg = '手机号码格式不正确'
      } else {
        result = false
      }
    } else {
      msg = '手机号码长度不为11位'
    }
  } else {
    msg = '手机号码不能为空'
  }
  list.push(result)
  list.push(msg)
  return list
}
/**
 * 判断姓名是否正确
 */
export function validatename(name) {
  var regName = /^[\u4e00-\u9fa5]{2,4}$/
  if (!regName.test(name)) return false
  return true
}
/**
 * 判断是否为整数
 */
export function validatenum(num, type) {
  let regName = /[^\d.]/g
  if (type == 1) {
    if (!regName.test(num)) return false
  } else if (type == 2) {
    regName = /[^\d]/g
    if (!regName.test(num)) return false
  }
  return true
}
/**
 * 判断是否为小数
 */
export function validatenumord(num, type) {
  let regName = /[^\d.]/g
  if (type == 1) {
    if (!regName.test(num)) return false
  } else if (type == 2) {
    regName = /[^\d.]/g
    if (!regName.test(num)) return false
  }
  return true
}
/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val == 'boolean') {
    return false
  }
  if (typeof val == 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length == 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '')
      return true
    return false
  }
  return false
}

/**
 * 密码的校验规则(密码包含字母，符号或数字中至少两项且长度超过6位的密码)
 */
export function validatePW(pw) {
  let regular = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,}$/
  if (regular.test(pw)) {
    return true
  } else {
    return false
  }
}

/**
 * 2-10位汉字、英文、空格和点号
 * @param {Object} name
 */
export function validateName(name) {
  let reg = /^[a-zA-Z\x20\u4e00-\u9fa5.]{2,10}$/
  if (reg.test(name)) {
    return true
  } else {
    return false
  }
}
/**
 * 19/17/16位银行卡号
 * @param {Object} number
 */
export function validataBankCard(number) {
  let reg = /(^\d{15}$)|(^\d{17}$)|(^\d{19}$)/
  if (reg.test(number)) {
    return true
  } else {
    return false
  }
}

/**
 * 18位数字个人社保账号校验
 * @param {Object} no
 */
export function validataSSCount(no) {
  let reg = /^\d{18}$/
  if (reg.test(no)) {
    return true
  } else {
    return false
  }
}

/**
 * 9位或者12位的公积金账号校验
 * @param {Object} no
 */
export function validataEpt(no) {
  let reg = /(^\d{9}$)|(^\d{12}$)/
  if (reg.test(no)) {
    return true
  } else {
    return false
  }
}

export function isEmailReg(s) {
  return /^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)*@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}
/**
 * 判断港澳居民来往内地通行证   H/M+8位数字
 * @param {Object} no
 */
export function HMCardValid(data) {
  var reg = /^[H|h|M|m](\d{8})$/
  let pass = true
  if (!data) {
    pass = false
  } else if (!reg.test(data.trim())) {
    pass = false
  }
  return pass
}
/**
 * 台湾居民来往大陆通行证 1个英文字+7位数字或于8位数字
 * @param {Object} no
 */
export function TWCardValid(data) {
  var reg = /^[a-zA-Z](\d{7}|\d{8})$/
  let pass = true
  if (!data) {
    pass = false
  } else if (!reg.test(data.trim())) {
    pass = false
  }
  return pass
}

// 多表单校验
export function validateForms(formRefs) {
  let objectList = []
  let results = formRefs.map(formRef =>
    new Promise((resolve, reject) => {
      formRef.validate((valid, object) => {
        if (valid) {
          resolve()
        } else {
          objectList.push(object)
          reject()
        }
      })
    })
  )
  return Promise.all(results).catch(() => {
    return Promise.reject(objectList)
  })
}
