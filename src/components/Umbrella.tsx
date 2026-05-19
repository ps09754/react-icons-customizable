import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Umbrella = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M23 12a11.02 11.02 0 0 0-22 0zm-11 0v9a2 2 0 0 1-4 0" />
      </IconBase>
    );
  }
);

Umbrella.displayName = 'Umbrella';
