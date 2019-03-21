import React from 'react'
export default {
  name: 'sayAs',
  type: 'object',
  title: 'Say as...',
  description: `Lets you indicate information about the type of
  text construct that is contained within the element.
  It also helps specify the level of detail for rendering
  the contained text.`,
  fields: [
    {
      name: 'interpretAs',
      type: 'string',
      title: 'Interpret as...',
      options: {
        list: [
          { value: 'cardinal', title: 'Cardinal numbers' },
          {
            value: 'ordinal',
            title: 'Ordinal numbers (1st, 2nd, 3th...)',
          },
          { value: 'characters', title: 'Spell out characters' },
          { value: 'fraction', title: 'Say numbers as fractions' },
          { value: 'expletive', title: 'Blip out this word' },
          {
            value: 'unit',
            title: 'Adapt unit to singular or plural',
          },
          {
            value: 'verbatim',
            title: 'Spell out letter by letter (verbatim)',
          },
          { value: 'date', title: 'Say as a date' },
          { value: 'telephone', title: 'Say as a telephone number' },
        ],
      },
    },
    {
      name: 'date',
      type: 'object',
      title: 'Date',
      fields: [
        {
          name: 'format',
          type: 'string',
          description: `The format attribute is a sequence of date field character codes. Supported field character codes in format are {y, m, d} for year, month, and day (of the month) respectively. If the field code appears once for year, month, or day then the number of digits expected are 4, 2, and 2 respectively. If the field code is repeated then the number of expected digits is the number of times the code is repeated. Fields in the date text may be separated by punctuation and/or spaces.`,
        },
        {
          name: 'detail',
          type: 'number',
          validation: Rule =>
            Rule.required()
              .min(0)
              .max(2),
          description: `The detail attribute controls the spoken form of the date. For detail='1' only the day fields and one of month or year fields are required, although both may be supplied`,
        },
      ],
    },
  ],
  blockEditor: {
    icon: () => '🗣',
    render: props => <span>{props.children} 🗣</span>,
  },
};
