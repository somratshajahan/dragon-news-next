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
