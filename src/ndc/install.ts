import { DirectiveOptions } from "vue";
import { Vue as _Vue } from "vue/types/vue";
import { NdcConfig } from "./ndc";

const $ndc: NdcVue = {
  config: {},
};

export interface NdcVue {
  [key: string]: any;
}

export interface NdcDirective extends DirectiveOptions {
  name: string;
}

export interface NdcPlugin {
  install(param: {$ndc: NdcVue; cfg: NdcConfig}): void;
}

export interface Config {
  directives: {
    [key: string]: NdcDirective;
  };

  plugins: {
    [key: string]: NdcPlugin;
  };

  config: NdcConfig | undefined;
}

export default function(Vue: typeof _Vue, opts: Config) {
  const cfg = $ndc.config = opts.config || {};

  opts.directives && Object.keys(opts.directives).forEach((key) => {
    const d = opts.directives[key];
    if (d.name !== undefined && d.unbind !== void 0) {
      Vue.directive(d.name, d);
    }
  });

  if (opts.plugins) {
    const param = { $ndc, cfg };
    Object.keys(opts.plugins).forEach(key => {
      const p = opts.plugins[key];
      if (typeof p.install === 'function') {
        p.install(param);
      }
    })
  }
}
