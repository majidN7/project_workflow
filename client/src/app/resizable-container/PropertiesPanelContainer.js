 

import React, { forwardRef, useCallback } from 'react';

import ResizableContainer from './ResizableContainer';

import * as css from './PropertiesPanelContainer.less';

export const MIN_WIDTH = 280;
export const MAX_WIDTH = MIN_WIDTH * 3;

export const DEFAULT_OPEN = false;
export const DEFAULT_WIDTH = 280;

export const DEFAULT_LAYOUT = {
  open: DEFAULT_OPEN,
  width: DEFAULT_WIDTH
};

export default forwardRef(function PropertiesPanelContainer(props, ref) {
  const {
    layout,
    onLayoutChanged
  } = props;

  const onResized = useCallback(({ open, width }) => {
    onLayoutChanged({
      propertiesPanel: {
        ...layout.propertiesPanel,
        open,
        width
      }
    });
  }, [ onLayoutChanged, layout ]);

  const { propertiesPanel = DEFAULT_LAYOUT } = layout;

  const {
    open = DEFAULT_OPEN,
    width = DEFAULT_WIDTH
  } = propertiesPanel;

  return (
    <ResizableContainer
      className={ `${css.PropertiesPanelContainer} properties` }
      direction="left"
      open={ open }
      width={ width }
      minWidth={ MIN_WIDTH }
      maxWidth={ MAX_WIDTH }
      onResized={ onResized }
    >
      <div className="properties-container" ref={ ref } />
    </ResizableContainer>
  );
});
