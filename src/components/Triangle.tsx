import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Triangle = React.forwardRef<SVGSVGElement, IconBaseProps>(
  (props, ref) => {
    return (
      <IconBase
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <polygon points="12 2 22 21 2 21" />
      </IconBase>
    );
  }
);

Triangle.displayName = 'Triangle';
