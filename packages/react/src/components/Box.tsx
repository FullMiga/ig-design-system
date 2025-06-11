import { styled } from "../styles";

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray700",
  width: "100%",
  maxWidth: "$40",
  fontFamily: "$default",
  color: "$white",
});

Box.displayName = "Box";
