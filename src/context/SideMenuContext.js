import React, { createContext, useContext, useState } from 'react';

const SideMenuContext = createContext();

const useSideMenu = () => {
  return useContext(SideMenuContext);
};

const ProvideSideMenu = ({ children }) => {
  const sideMenu = useProvideSideMenu();
  return <SideMenuContext.Provider value={sideMenu}>{children}</SideMenuContext.Provider>;
};

const useProvideSideMenu = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const openSideMenu = () => {
    setSideMenu(true);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  return {
    sideMenu,
    openSideMenu,
    closeSideMenu,
  };
};

const SideMenuContainer = () => {
  let sideMenu = useSideMenu();

  return (
    <div class="bg-light border-right" id="sidebar-wrapper" style={{ width: '100px' }}>
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Dashboard
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Shortcuts
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Overview
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Events
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Profile
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          Status
        </a>
      </div>
    </div>
  );
};

export { SideMenuContainer, useSideMenu, SideMenuContext, ProvideSideMenu };
