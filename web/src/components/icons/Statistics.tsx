import React from 'react';
import PropTypes from 'prop-types';

function Statistics({ fill, size }: { fill: string; size: number }) {
  return (
    <svg
      height={size}
      viewBox="0 0 512.063 512.063"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M497 181h-17V76c0-8.284-6.716-15-15-15s-15 6.716-15 15v105h-30v-75c0-8.284-6.716-15-15-15s-15 6.716-15 15v75h-30v-45c0-8.284-6.716-15-15-15s-15 6.716-15 15v45h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15h182c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        fill={fill}
      />
      <path
        d="M465 241H270V46c0-8.284-6.716-15-15-15-92.013 0-173.907 55.575-208.287 139.76l-14.715-4.905c-7.853-2.618-16.354 1.628-18.974 9.489C4.382 201.28 0 228.417 0 256c0 90.108 47.014 170.658 119.821 216.259 7.009 4.39 16.281 2.28 20.682-4.762l8.215-13.143C181.276 471.824 217.718 481 255 481c124.351 0 225-100.633 225-225 0-8.284-6.716-15-15-15zM240 61.571v173.618l-164.761-54.92C103.545 112.929 167.11 67.131 240 61.571zm-116.72 376.88C64.601 396.14 30 328.994 30 256c0-19.293 2.425-38.331 7.222-56.781l194.961 64.987zM255 451c-31.647 0-62.585-7.625-90.341-22.152L263.314 271h186.115C441.744 371.542 357.477 451 255 451z"
        fill={fill}
      />
    </svg>
  );
}

Statistics.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Statistics;