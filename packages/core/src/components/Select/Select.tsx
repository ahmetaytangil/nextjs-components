import clsx from "clsx";
import React from "react";
import { useFocusRing, useId } from "react-aria";

import ThemeContext from "../../contexts/IconSizeContext/IconSizeContext";
import ChevronDown from "../../icons/ChevronDown";
import Label from "../Label/Label";
import styles from "./Select.module.css";

type BaseProps = Omit<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >,
  "size" | "prefix" | "suffix"
>;

interface Props extends BaseProps {
  size?: "small" | "large";
  disabled?: boolean;
  placeholder?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  label?: string;
}

const Select: React.FC<Props> = ({
  children,
  size,
  disabled,
  placeholder,
  prefix,
  suffix,
  label,
  ...props
}) => {
  const { isFocusVisible, focusProps } = useFocusRing();
  const id = useId(props.id);
  return (
    <Label label={label} htmlFor={id}>
      <div
        className={clsx(styles.container, {
          [styles.disabled]: disabled,
        })}
      >
        {prefix && (
          <span className={styles.prefix}>
            <ThemeContext.Provider value={{ size: 18 }}>
              {prefix}
            </ThemeContext.Provider>
          </span>
        )}

        <select
          {...focusProps}
          disabled={disabled}
          className={clsx(styles.select, {
            [styles.small]: size === "small",
            [styles.large]: size === "large",
            ["focus-visible"]: isFocusVisible,
          })}
          {...props}
          id={id}
        >
          {placeholder && (
            <option value={placeholder} label={placeholder} disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        <span className={styles.suffix}>
          <ThemeContext.Provider value={{ size: 18 }}>
            {suffix || <ChevronDown />}
          </ThemeContext.Provider>
        </span>
      </div>
    </Label>
  );
};

export default Select;
