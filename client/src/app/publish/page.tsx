import MaxWidthContainer from '@/components/max-width-container';
import PublishCard from '@/components/publish/publish-card';

const PublishPage = () => {
  return (
    <MaxWidthContainer className="py-20 min-h-screen flex flex-col space-y-4">
      <h1 className="font-bold">Publicá tu producto</h1>
      <PublishCard />
    </MaxWidthContainer>
  );
};

export default PublishPage;
