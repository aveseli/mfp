import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate, unmount } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn: () => {
        onSignIn();
      },
    });

    history.listen(onParentNavigate);

    return () => {
      unmount();
    };
  }, []);

  return <div ref={ref}></div>;
};
