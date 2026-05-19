import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Image = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polygon points="21 15 16 10 5 21" />
      </IconBase>
    );
  }
);

Image.displayName = 'Image';
