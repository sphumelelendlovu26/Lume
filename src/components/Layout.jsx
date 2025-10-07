import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const containerHeight = isHome ? "h-[300vh]" : "h-auto overflow-hidden";

  return (
    <div className={`${containerHeight} overflow-x-hidden layout`}>
      {children}
    </div>
  );
};

export default Layout;
