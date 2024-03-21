<script lang="tsx">
import { defineComponent, ref } from 'vue';
import './style.scss'
import { ElForm } from 'element-plus'


export interface IColumnItem {
  label: string,
  key: string,
  hidden?: boolean,
  span?: number,
  search?: boolean,
  children?: IColumnItem[]
}

export default defineComponent({
  props: {
    columns: {
      type: Array<IColumnItem>,
      default: () => []
    },
    searchRowNum: {
      type: Number,
      default: 4
    },
    searchText: {
      type: String,
      default: '搜索'
    },
    resetText: {
      type: String,
      default: '重置'
    },
    api: {
      type: Function,
      default: () => null
    },
    showPage: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    return {
      tableData: ref([]),
      loading: ref(false),
      searchParams: ref({}),
      searchFormRef: ref({} as InstanceType<typeof ElForm>),
      pageNum: ref(1),
      pageSize: ref(10),
      total: ref(0),
      pageSizes: ref([10, 20, 30, 40]),
      layout: ref('total, sizes, prev, pager, next, jumper'),
    }
  },
  computed: {
    searchColumns(): IColumnItem[] {
      let columns = this.columns.filter(column => column.search)
      // 搜素按钮
      if(columns.length) columns.push({label: '', key: 'search', span: columns.length % this.searchRowNum == 0 ? 24 : 24 / this.searchRowNum})
      return columns
    }
  },
  render() {
    return (
      <div>
        <div class="base-table-search">
          <el-form ref='searchFormRef' model={this.searchParams}>
            <base-form row-num={this.searchRowNum} columns={this.searchColumns} form-data={this.searchParams} v-slots={{
              search: () => {
                return <div class='flex-jasc-end'>
                  <el-button onClick={() => this.reset()}>{this.resetText}</el-button>
                  <el-button type='primary' onClick={() => this.search()}>{this.searchText}</el-button>
                </div>
              }
            }}>
            </base-form>
          </el-form>
        </div>
        <el-table border={false} v-loading={this.loading} data={this.tableData} {...this.$attrs}>
          {
            this.columns.map((column: IColumnItem) => {
              return this.renderTableColumn(column)
            })
          }
        </el-table>
        {
          this.showPage? (
            <div class="flex-jasc-end p-[10px]">
              <el-pagination layout={this.layout} page-sizes={this.pageSizes} small background total={this.total} v-model_current-page={this.pageNum} v-model_page-size={this.pageSize} onSizeChange={(val: number) => this.sizeChange(val)} onCurrentChange={(val: number) => this.currentChange(val)}></el-pagination>
            </div>
          ) : null
        }
      </div>
    )
  },
  mounted() {
    this.reset()
  },
  methods: {
    renderTableColumn(column: IColumnItem) {
      // 判断是否隐藏
      if(column.hidden) return null
      // 如果存在自定义表格单元，则渲染
      let slotScope: Record<string, any> = {}
      if(this.$slots[column.key]) slotScope.default = (scope: any) => this.$slots[column.key]?.(scope)
      if(this.$slots[column.key + 'Header']) slotScope.header = (scope: any) => this.$slots[column.key + 'Header']?.(scope)

      let cloneProps = {...column}
      delete cloneProps.children
      return (
        <el-table-column align='center' {...cloneProps} prop={column.key} v-slots={slotScope}>
          {/* 递归渲染多层级表格 */}
          {column.children ? column.children.map(v => {
            return this.renderTableColumn(v)
          }) : null}
        </el-table-column>
      )
    },
    getList() {
      if(typeof this.api !== 'function') return 
      this.loading = true
      this.api({...this.searchParams, pageNum: this.pageNum, pageSize: this.pageSize}).then((res: any) => {
        this.tableData = res.data.list
        this.total = res.data.total
        // 如果页码大于1，并且该页没数据，页码就重置为1，=== 用于删除数据之后的重新获取列表数据
        if(this.tableData.length === 0 && this.pageNum > 1) {
          this.pageNum = 1
          this.getList()
        }
      }).finally(() => {
        this.loading = false
      })
    },
    search() {
      this.getList()
    },
    reset() {
      this.searchFormRef.resetFields()
      this.pageNum = 1
      this.getList()
    },
    sizeChange(val: number) {
      this.pageSize = val
      this.getList()
    },
    currentChange(val: number) {
      this.pageNum = val
      this.getList()
    }
  }

})
</script>