import { TextContentLayout } from "../layout";

export const metadata = {
  title: "Methodology",
};

const MethodologyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default MethodologyLayout;
