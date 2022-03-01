import { mount } from "auth/AuthApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

type Props = {
  onSignIn: () => void;
}

export default ({ onSignIn }: Props) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate, unmount } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname }: any) => {
        if (history.location.pathname !== pathname) {
          history.push(pathname);
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
  }, [ref, history]);

  return <div ref={ref}></div>;
};
