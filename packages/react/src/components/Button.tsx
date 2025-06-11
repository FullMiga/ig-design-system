import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  padding: "0 $4",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        color: "$white",
        backgroundColor: "$ignite500",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300",
        },

        "&:disabled": {
          opacity: 0.7,
        },
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite300",

        "&:not(:disabled):hover": {
          backgroundColor: "$ignite300",
          color: "$white",
        },

        "&:disabled": {
          opacity: 0.7,
        },
      },
      tertiary: {
        backgroundColor: "$gray100",

        "&:not(:disabled):hover": {
          backgroundColor: "$gray200",
        },

        "&:disabled": {
          opacity: 0.7,
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;

Button.displayName = "Button";
