// permission.js 用户按钮权限自定义指令
import useUserStore from "@/store/modules/user";
export const permission = {
  // mounted是指令的一个生命周期
  mounted(el, binding) {
    // value 获取用户使用自定义指令绑定的内容
    const { value } = binding
    // 获取用户所有的权限按钮
    const userStore = useUserStore();
    const buttonPermission = userStore.permissions;
    // 判断用户使用自定义指令，是否使用正确了
    if (value && value instanceof Array && value.length > 0) {
      const permissionFunc = value
      //判断传递进来的按钮权限，用户是否拥有
      //Array.some(), 数组中有一个结果是true返回true，剩下的元素不会再检测
      const hasPermission = buttonPermission.some((role) => {
        return permissionFunc.includes(role)
      })
       // 当用户没有这个按钮权限时，设置隐藏这个按钮
      if (!hasPermission) {
        el.style.display = 'none'
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    }
  }
}
// 注意，我们这里写的自定义指令，传递内容是一个数组，也就说，按钮权限可能是由
// 多个因素决定的，如果你的业务场景只由一个因素决定，自定义指令也可以不传递一个数组，
// 只传递一个字符串就可以了
