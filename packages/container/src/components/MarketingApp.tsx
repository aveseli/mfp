import { mount } from "marketing/MarketingApp";
import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    console.log("calling mount", ref.current)
    const { onParentNavigate, unmount } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname }: any) => {
        if (history.location.pathname !== pathname) {
          history.push(pathname);
        }
      },
    });

    history.listen(onParentNavigate);

    return () => {
      unmount();
    };
  }, []);

  return <div ref={ref}></div>;
};
