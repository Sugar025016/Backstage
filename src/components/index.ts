import SvgIcon from './SvgIcon/index.vue'

const allGloablComponent = { SvgIcon }
export default {
  install(app) {
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key])
    })
  },
}
