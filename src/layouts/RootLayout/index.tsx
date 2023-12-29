import BaseFooter from "@/components/footers/BaseFooter";
import BaseHeader from "@/components/headers/BaseHeader";

interface Props {
  children: React.ReactNode;
}
const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BaseHeader />
      {children}
      <BaseFooter />
    </>
  );
};

export default RootLayout;
