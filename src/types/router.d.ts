import { Component } from "vue";

export interface IMetaData {
  /**
   * 标题
   */
  title?: string,
  /**
   * 按钮菜单
   */
  icon?: Component,
  /**
   * 是否隐藏菜单
   */
  hideMenu?: boolean,
}