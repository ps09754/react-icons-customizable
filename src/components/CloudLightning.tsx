import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const CloudLightning = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 8.58" /><polygon points="13 11 9 17 12 17 11 23 15 17 12 17 13 11" />
      </IconBase>
    );
  }
);

CloudLightning.displayName = 'CloudLightning';
