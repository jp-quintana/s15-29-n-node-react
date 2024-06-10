import MaxWidthContainer from '@/components/max-width-container';
import PurchaseDetails from '@/components/purchase/purchase-details';
import PurchaseOptions from '@/components/purchase/purchase-options';

const PurchasePage = () => {
  return (
    <MaxWidthContainer className="py-20 min-h-screen">
      <div className="flex justify-between gap-16">
        <div className="flex-1">
          <h1 className="text-lg font-bold mb-8">¿Cómo querés pagar?</h1>
          <PurchaseOptions />
        </div>
        <PurchaseDetails />
      </div>
    </MaxWidthContainer>
  );
};

export default PurchasePage;
