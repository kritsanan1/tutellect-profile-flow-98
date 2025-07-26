
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccountPage from "@/components/account/AccountPage";

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <AccountPage />
      </main>
      <Footer />
    </div>
  );
}
