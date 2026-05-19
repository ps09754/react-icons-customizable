import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const MousePointer = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" /><line x1="13" y1="13" x2="19" y2="19" />
      </IconBase>
    );
  }
);

MousePointer.displayName = 'MousePointer';
