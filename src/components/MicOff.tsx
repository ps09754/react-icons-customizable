import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const MicOff = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="1" y1="1" x2="23" y2="23" /><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" /><path d="M19 10v2a6.93 6.93 0 0 1-1.07 3.73M5 10v2a7 7 0 0 0 9.88 6.42" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
      </IconBase>
    );
  }
);

MicOff.displayName = 'MicOff';
