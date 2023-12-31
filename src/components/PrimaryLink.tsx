import classnames from "classnames";
import Link, { type LinkProps } from "next/link";
import React from "react";

export function PrimaryLink(
  props: LinkProps & { children: React.ReactNode; className?: string }
) {
  return (
    <Link
      {...props}
      className={classnames("hover:text-primary-400", props.className)}
    >
      {props.children}
    </Link>
  );
}
