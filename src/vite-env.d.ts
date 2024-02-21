/// <reference types="vite/client" />
import {  HTMLAttributes, VNodeProps } from 'vue'
import { TagProps, CommonProps } from 'element-plus'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [elem: string]: HTMLAttributes | TagProps | CommonProps
        }
    }
}