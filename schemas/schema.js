import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import fulfillment from './fulfillment';
import speech from './ssml-editor/speech';
import { alias, emphasis, prosody, sayAs } from './ssml-editor/annotations';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    alias,
    emphasis,
    prosody,
    sayAs,
    fulfillment,
    speech,
  ]),
});
