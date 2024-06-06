import MaxWidthContainer from '@/components/max-width-container';
import PublishForm from '@/components/publish/publish-form';

const PublishPage = () => {
  return (
    <MaxWidthContainer className="py-20 min-h-screen flex flex-col space-y-4">
      <h1 className="font-bold">Publicá tu producto</h1>
      <PublishForm />
    </MaxWidthContainer>
  );
};

export default PublishPage;
