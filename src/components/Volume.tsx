import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Volume = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      </IconBase>
    );
  }
);

Volume.displayName = 'Volume';
