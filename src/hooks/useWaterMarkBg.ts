
export interface IWaterMarkConfig {
  text?: string,
  fontSize?: number,
  color?: string,
  gap?: number,
  zIndex?: number
}

export const useWaterMarkBg = (config: IWaterMarkConfig) => {
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  // 文字大小
  let fontSize = config.fontSize! * devicePixelRatio;
  // 设置canvas文字样式 用来计算文字宽度
  ctx.font = `${fontSize}px Microsoft YaHei`;
  // 获取文字宽度
  const { width } = ctx?.measureText(config.text!)
  // 计算canvas大小
  const canvasSize = Math.max(50, width) + config.gap! * devicePixelRatio
  canvas.width = canvasSize;
  canvas.height = canvasSize;
  // canvas改变圆点、旋转 
  ctx.translate(canvasSize / 2, canvasSize / 2);
  ctx.rotate(Math.PI / 180 * -45);
  // 设置字体
  ctx.fillStyle = config.color!
  ctx.font = `${fontSize}px Microsoft YaHei`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText(config.text!, 0, 0)


  return {
    base64: canvas.toDataURL('image/png'),
    size: canvasSize / devicePixelRatio
  }
}