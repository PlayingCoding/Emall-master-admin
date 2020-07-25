import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import classnames from 'classnames'
import * as actionTypes from '../../store/actionTypes'
import styles from './index.module.less'

const Universal = namespace('Universal')

@Component
export default class GlobalHeader extends Vue {
  @Universal.Getter('isSiderCollapse')
  public isSiderCollapse: number | undefined

  @Universal.Mutation(actionTypes.TOOGGLE_SIDER_COLLAPSE)
  public toggleCollapse: () => void

  public render() {
    const { toggleCollapse }: GlobalHeader = this

    return (
      <el-row class={styles['global-header']}>
        <el-col span={12} class={styles['global-header-left']}>
          <i
            class={classnames('el-icon-s-unfold', styles.collapse, this.isSiderCollapse ? '' : styles['is-fold'])}
            onClick={toggleCollapse}
          ></i>
        </el-col>
        <el-col span={12} class={styles['global-header-right']}>
          <el-dropdown>
            <el-avatar
              class={styles.avatar}
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              size="medium"
            ></el-avatar>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    )
  }
}
