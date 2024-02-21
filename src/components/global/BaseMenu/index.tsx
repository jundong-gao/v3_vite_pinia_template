import { Fragment, defineComponent } from 'vue'
import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
import './style.scss'

export default defineComponent({
  props: {
    isCollapse: Boolean
  },
  setup() {

  },
  computed: {
    menus() {
      return router.options.routes.find(item => item?.path === '/')?.children || []
    },
    acrive_path() {
      return router.currentRoute.value.path
    }
  },
  render() {
    return (
      <el-menu class="menu-real" default-active={this.acrive_path} router collapse={this.isCollapse} active-text-color="#ffd04b" background-color="#323640" text-color="#fff">
        {
          this.menus.map(menu => {
            return this.renderMenuItem(menu)
          })
        }
      </el-menu>
    )
  },
  methods: {
    renderMenuItem(menu: RouteRecordRaw) {
      if (menu.children) {
        return (
          <el-sub-menu index={menu.path} v-slots={{
            'title': () => (
              <Fragment>
                <el-icon><location /></el-icon>
                <span>{menu.meta?.title}</span>
              </Fragment>
            )
          }}>
            {
              menu.children.map((item: RouteRecordRaw) => {
                return this.renderMenuItem(item)
              })
            }
          </el-sub-menu>
        )
      }
      return (
        <el-menu-item index={menu.path} v-slots={{
          'title': () => menu.meta?.title
        }}>
          <el-icon>
            <location></location>
          </el-icon>
        </el-menu-item>
      )
    }
  }
})