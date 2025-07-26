
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DashboardComponent from "@/components/dashboard/Dashboard";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <DashboardComponent />
      </main>
      <Footer />
    </div>
  );
}
