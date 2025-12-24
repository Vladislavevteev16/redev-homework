import { useRef, memo, useEffect } from "react";

export const withRenderTracker = (WrappedComponent) => {
  return memo((props) => {
    const renderCountRef = useRef(0);

    useEffect(() => {
      renderCountRef.current += 1;
      console.log(
        `${WrappedComponent.name} was rendered ${renderCountRef.current} times`
      );
    });

    return <WrappedComponent {...props} />;
  });
};
