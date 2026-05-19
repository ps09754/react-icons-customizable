import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const WifiOff = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <line x1="1" y1="1" x2="23" y2="23" /><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" /><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" /><path d="M10.71 5.05A16 16 0 0 1 22.58 9" /><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" /><path d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /><path d="M8.5 16.5a6.5 6.5 0 0 1 7 0" />
      </IconBase>
    );
  }
);

WifiOff.displayName = 'WifiOff';
