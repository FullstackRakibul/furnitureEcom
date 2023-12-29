import BaseFooter from "@/components/footers/BaseFooter";
import BaseHeader from "@/components/headers/BaseHeader";
import RootLayout from "@/layouts/RootLayout";
import { NextPageWithLayout } from "@/pages/_app";

const BedroomPage: NextPageWithLayout = () => {
  return (
    <main className="h-screen flex sticky top-0 left-0">
      <aside className="bg-green-500">hello hello</aside>
      <article className="bg-orange-500 flex-1">
        <div className="h-[2000px] bg-blue-400 bg-opacity-40"></div>
      </article>
    </main>
  );
};

export default BedroomPage;

BedroomPage.getLayout = (page) => <RootLayout>{page}</RootLayout>;
