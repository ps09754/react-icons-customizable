import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const VideoOff = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M10.66 6H14a2 2 0 0 1 2 2v3.34l5.24-3.84A1 1 0 0 1 23 8v8a1 1 0 0 1-1.76.63L16 12.8V14a2 2 0 0 1-1.34 1.9M2 2l20 20M1 5h11a2 2 0 0 1 2 2v7.5M4 19h8a2 2 0 0 0 2-2v-3" />
      </IconBase>
    );
  }
);

VideoOff.displayName = 'VideoOff';
