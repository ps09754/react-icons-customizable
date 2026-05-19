import React from 'react';
import { IconBase, IconBaseProps } from './IconBase';

export const Gitlab = React.forwardRef<SVGSVGElement, IconBaseProps>(
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
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l2.87-8.83a.85.85 0 0 1 .8-.58h3.32l1.66-5.1a.86.86 0 0 1 1.63 0l1.66 5.1h3.32a.85.85 0 0 1 .8.58l2.87 8.83a.84.84 0 0 1-.3.94z" />
      </IconBase>
    );
  }
);

Gitlab.displayName = 'Gitlab';
