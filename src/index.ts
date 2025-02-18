import type { AstroIntegration } from 'astro';
import { Extension, registerExtensions} from '@recogito/studio-sdk';

export const HelloWorldExtension: Extension = {

  name: 'hello-world-message',

  module_name: '@recogito/plugin-hello-world',

  component_name: 'HelloWorldMessage',

  extension_point: 'annotation:*:annotation-editor'

}

const plugin = (): AstroIntegration  => ({
  name: 'reconciliation-service-plugin',
  hooks: {
    'astro:config:setup': ({ config, logger }) => {
      registerExtensions(HelloWorldExtension, config, logger);
    }
  }
});

export default plugin;
