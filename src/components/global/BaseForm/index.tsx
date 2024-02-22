import { defineComponent } from 'vue'
import './style.scss'

export interface IColumnItem {
  label: string,
  key: string,
  type: string,
  span?: number,
  data?: any[]
  // ... 其他属性
}

export default defineComponent({
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array<IColumnItem>,
      default: () => []
    },
    rowNum: {
      type: Number,
      default: 2
    },
    colGutter: {
      type: Number,
      default: 20
    }
  },
  render() {
    return (
      <el-row gutter={this.colGutter}>
        {
          this.columns.map(item => {
            return (
              <el-col span={item.span ?? 24 / this.rowNum}>
                {this.renderFormItem(item)}
              </el-col>
            )
          })
        }
      </el-row>
    )
  },
  methods: {
    renderFormItem(item: IColumnItem) {
      // 如果有插槽，就展示插槽内容
      if(this.$slots[item.key]) return this.$slots[item.key]?.(item)
      return (
        <el-form-item {...item} prop={item.key}>
          { this.renderFormContent(item) }
        </el-form-item>
      )
    },

    renderFormContent(item: IColumnItem) {
      switch(item.type) {
        case 'input':
        case 'textarea':
        case 'password':
          return <el-input v-model={this.formData[item.key]} placeholder='请输入' {...item}></el-input>
        case 'inputNumber':
          return <el-input-number class="w-[100%]" controls-position="right" v-model={this.formData[item.key]} placeholder='请输入' {...item}></el-input-number>
        case 'select':
          return (
            <el-select vModel={this.formData[item.key]} placeholder='请选择' {...item}>
              {
                item.data?.map(option => {
                  return <el-option key={option.value} label={option.label} value={option.value}></el-option>
                })
              }
            </el-select>
          )
        case 'date':
          return <el-date-picker value-format='YYYY-MM-DD' v-model={this.formData[item.key]} placeholder='请选择' {...item}></el-date-picker>
        case 'dateRange':
          return <el-date-picker value-format='YYYY-MM-DD' v-model={this.formData[item.key]} range-separator='至' start-placeholder='开始日期' end-placeholder='结束日期' {...item} type="daterange"></el-date-picker>
        case 'time':
          return <el-time-picker value-format='HH:mm:ss' v-model={this.formData[item.key]} placeholder='请选择' {...item}></el-time-picker>
        case 'dateTime':
          return <el-date-picker value-format='YYYY-MM-DD HH:mm:ss' v-model={this.formData[item.key]} placeholder='请选择' {...item} type="datetime"></el-date-picker>
        case 'switch':
          return <el-switch v-model={this.formData[item.key]} {...item}></el-switch>
        case 'radio':
          return (
            <el-radio-group v-model={this.formData[item.key]} {...item}>
              {
                item.data?.map(option => {
                  return <el-radio label={option.value}>{option.label}</el-radio>
                })
              }
            </el-radio-group>
          )
        default:
          return null
      }
    }
  }

})