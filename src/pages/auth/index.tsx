import RootLayout from "@/layouts/RootLayout";
import { NextPageWithLayout } from "../_app";
const AuthPage: NextPageWithLayout = () => {
  return <div>Hello</div>;
};

export default AuthPage;

AuthPage.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
