import { styled } from "@mui/system";
import InputUnstyled from "@mui/base/InputUnstyled";

const black = { 100: `#000` };
const white = { 100: `#fff` };
const StyledInputElement = styled("input")(
  ({ theme }) => `
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === "dark" ? black[100] : white[100]};
    background: ${theme.palette.mode === "dark" ? "" : black[100]};
    border: 0px solid ${
      theme.palette.mode === "dark" ? black[100] : black[100]
    };
    border-radius: 0px;
    transition: all 150ms ease;
  
    &:hover {
      background: ${theme.palette.mode === "dark" ? black[100] : black[100]};
      border-color: ${theme.palette.mode === "dark" ? black[100] : black[100]};
    }
  
    &:focus {
      outline: 0px solid ${
        theme.palette.mode === "dark" ? black[100] : black[100]
      };
      outline-offset: 0px;
    }
  `
);

export default function Input({ placeholder, type }) {
  return (
    <span style={{ width: `95%`, border: `0px solid red`, padding: `2%` }}>
      <InputUnstyled
        components={{ Input: StyledInputElement }}
        placeholder={placeholder}
        type={type}
      />
    </span>
  );
}
