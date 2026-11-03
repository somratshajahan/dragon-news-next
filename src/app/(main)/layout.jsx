import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import BreakingNews from "@/components/BreakingNews";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const MainLayoutPage = ({ children }) => (
  <div>
    <Header />
    <BreakingNews></BreakingNews>
    <Navbar />
    {children}
  </div>
);

export default MainLayoutPage;
