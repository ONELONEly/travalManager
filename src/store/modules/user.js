/**
 * @Title: user.js 文件
 * @File: user.js
 * @Description: 用户相关的全局管理
 * @author XueLong xuelongqy@foxmail.com
 * @date 2018/1/29 14:59
 * @update_author
 * @update_time
 * @version V1.0
 */

export default {
  // 数据源
  state: {
    // 登陆用户
    loginUser: null
  },
  // 同步方法
  mutations: {
    // 设置登陆用户
    setLoginUser(state, user) {
      state.loginUser = user
    }
  },
  // 异步方法
  actions: {
  }
}
