import { mount } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // const { unmount } = 
    mount(ref.current);

    /* return () => {
      unmount();
    }; */
  }, []);

  return <div ref={ref}></div>;
};
