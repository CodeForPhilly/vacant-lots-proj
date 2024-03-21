import { TextContentLayout } from "../layout";

export const metadata = {
  title: "Legal Disclaimer",
};

const LegalDisclaimerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default LegalDisclaimerLayout;
