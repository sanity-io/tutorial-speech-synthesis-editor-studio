import blocksToHTML, { h } from '@sanity/block-content-to-html';

const serializers = {
  marks: {
    prosody: ({ children, mark: { rate, pitch, volume } }) =>
      h('prosody', { attrs: { rate, pitch, volume } }, children),
    alias: ({ children, mark: { text } }) =>
      h('sub', { attrs: { alias: text } }, children),
    sayAs: ({ children, mark: { interpretAs } }) =>
      h('say-as', { attrs: { 'interpret-as': interpretAs } }, children),
    break: ({ children, mark: { time, strength } }) =>
      h('break', { attrs: { time: `${time}ms`, strength } }, children),
    emphasis: ({ children, mark: { level } }) =>
      h('emphasis', { attrs: { level } }, children),
  },
};

export const blocksToSSML = blocks => blocksToHTML({ blocks, serializers });
