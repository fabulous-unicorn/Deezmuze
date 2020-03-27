import React from 'react';
import { Icon } from '../index';

const Mix = (props) => {
  const { size, ...rest } = props;
  const iconSize = IconSize[size];
  return (
  <svg
    width={iconSize}
    height={iconSize}
    viewBox="0 0 40 40"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M34.9655 32.4927H12.488V39.1007C11.5254 40.1173 10.7189 40.2737 10.0685 39.5699L0.585795 31.4761C0.19556 31.059 0.000442505 30.5637 0.000442505 29.9902C0.000442505 29.4167 0.19556 28.9215 0.585795 28.5044L10.0685 20.4106C10.7189 19.7067 11.5254 19.8762 12.488 20.9189V27.4878H32.468C33.1444 27.4878 33.7297 27.2467 34.224 26.7644C34.7183 26.2822 34.9655 25.6892 34.9655 24.9853V19.9804C34.9655 19.3027 35.2061 18.7162 35.6874 18.2209C36.1687 17.7256 36.7541 17.478 37.4435 17.478C38.1329 17.478 38.7247 17.7256 39.219 18.2209C39.7133 18.7162 39.9605 19.3027 39.9605 19.9804V27.4878C39.9605 28.8693 39.4727 30.0489 38.4971 31.0264C37.5215 32.0039 36.3443 32.4927 34.9655 32.4927ZM29.8924 19.5894C29.242 20.2933 28.4355 20.1238 27.473 19.0811V12.4731H7.49295C6.79053 12.4731 6.19867 12.7208 5.71738 13.216C5.23609 13.7113 4.99545 14.2978 4.99545 14.9756V19.9804C4.99545 20.6843 4.7483 21.2773 4.254 21.7595C3.7597 22.2418 3.16785 22.4829 2.47843 22.4829C1.78902 22.4829 1.20367 22.2418 0.722377 21.7595C0.241087 21.2773 0.000442505 20.6843 0.000442505 19.9804V12.4731C0.000442505 11.0916 0.488236 9.91202 1.46382 8.93451C2.43941 7.95699 3.61662 7.46823 4.99545 7.46823H27.473V0.899315C28.4355 -0.117302 29.242 -0.273705 29.8924 0.430107L39.3751 8.52395C39.7654 8.94102 39.9605 9.4363 39.9605 10.0098C39.9605 10.5833 39.7654 11.0785 39.3751 11.4956L29.8924 19.5894Z"
        fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0">
        <path
          d="M0 0H40V40H0V0Z"
          fill="currentColor"/>
      </clipPath>
    </defs>
  </svg>
  );
}

export default (props) => {
  return <Icon {...props}><Mix {...props}/></Icon>;
};

const IconSize = {
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 60,
  logo: 50,
  big: 80
}

