import Navbar from "@/components/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => (
  <div className={`${montserrat.className}`}>
    <Navbar />
    {children}
  </div>
);

export default AuthLayout;
