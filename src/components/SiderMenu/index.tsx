import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import getMenuDatas from '../../config/menuConfig'
import styles from './index.module.less'

const Universal = namespace('Universal')

@Component
export default class SiderMenu extends Vue {
  @Universal.Getter('isSiderCollapse')
  public isSiderCollapse: number | undefined

  private menuDatas = getMenuDatas()

  public render() {
    return (
      <el-menu collapse={this.isSiderCollapse} class={styles['menu-wrapper']}>
        {this.menuDatas.map(menuData => {
          const { children, icon, title, path } = menuData

          if (!children || !children.length) {
            return (
              <el-menu-item>
                {icon && <i class={`el-icon-s-${icon}`} />}
                <span>{title}</span>
              </el-menu-item>
            )
          }

          return (
            <el-submenu index={path}>
              <template slot="title">
                {icon && <i class={`el-icon-s-${icon}`} />}
                <span>{title}</span>
              </template>
              {children &&
                children.map(child => (
                  <el-menu-item key={child.path} index={child.path}>
                    {child.title}
                  </el-menu-item>
                ))}
            </el-submenu>
          )
        })}
      </el-menu>
    )
  }
}
