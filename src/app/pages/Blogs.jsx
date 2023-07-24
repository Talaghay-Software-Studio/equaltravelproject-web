import Layout from "./Layout";
import ComingSoon from "./ComingSoon";

export default function Blogs() {
  return (
    <Layout topMargin={false} appBarStyle={"primary"}>
      <ComingSoon />
    </Layout>
  );
}
