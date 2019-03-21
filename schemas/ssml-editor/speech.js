import SSMLeditor from './SSMLeditor.js';

export default {
  name: 'speech',
  type: 'array',
  title: 'SSML Editor',
  inputComponent: SSMLeditor,
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [],
        annotations: [
          { type: 'alias' },
          { type: 'emphasis' },
          { type: 'prosody' },
          { type: 'sayAs' },
        ],
      },
    },
  ],
};
