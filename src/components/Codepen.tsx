import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Codepen = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" /><polyline points="2 15.5 12 9 22 15.5" /><polyline points="2 8.5 12 15 22 8.5" /><line x1="12" y1="2" x2="12" y2="9" /><line x1="12" y1="15" x2="12" y2="22" />
      </IconBase>
    );
  }
);

Codepen.displayName = 'Codepen';
