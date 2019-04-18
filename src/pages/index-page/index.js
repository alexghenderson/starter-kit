import MainLayout from '~/layouts/main-layout';
import LoremIpsum from '~/components/lorem-ipsum';

import Heading from '~/components/core/heading';

const IndexPage = () => {
  return (
    <MainLayout>
      <LoremIpsum count={5}/>
    </MainLayout>
  );
};

export default IndexPage;
