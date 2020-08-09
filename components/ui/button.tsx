import tw, { css, styled, theme } from 'twin.macro'
import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
const ButtonWrapper = styled.a`
  display: inline-block;
  overflow: hidden;
  cursor: pointer;

  & {
    position: relative;
    min-width: 130px;
    padding: 0 15px;
    margin: 30px 0 0;
    border: 2px solid ${(props: any) => props.theme.colors.primary};
  }

  & .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props: any) => props.theme.colors.primary};
    transform-origin: top center;
    transform: scale3d(1, 0, 1);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover .hover {
    transform: scale3d(1, 1, 1);
    transform-origin: bottom center;
  }

  & .text {
    width: 100%;
    display: inline-block;
    position: relative;
    font: 14px/50px D-DIN-Bold, Arial, Verdana, sans-serif;
    /* color: #fff; */
    text-align: center;
    transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:hover .text {
    color: #fff;
  }
`
export type ButtonProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonWrapper {...props}>
      <div className="hover"></div>
      <span className="text">{children}</span>
    </ButtonWrapper>
  )
}
export default Button
