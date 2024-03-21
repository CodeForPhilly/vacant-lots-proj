import { TextContentLayout } from "../layout";

export const metadata = {
  title: "About",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default AboutLayout;
