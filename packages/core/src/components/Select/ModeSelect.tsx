import clsx from "clsx";
import React from "react";
import { useFocusRing, useId } from "react-aria";

import { IconSizeContext } from "../../contexts/IconSizeContext";
import { useTheme } from "../../contexts/ThemeContext";
import ChevronUpDown from "../../icons/ChevronUpDown";
import DisplayIcon from "../../icons/DisplayIcon";
import Moon from "../../icons/Moon";
import Sun from "../../icons/Sun";
import Label from "../Label/Label";
import styles from "./Select.module.css";

const ModeSelect = () => {
  const { isFocusVisible, focusProps } = useFocusRing();
  const id = useId();
  const { selectTheme, mode } = useTheme();
  return (
    <IconSizeContext.Provider value={{ size: 16 }}>
      <Label htmlFor={id}>
        <div className={styles.container}>
          <span className={styles.prefix}>
            {mode === "dark" && <Moon />}
            {mode === "light" && <Sun />}
            {mode === "system" && <DisplayIcon />}
          </span>

          <select
            {...focusProps}
            id={id}
            className={clsx(styles.select, styles.small, {
              ["focus-visible"]: isFocusVisible,
            })}
            aria-label="Change color theme"
            onChange={(e) => {
              selectTheme(e.target.value);
            }}
            value={mode}
          >
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>

          <span className={styles.suffix}>
            <ChevronUpDown />
          </span>
        </div>
      </Label>
    </IconSizeContext.Provider>
  );
};

export default ModeSelect;
