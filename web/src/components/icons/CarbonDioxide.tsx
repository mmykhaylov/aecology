import React from 'react';
import PropTypes from 'prop-types';

function CarbonDioxide({ fill, size }: { fill: string; size: number }) {
  return (
    <svg
      height={size}
      viewBox="0 0 512.063 512.063"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M205.066 448.682c30.416-19.896 30.78-64.373.74-84.781-6.84-4.645-16.148-2.868-20.794 3.971s-2.868 16.148 3.971 20.794c12.417 8.436 12.277 26.734-.304 34.965-30.425 19.901-30.786 65.368-.74 85.779 6.841 4.646 16.149 2.866 20.794-3.971 4.645-6.839 2.868-16.148-3.971-20.794-12.425-8.44-12.287-27.726.304-35.963zM309.957 448.611c30.242-20.161 30.218-64.64 0-84.785-6.879-4.584-16.172-2.727-20.758 4.152-4.586 6.879-2.727 16.172 4.151 20.758 12.491 8.328 12.509 26.625 0 34.965-30.255 20.169-30.218 65.638 0 85.783 6.883 4.587 16.175 2.723 20.758-4.152 4.586-6.879 2.727-16.172-4.151-20.758-12.502-8.334-12.512-27.621 0-35.963zM414.739 448.611c30.242-20.161 30.218-64.64 0-84.785-6.879-4.584-16.172-2.727-20.758 4.152-4.586 6.879-2.727 16.172 4.151 20.758 12.491 8.328 12.509 26.625 0 34.965-30.255 20.169-30.218 65.638 0 85.783 6.883 4.587 16.175 2.723 20.758-4.152 4.586-6.879 2.727-16.172-4.151-20.758-12.502-8.334-12.512-27.621 0-35.963zM100.393 448.611c30.241-20.16 30.218-64.64 0-84.785-6.877-4.584-16.171-2.727-20.758 4.152-4.585 6.879-2.726 16.172 4.152 20.758 12.489 8.326 12.51 26.625 0 34.965-30.255 20.169-30.218 65.637 0 85.783 6.878 4.584 16.172 2.727 20.758-4.152 4.585-6.879 2.726-16.172-4.152-20.758-12.501-8.333-12.513-27.621 0-35.963zM450.476 129.831c-2.563-55.516-48.526-99.894-104.664-99.894-15.778 0-31.185 3.513-45.231 10.242C277.987 14.809 245.429 0 211.093 0c-66.03 0-119.75 53.72-119.75 119.75 0 .357.016.715.019 1.072-50.41 7.25-90.83 51.322-90.83 104.708 0 57.776 47.452 104.781 105.779 104.781h299.375c58.326 0 105.779-47.005 105.779-104.781.002-42.698-25.807-78.978-60.989-95.699zm-44.788 170.542H106.312c-41.82 0-75.842-33.575-75.842-74.844 0-41.11 34.732-75.842 75.842-75.842 22.737 0 43.977 10.161 58.276 27.878 5.192 6.433 14.617 7.438 21.05 2.246 6.434-5.192 7.438-14.617 2.246-21.05-16.831-20.852-40.538-34.221-66.585-37.945-.004-.355-.019-.711-.019-1.066 0-49.523 40.29-89.813 89.813-89.813 29.169 0 56.634 14.256 73.468 38.136 4.643 6.587 13.668 8.315 20.414 3.911 12.141-7.923 26.262-12.111 40.837-12.111 36.456 0 66.889 26.205 73.497 60.765-4.487-.587-9.033-.89-13.622-.89-31.83 0-61.561 14.219-81.573 39.012-5.192 6.433-4.187 15.857 2.245 21.049 6.434 5.192 15.857 4.188 21.05-2.245 14.301-17.717 35.542-27.878 58.277-27.878 41.11 0 75.842 34.732 75.842 75.842.001 41.27-34.022 74.845-75.84 74.845z"
        fill={fill}
      />
    </svg>
  );
}

CarbonDioxide.propTypes = {
  fill: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default CarbonDioxide;
