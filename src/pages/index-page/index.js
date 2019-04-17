import MainLayout from '~/layouts/main-layout';
import FetchHelloWorld from '~/components/fetch-hello-world';

import Heading from '~/components/core/heading';

const IndexPage = () => {
  return (
    <MainLayout>
      <Heading level={1}>hello world!</Heading>
      <Heading level={2}>hello world!</Heading>
      <Heading level={3}>hello world!</Heading>
      <Heading level={4}>hello world!</Heading>
      <FetchHelloWorld />
    </MainLayout>
  );
};

export default IndexPage;
