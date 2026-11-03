import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import Navbar from "@/components/Navbar";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => (
  <div className={`${montserrat.className}`}>
    <Navbar />
    {children}
  </div>
);

export default AuthLayout;
