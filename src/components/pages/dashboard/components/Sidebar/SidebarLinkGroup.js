import React, { ReactNode, useState } from "react";

const SidebarLinkGroup = React.memo(({ children, activeCondition }) => {
  const [open, setOpen] = useState(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{children(handleClick, open)}</li>;
});

export default SidebarLinkGroup;
