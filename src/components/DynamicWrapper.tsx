/** @jsxImportSource @emotion/react */

import { css } from '@emotion/css';
import xw from 'twin.macro';
import { animationBackgroundRectangles } from './animations/backgroundAnim';
import { Header } from './Header';

export default function DynamicWrapper({ children }) {
  return (
    <div
      className={css`
        ${xw`z-0 relative `}
        background: linear-gradient(318deg, white, #1e88e5, #1e88e5, #1976d2);
        background-size: 240% 240%;
        animation: gradient-animation 20s ease infinite;
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}
    >
      <div className='flex flex-col justify-between items-center min-h-screen px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <Header />
        {children}
      </div>

      <ul
        className={css`
          ${xw`absolute top-0 left-0 overflow-hidden min-w-full min-h-full`}
          ${animationBackgroundRectangles}
        `}
      >
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
