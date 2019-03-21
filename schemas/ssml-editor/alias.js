import React from 'react'
export default {
  name: 'alias',
  type: 'object',
  title: 'Alias (sub)',
  description: `Replaces the contained text for pronunciation.
    This allows a document to contain both a spoken and written form.`,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Replacement text',
    },
  ],
  blockEditor: {
    icon: () => '🔤',
    render: ({ children }) => <span>{children} 🔤</span>,
  },
};
