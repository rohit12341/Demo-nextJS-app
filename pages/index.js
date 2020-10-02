import dynamic from "next/dynamic";

const IndexPage = dynamic(import("../components/Index/Index"));
const Layout = dynamic(import("../components/layout"));

const Index = props => {
  return (
      <Layout>
        <IndexPage {...props} />
     </Layout>
  );
};


export default Index;
