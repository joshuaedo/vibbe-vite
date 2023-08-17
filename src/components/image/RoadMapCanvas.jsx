export function RoadMapCanvas() {
  return (
    <>
      <img src="./images/roadmap.png" alt="roadmap" className="section-logo" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1512"
        height="1159"
        viewBox="0 0 1512 1159"
        fill="none"
        className="absolute -left-16 -top-52 -z-10 md:z-0 lg:z-10"
      >
        <g filter="url(#filter0_d_4_81)">
          <path
            d="M1697.48 0.999641C1662.56 36.6208 1585.23 322.674 1515.48 285.998C1445.73 249.323 1331.49 593.676 1297.98 617.499C1271.81 648.102 989.293 691.726 936.483 666.499C870.469 634.965 1072.99 905.967 998.482 952.998C923.974 1000.03 734.689 988.329 696.483 952.998C658.276 917.668 508.872 599.329 405.982 682.999C303.092 766.669 179.348 481.956 77.9825 435.999C-3.10974 399.234 -46.0258 273.508 -90.5176 285.998"
            stroke="#00594C"
            strokeWidth="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4_81"
            x="-108.788"
            y="0.299805"
            width="1824.98"
            height="1157.74"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="155" />
            <feGaussianBlur stdDeviation="9" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.960784 0 0 0 0 0.984314 0 0 0 0 0.94902 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_81"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_81"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
