import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<Props> = ({ label, ...rest }) => (
  <ButtonStyle {...rest}>{label}</ButtonStyle>
);
