import React from 'react';
import s from './index.module.scss';

function Logo({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="511.148"
      height="511.148"
      viewBox="0 0 511.148 511.148"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <path
        className={s.path}
        d="M255.574,46.6a117.2,117.2,0,0,1,114.8,94.35l6.389,31.947,32.586,2.343a63.542,63.542,0,0,1-4.685,126.935H127.787a85.127,85.127,0,0,1-9.371-169.744l22.789-2.343,10.649-20.233A116.472,116.472,0,0,1,255.574,46.6m0-42.6A159.641,159.641,0,0,0,113.943,90.043a127.735,127.735,0,0,0,13.844,254.722H404.659A106.528,106.528,0,0,0,511.148,238.276c0-56.226-43.661-101.8-99.035-105.637A159.517,159.517,0,0,0,255.574,4Z"
        transform="translate(0 81.191)"
      />
    </svg>
  );
}

export default Logo;
