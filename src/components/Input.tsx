import classnames from "classnames";

export function Input(props: React.ComponentPropsWithoutRef<"input">) {
  const { className, ...otherProps } = props;
  return (
    <input
      className={classnames(
        "rounded border border-primary-500 bg-gray-100/20 px-4 py-2 outline-offset-2 outline-primary-400 focus:outline dark:text-gray-50 dark:placeholder-gray-300",
        className
      )}
      {...otherProps}
    />
  );
}
