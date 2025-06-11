import { ComponentProps } from "@stitches/react";
import { User } from "lucide-react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayname = "Avatar";
