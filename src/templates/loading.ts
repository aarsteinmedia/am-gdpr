const loading = /* HTML */ `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    stroke="currentcolor"
  >
    <style>
      @keyframes spinner_zKoa {
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes spinner_YpZS {
        0% {
          stroke-dasharray: 0 150;
          stroke-dashoffset: 0;
        }
        47.5% {
          stroke-dasharray: 42 150;
          stroke-dashoffset: -16;
        }
        95%,
        to {
          stroke-dasharray: 42 150;
          stroke-dashoffset: -59;
        }
      }
    </style>
    <g style="transform-origin:center;animation:spinner_zKoa 2s linear infinite">
      <circle
        cx="11"
        cy="11"
        r="9.5"
        fill="none"
        stroke-width="3"
        style="stroke-linecap:round;animation:spinner_YpZS 1.5s ease-in-out infinite"
      />
    </g>
  </svg>
`

export default loading
