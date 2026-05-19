import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Twitch = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M21 2H3v16h5v4l4-4h5l5-5V2zm-2 10l-3 3h-4l-3 3v-3H7V4h12v8z" /><line x1="14" y1="6" x2="14" y2="10" /><line x1="9" y1="6" x2="9" y2="10" />
      </IconBase>
    );
  }
);

Twitch.displayName = 'Twitch';
