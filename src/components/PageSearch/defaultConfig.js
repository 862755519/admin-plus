// 用于模拟异步接口请求
const getRemoteData = (data = "获取数据", time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};

// 默认配置信息
export const defaultConfig = {
  formProps: {
    labelWidth: 70, // 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
    model: {
      name: "",
      age: 0,
      gender: "",
      city: "",
      birthday: "",
    }, // 表单数据对象
    rules: {
      // name: [
      //   {
      //     required: true,
      //     message: "表单内容不能为空",
      //     trigger: "blur",
      //   },
      // ],
      // gender: [
      //   {
      //     required: true,
      //     message: "表单内容不能为空",
      //     trigger: "blur",
      //   },
      // ],
    },
  },
  formSchemasProps: [
    // 文本输入框
    {
      component: "Input", // 组件名 输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "name", // 对应表单域 model 里的字段
        label: "用户姓名", // 标签文本
      },
      componentProps: {
        type: "text", // 输入框类型，可选值为 text、password、textarea、url、email、date、number、tel
        placeholder: "请输入内容", // 占位文本
        clearable: true, // 是否显示清空按钮
      },
    },
    // 数字输入框
    {
      component: "InputNumber", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "age", // 对应表单域 model 里的字段
        label: "用户年龄", // 标签文本
      },
      componentProps: {
        placeholder: "请输入内容", // 占位文本
        min: 0, // 最小值
        max: 100, // 最大值
      },
    },
    // 选择器
    {
      component: "Select", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "gender", // 对应表单域 model 里的字段
        label: "用户性别", // 标签文本
      },
      componentProps: {
        placeholder: "请选择内容", // 占位文本
        filterable: true, // 支持搜索
      },
      optionsProps: {
        data: [
          {
            value: "1", // 值
            label: "男", // 标签
          },
          {
            value: "2", // 值
            label: "女", // 标签
          },
        ], // 数据源 可以为异步方法
        dataValue: "value", // 数据源的 value 字段 默认为 value
        dataLabel: "label", // 数据源的 label 字段 默认为 label
      },
    },
    // 异步数据源选择器
    {
      component: "Select", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "city", // 对应表单域 model 里的字段
        label: "所在城市", // 标签文本
      },
      componentProps: {
        placeholder: "请选择内容", // 占位文本
        filterable: true, // 支持搜索
      },
      optionsProps: {
        data: async () => {
          const cityData = [
            { id: 1, label: "北京" },
            { id: 2, label: "上海" },
            { id: 3, label: "深圳" },
            { id: 3, label: "杭州" },
          ];
          return await getRemoteData(cityData);
        },
        dataValue: "id", // 数据源的 value 字段 默认为 value
        dataLabel: "label", // 数据源的 label 字段 默认为 label
      },
    },
    // 日期选择器
    {
      component: "DatePicker", // 组件名 数字输入框
      colProps: {
        span: 4, // 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 display:none
      },
      formItemProps: {
        prop: "birthday", // 对应表单域 model 里的字段
        label: "出生日期", // 标签文本
      },
      componentProps: {
        type: "date",
        placeholder: "请选择日期", // 占位文本
      },
    },
  ],
};
