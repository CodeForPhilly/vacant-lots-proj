import { TextContentLayout } from "../layout";

export const metadata = {
  title: "Transform a Property",
};

const TransformPropertyLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <TextContentLayout>{children}</TextContentLayout>
    </>
  );
};
export default TransformPropertyLayout;
