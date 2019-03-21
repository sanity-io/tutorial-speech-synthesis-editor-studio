export default {
  name: 'fulfillment',
  type: 'document',
  title: 'Fulfillment',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be short and descriptive',
    },
    {
      name: 'response',
      title: 'Response',
      type: 'speech',
    },
  ],
};
