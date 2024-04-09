// echarts 按需引入 实测 打包体积减少一半还要多=== 大概400k左右
import * as echarts from 'echarts/core';

// 渲染模式
import { SVGRenderer } from 'echarts/renderers';

// 图表类型
import { 
  LineChart,
  BarChart
} from 'echarts/charts';

// 标签自动布局，全局过渡动画等特性
import {
  LabelLayout,
  UniversalTransition,
  
} from 'echarts/features'

//  工具组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TransformComponent,
  DatasetComponent,
} from 'echarts/components';

echarts.use([
  SVGRenderer, 
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  TransformComponent,
  DatasetComponent,
  LabelLayout,
  UniversalTransition
]);


export default echarts