import React, { ReactNode, CSSProperties, useEffect } from "react";

type Props = {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  hasContainer?: boolean;
};

export const ContainerFluid = ({
  children,
  style,
  className,
  hasContainer = true,
}: Props) => {
  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (mainElement) {
      const containerFluidElements =
        mainElement.querySelectorAll(".container-fluid");
      if (containerFluidElements.length > 0) {
        containerFluidElements[0].classList.add("large-padding-top");
        containerFluidElements[containerFluidElements.length - 1].classList.add(
          "large-padding-bottom"
        );
      }
    }
  }, []);

  return (
    <div
      className={`container-fluid ${
        hasContainer ? "py-5" : "p-0"
      } ${className}`}
      style={style}
    >
      {hasContainer ? (
        <div className="container">
          <div className="row">{children}</div>
        </div>
      ) : (
        <div className="row">{children}</div>
      )}
    </div>
  );
};
