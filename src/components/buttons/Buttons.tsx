import tw, { css, styled, TwStyle } from 'twin.macro';

type ButtonVariant = 'blue' | 'red' | 'orange' | 'green' | 'black' | 'white';

type ShadowVariant = 'small' | 'medium' | 'big';

type OutlineVariant = true | false;

interface ButtonProps {
  variant?: ButtonVariant;
  shadow?: ShadowVariant;
  filled?: OutlineVariant;
}

const containerVariants: Record<ButtonVariant, TwStyle> = {
  // className = '
  blue: tw`bg-blue-700 hover:bg-accent`,
  red: tw`bg-red-500 hover:bg-red-accent-400`,
  orange: tw`bg-yellow-400 hover:bg-yellow-300 text-primary-focus font-bold`,
  green: tw`bg-green-400 hover:bg-green-300`,
  black: tw`bg-gray-800 hover:bg-gray-700`,
  white: tw`bg-white text-primary hover:bg-blue-50`,
};

const containerShadows: Record<ShadowVariant, TwStyle> = {
  small: tw`shadow-sm`,
  medium: tw`shadow-lg`,
  big: tw`shadow-xl`,
};

export const Button = styled.button<ButtonProps>(
  css`
    ${tw`leading-3 rounded-md font-medium cursor-pointer shadow-sm py-2.5 px-7`}
    ${tw`text-white box-border text-base transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none`}
  `,
  ({ variant = 'blue' }) => containerVariants[variant],
  ({ shadow }) => containerShadows[shadow],
  ({ filled = true }) => css`
    ${filled
      ? ''
      : tw`bg-white border border-white text-gray-800 hover:bg-white hover:border-gray-400`}
  `
);
