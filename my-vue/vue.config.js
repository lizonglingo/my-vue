import vueSetupExtend from 'vite-plugin-vue-setup-extend'
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: [vueSetupExtend()]
})
