import { TextContentLayout } from "../layout";

export const metadata = {
  title: "Request Removal",
};

const RequestRemovalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default RequestRemovalLayout;
