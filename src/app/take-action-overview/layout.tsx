import { TextContentLayout } from "../layout";

export const metadata = {
  title: "Overview",
};

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default OverviewLayout;
