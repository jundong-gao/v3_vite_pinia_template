import { Fragment, defineComponent, ref } from 'vue'
import './style.scss'
import { Close } from '@element-plus/icons-vue'



export default defineComponent({
  props: {
    modelValue: Boolean,
    showFooter: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    }
  },
  computed: {
    dialog: {
      get() {
        return this.modelValue
      },
      set(val: boolean) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  setup() {
    return {
      loading: ref(false)
    }
  },
  render() {
    return (
      <el-dialog v-model={this.dialog} show-close={false} append-to-body close-on-press-escape={false} v-slots={{
        header: ({ close, titleId, titleClass }: any) => (
          <div class={['base-dialog-header', 'flex-jasc', titleClass]} id={titleId}>
            <div class="base-dialog-header-title">{this.$attrs.title}</div>
            <div onClick={() => close()} class="cursor-pointer flex-jac">
              <el-icon size="16px"><Close></Close></el-icon>
            </div>
          </div>
        ),
      }}>
        <div class="base-dialog-content">
          {this.$slots.default?.()}
        </div>

        {this.showFooter ? (
          <div class="base-dialog-footer flex-jasc-end">
            {this.$slots.footer ? this.$slots.footer() : (
              <Fragment>
                <el-button size="small" onClick={() => this.dialog = false}>{this.cancelText}</el-button>
                <el-button type="primary" size="small" onClick={() => this.confirm()} loading={this.loading}>{this.confirmText}</el-button>
              </Fragment>
            )}
          </div>
        ) : null}
      </el-dialog>
    )
  },
  methods: {
    confirm() {
      let callback = (this.$attrs as any)?.onConfirm?.()
      this.loading = true
      if (Object.prototype.toString.call(callback) === '[object Promise]') {
        this.loading = true
        callback.finally(() => {
          this.loading = false
        })
      } else {
        this.loading = false
      }
    }
  }
})