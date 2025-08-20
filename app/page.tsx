import AnalyticsContainer from "@/components/AnalyticsContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TextAreaContainer from "@/components/TextAreaContainer";

export default function Home() {
  return (
    <>
      <div className="bg-[#e2e8f0] min-h-screen">
        <Header />
        <div className="flex justify-center py-12 gap-4">
          <TextAreaContainer />
          <AnalyticsContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}
