interface IMenuData {
  title: string
  icon?: string
  path: string
  children?: IMenuData[]
}

const MENU_DATAS: IMenuData[] = [
  {
    title: '首页',
    icon: 'home',
    path: '/'
  },
  {
    title: '商品管理',
    icon: 'shop',
    path: '/goods',
    children: [
      {
        title: '商品列表',
        path: 'list'
      },
      {
        title: '类别管理',
        path: 'type'
      },
      {
        title: '品牌管理',
        path: 'brand'
      }
    ]
  },
  {
    title: '订单管理',
    icon: 'order',
    path: '/order',
    children: [
      {
        title: '订单列表',
        path: 'list'
      },
      {
        title: '订单设置',
        path: 'setting'
      },
      {
        title: '退货管理',
        path: 'return'
      },
      {
        title: '退货原因管理',
        path: 'reason'
      }
    ]
  },
  {
    title: '营销管理',
    icon: 'market',
    path: '/market',
    children: [
      {
        title: '秒杀活动',
        path: 'seckill'
      },
      {
        title: '优惠券',
        path: 'coupon'
      },
      {
        title: '品牌推荐',
        path: 'brand'
      },
      {
        title: '新品推荐',
        path: 'newon'
      },
      {
        title: '人气推荐',
        path: 'popularity'
      },
      {
        title: '专题推荐',
        path: 'subject'
      },
      {
        title: '广告管理',
        path: 'advertise'
      }
    ]
  },
  {
    title: '权限管理',
    icon: 'author',
    path: '/author',
    children: [
      {
        title: '用户管理',
        path: 'user'
      },
      {
        title: '角色管理',
        path: 'role'
      },
      {
        title: '菜单管理',
        path: 'menu'
      },
      {
        title: '资源管理',
        path: 'resource'
      }
    ]
  }
]

export default MENU_DATAS
