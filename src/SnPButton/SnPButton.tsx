import React, { ReactNode, forwardRef, Ref } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./SnPButton.module.scss";

type StyleKeys = keyof typeof styles;

interface ButtonProps {
  children?: React.ReactNode;
  type?: "link" | "button" | "submit";
  link?: string;
  onClick?: (e?: any) => void;
  name?: string | ReactNode;
  size?: "small" | "medium" | "large";
  color?: "white" | "dark" | "bgNone" | "bgNoneNoBorder" | "offGrey";
  className?: string;
  textAlign?: string;
}

const SnPButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const buttonClasses = classNames(
    styles.buttonStyle,
    props.color && styles[props.color as StyleKeys],
    props.textAlign && styles[props.textAlign as StyleKeys]
  );

  const linkClasses = classNames(
    styles.linkStyle,
    props.color && styles[props.color as StyleKeys]
  );
  const linkHolderClasses = classNames(
    styles.linkHolder,
    props.size && styles[props.size as StyleKeys]
  );

  const buttonHolderClasses = classNames(
    styles.btnHolder,
    props.size && styles[props.size as StyleKeys]
  );

  if (props.type === "link") {
    return (
      <div className={`${linkHolderClasses} ${props.className}`}>
        <a
          className={linkClasses}
          href={props.link}
          onClick={props.onClick}
          ref={ref as Ref<HTMLAnchorElement>}
        >
          {props.name}
        </a>
      </div>
    );
  } else if (props.type === "button") {
    return (
      <div className={`${buttonHolderClasses} ${props.className}`}>
        <button
          className={buttonClasses}
          onClick={props.onClick}
          ref={ref as Ref<HTMLButtonElement>}
        >
          {props.name}
        </button>
        {props.children}
      </div>
    );
  } else if (props.type === "submit") {
    return (
      <div className={`${buttonHolderClasses} ${props.className}`}>
        <button
          type="submit"
          className={buttonClasses}
          onClick={props.onClick}
          ref={ref as Ref<HTMLButtonElement>}
        >
          {props.name}
        </button>
        {props.children}
      </div>
    );
  }
});

// Uncomment if needed
// SnPButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   type: PropTypes.oneOf(["button", "submit", "reset"]),
//   className: PropTypes.string,
// };

export default SnPButton;
