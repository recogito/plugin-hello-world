import type { Extension } from '@recogito/studio-sdk';

let registry: Extension[] = [];

try {
  const mod = await import('./generated/registered.json', { assert: { type: 'json' } });
  registry = mod.default;
} catch {
  // File doesn't exist yet, use empty registry
  registry = [];
}

export const ExtensionRegistry = {

  listExtensions: (): Extension[] => {
    return registry;
  },

  getComponentsForExtensionPoint: (point: string) => {
    return registry
      .filter(e => e.extension_point === point);
  }
  
}