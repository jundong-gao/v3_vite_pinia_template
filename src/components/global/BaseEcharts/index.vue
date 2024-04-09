<template>
  <div>
    <div class="h-full w-full" ref="echartsRef"></div>
  </div>
</template>

<script setup lang="ts">
import echarts from './echarts'

const props = defineProps({
  options: {
    type: Object,
    default: () => ({
      legend: {
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
      },
      tooltip: {
        trigger: 'axis', 
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 20,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '兴奋值',
          symbol: 'none',
          smooth: true,
          type: 'line',
          lineStyle: {width: 0},
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgb(1, 191, 236)'
              }
            ])
          },
          data: [10, 50, 100, 500, 1000, 800, 600]
        }
      ]
    })
  }
})
const echartsRef = ref<HTMLElement>()
let echartsInstance:echarts.ECharts 

onMounted(() => {
  init()
})

watch(() => props.options, (opt) => {
  if(!opt) return
  if(!echartsInstance) return init()
  echartsInstance.setOption(opt)
})

function init() {
  console.log('echartsRef.value::::::::::::::::', echartsRef.value)
  echartsInstance = echarts.init(echartsRef.value as HTMLElement)
  echartsInstance.setOption(props.options)
}

</script>

<style lang="scss" scoped>

</style>