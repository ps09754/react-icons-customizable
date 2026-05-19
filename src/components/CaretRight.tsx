import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CaretRight = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="10 6 16 12 10 18" />
      </IconBase>
    );
  }
);

CaretRight.displayName = 'CaretRight';
