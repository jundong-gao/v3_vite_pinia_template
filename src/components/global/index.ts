// let files = import.meta.glob
let files = import.meta.glob(['./**/index.vue', './**/index.tsx'], {eager: true})

let modules: Record<string, unknown> = {}

Object.keys(files).forEach(key => {
  let name = key.split('/')[1]
  modules[name] = (files[key] as any)?.default || files[key]
})

export default modules
