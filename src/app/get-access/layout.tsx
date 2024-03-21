import { TextContentLayout } from "../layout";

export const metadata = {
  title: "Get Access",
};

const GetAccessLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default GetAccessLayout;
