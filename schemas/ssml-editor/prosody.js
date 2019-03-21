import React from 'react'
export default {
  name: 'prosody',
  type: 'object',
  title: 'Prosody',
  description: 'Control of the pitch, speaking rate, and volume',
  fields: [
    {
      name: 'pitch',
      type: 'string',
      title: 'Pitch',
      description: 'The baseline pitch for the contained text',
      options: {
        list: [
          { value: 'x-low', title: 'Extra low' },
          { value: 'low', title: 'Low' },
          { value: 'medium', title: 'Medium' },
          { value: 'high', title: 'High' },
          { value: 'x-high', title: 'Extra high' },
          { value: 'default', title: 'Default' },
        ],
      },
    },
    {
      name: 'rate',
      type: 'string',
      title: 'Rate',
      description: 'A change in the speaking rate for the contained text',
      options: {
        list: [
          { value: 'x-slow', title: 'Extra slow' },
          { value: 'slow', title: 'Slow' },
          { value: 'medium', title: 'Medium' },
          { value: 'fast', title: 'Fast' },
          { value: 'x-fast', title: 'Extra fast' },
          { value: 'default', title: 'Default' },
        ],
      },
    },
    {
      name: 'volume',
      type: 'string',
      title: 'Volume',
      description: 'The volume for the contained text.',
      options: {
        list: [
          { value: 'silent', title: 'Silent' },
          { value: 'x-soft', title: 'Extra soft' },
          { value: 'medium', title: 'Medium' },
          { value: 'loud', title: 'Loud' },
          { value: 'x-loud', title: 'Extra loud' },
          { value: 'default', title: 'Default' },
        ],
      },
    },
  ],
  blockEditor: {
    icon: () => '🔊',
    render: ({ children, volume }) => (
      <span>
        {children} {['x-loud', 'loud'].includes(volume) ? '🔊' : '🔈'}
      </span>
    ),
  },
};
