 

import React from 'react';

import classnames from 'classnames';

import { Fill } from '../../slot-fill';

import DesignIcon from '../../../../resources/icons/Design.svg';
import ValidateIcon from '../../../../resources/icons/Validate.svg';

import { FORM_PREVIEW_TRIGGER } from './FormEditor';

import * as css from './FormPreviewToggle.less';


export function FormPreviewToggle(props) {

  const {
    onCollapsePreview,
    onOpenPreview,
    previewOpen
  } = props;

  const handleCollapse = () => {
    onCollapsePreview({
      triggeredBy: FORM_PREVIEW_TRIGGER.STATUS_BAR
    });
  };

  const handleOpen = () => {
    onOpenPreview({
      triggeredBy: FORM_PREVIEW_TRIGGER.STATUS_BAR
    });
  };

  return <Fill slot="status-bar__app" group="1_form-preview">
    <div className={ classnames(css.FormPreviewToggle) }>
      <button
        className={ classnames('btn', { 'btn--active': !previewOpen }) }
        title="Open design mode"
        onClick={ handleCollapse }
      >
        <DesignIcon /> Design
      </button>
      <button
        className={ classnames('btn', { 'btn--active': previewOpen }) }
        title="Open validation mode"
        onClick={ handleOpen }
      >
        <ValidateIcon /> Validate
      </button>
    </div>
  </Fill>;
}
