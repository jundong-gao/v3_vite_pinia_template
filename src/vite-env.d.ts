/// <reference types="vite/client" />
import {  HTMLAttributes, VNodeProps } from 'vue'
import { TagProps, CommonProps } from 'element-plus'
import { IMetaData } from './types/router'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elem: string]: HTMLAttributes | TagProps | CommonProps
        }
    }
}

declare module 'vue-router' {
    interface RouteMeta extends IMetaData {}
}