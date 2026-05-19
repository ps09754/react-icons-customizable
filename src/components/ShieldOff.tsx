import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const ShieldOff = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M19.69 14a11.9 11.9 0 0 0 .31-4V5l-8-3-3.11 1.17M4.64 4.64L3 5v5c0 6 8 10 8 10a12 12 0 0 0 5.07-5M1 1l22 22" />
      </IconBase>
    );
  }
);

ShieldOff.displayName = 'ShieldOff';
