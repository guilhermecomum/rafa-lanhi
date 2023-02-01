import React, { Ref, PropsWithChildren } from "react";
import { cx } from "~/utils";

interface BaseProps {
  className: string;
  [key: string]: unknown;
}
type OrNull<T> = T | null;

const Icon = React.forwardRef(
  (
    { className, ...props }: PropsWithChildren<BaseProps>,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx("font-icon text-2xl material-symbols-outlined", className)}
    />
  )
);

const Button = React.forwardRef(
  (
    {
      className,
      active,
      reversed,
      ...props
    }: PropsWithChildren<
      {
        active: boolean;
        reversed: boolean;
      } & BaseProps
    >,
    ref: Ref<OrNull<HTMLSpanElement>>
  ) => (
    <span
      {...props}
      ref={ref}
      className={cx(
        className,
        `cursor-pointer flex justify-center items-center ${
          reversed
            ? active
              ? "text-white"
              : "text-black"
            : active
            ? "text-gray"
            : "text-gray-400"
        }`
      )}
    />
  )
);

export { Icon, Button };
