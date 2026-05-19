import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CaretDown = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="6 10 12 16 18 10" />
      </IconBase>
    );
  }
);

CaretDown.displayName = 'CaretDown';
