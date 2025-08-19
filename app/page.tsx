import Header from "@/components/Header";
import TextAreaContainer from "@/components/TextAreaContainer";

export default function Home() {
  return (
    <>
      <div className="bg-[#e2e8f0] min-h-screen">
        <Header />
        <div className="flex justify-center py-12">
          <TextAreaContainer />
        </div>
      </div>
    </>
  );
}
