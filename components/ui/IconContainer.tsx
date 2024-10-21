//! @license MIT https://github.com/fuma-nama/fumadocs/blob/bf6b6e3ae18aa8eb351cd8eb65987d48ef010069/apps/docs/components/ui/icon.tsx

import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";
import { TerminalIcon } from "lucide-react";
import type { ElementType, HTMLAttributes } from "react";

export function IconContainer({
  icon: Icon,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon | ElementType;
}): React.ReactElement {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-md border bg-gradient-to-b from-fd-secondary p-1 shadow-sm",
        props.className,
      )}
    >
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}
