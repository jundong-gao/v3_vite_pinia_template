import { Component } from "vue";

export interface IMetaData {
  /**
   * 标题
   */
  title?: string,
  /**
   * 按钮菜单  I Ep开头, elementPlus ep图标库
   */
  icon?: string,
  /**
   * 是否隐藏菜单
   */
  hideMenu?: boolean,
}