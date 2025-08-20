import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className="bg-[#e2e8f0] min-h-screen">
        <Header />
        <Container />
      </div>
      <Footer />
    </>
  );
}
