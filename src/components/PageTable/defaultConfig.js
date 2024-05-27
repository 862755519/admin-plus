// 用于模拟异步接口请求
const getRemoteData = (data = "获取数据", time = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
};

// 默认配置信息
export const defaultPageTableOptions = {
  showSearch: true, // 是否展示搜索
  showTool: true, // 是否展示工具栏
  showPage: true, // 是否展示分页
  dictList: [], // 字典列表
  // 搜索表单配置
  searchOptions: {
    formProps: {
      labelWidth: 70, // 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值
      model: {
        name: "",
        age: "",
        gender: "",
        city: "",
        birthday: "",
      }, // 表单数据对象
      rules: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change",
          },
        ],
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
            await getRemoteData(cityData);
          },
          dataValue: "value", // 数据源的 value 字段 默认为 value
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
  },
  // 表格配置
  gridOptions: {
    loading: false, // 是否加载
    border: "full", // 是否带有边框 default（默认）, full（完整边框）, outer（外边框）, inner（内边框）, none（无边框）
    stripe: true, // 是否带有斑马纹（需要注意的是，在可编辑表格场景下，临时插入的数据不会有斑马纹样式）
    syncResize: false, // 自动跟随某个属性的变化去重新计算表格，和手动调用 recalculate 方法是一样的效果（对于通过某个属性来控制显示/隐藏切换时可能会用到）
    autoResize: false, // 自动监听父元素的变化去重新计算表格（对于父元素可能存在动态变化、显示隐藏的容器中、列宽异常等场景中的可能会用到）
    round: true, // 是否有圆角
    size: "small", // 表格尺寸 medium, small, mini
    showOverflow: "ellipsis", // 设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度） ellipsis（只显示省略号）,title（并且显示为原生 title）,tooltip（并且显示为 tooltip 提示）
    columnConfig: {
      // 列配置信息
      resizable: true, // 调整列宽度
      isCurrent: true, // 高亮当前列
      isHover: true, // 高亮当前头
    },
    rowConfig: {
      // 行配置信息
      isCurrent: true, // 高亮当前行
      isHover: true, // 高亮当前头
    },
    columns: [
      { type: "seq", width: 50 },
      { field: "name", title: "name" },
      { field: "sex", title: "sex" },
      { field: "address", title: "Address" },
    ], // 列配置信息
    data: [
      {
        id: 10001,
        name: "Test1",
        nickname: "T1",
        role: "Develop",
        sex: "Man",
        age: 28,
        address: "Shenzhen",
      },
      {
        id: 10002,
        name: "Test2",
        nickname: "T2",
        role: "Test",
        sex: "Women",
        age: 22,
        address: "Guangzhou",
      },
      {
        id: 10003,
        name: "Test3",
        nickname: "T3",
        role: "PM",
        sex: "Man",
        age: 32,
        address: "Shanghai",
      },
      {
        id: 10004,
        name: "Test4",
        nickname: "T4",
        role: "Designer",
        sex: "Women",
        age: 23,
        address: "Shenzhen",
      },
      {
        id: 10005,
        name: "Test5",
        nickname: "T5",
        role: "Develop",
        sex: "Women",
        age: 30,
        address: "Shanghai",
      },
      {
        id: 10006,
        name: "Test6",
        nickname: "T6",
        role: "Designer",
        sex: "Women",
        age: 21,
        address: "Shenzhen",
      },
      {
        id: 10007,
        name: "Test7",
        nickname: "T7",
        role: "Test",
        sex: "Man",
        age: 29,
        address: "Shenzhen",
      },
      {
        id: 10008,
        name: "Test8",
        nickname: "T8",
        role: "Develop",
        sex: "Man",
        age: 35,
        address: "Shenzhen",
      },
    ], // 表格数据
  },
  // 分页配置
  pageOptions: {
    showTotal: true, // 是否显示总数据量
    showSizer: true, // 是否可以调整每页条数
    total: 0, // 数据总数
    pageSizeOpts: [10, 20, 50, 100], // 每页条数切换的配置
    pageSize: 10, // 每页条数
    page: 1, // 当前页
  },
};
