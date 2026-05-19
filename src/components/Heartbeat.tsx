import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Heartbeat = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </IconBase>
    );
  }
);

Heartbeat.displayName = 'Heartbeat';
