import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Play = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="5 3 19 12 5 21 5 3" />
      </IconBase>
    );
  }
);

Play.displayName = 'Play';
