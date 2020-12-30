import { PluginObject } from "vue";
import NdcInstall from "./install";
import plugins from "./plugins";
import directives from './directives'

export interface NdcConfig {
  [key: string]: any;
}

export default {
  install(Vue, opts) {
    NdcInstall(Vue, {
      directives,
      plugins,
      config: opts
    })
  }
} as PluginObject<NdcConfig>
