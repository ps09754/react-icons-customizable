import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const SkipBack = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="5" x2="5" y2="19" />
      </IconBase>
    );
  }
);

SkipBack.displayName = 'SkipBack';
