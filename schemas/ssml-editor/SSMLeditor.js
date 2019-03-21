import React, { Fragment } from 'react';
import { BlockEditor } from 'part:@sanity/form-builder';
import PreviewButton from './PreviewButton';

export default function SSMLeditor(props) {
  return (
    <Fragment>
      <BlockEditor {...props} />
      <PreviewButton blocks={props.value} />
    </Fragment>
  );
}
