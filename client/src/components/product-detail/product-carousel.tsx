import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const ProductCarousel = () => {
  return (
    <Carousel className="w-full max-w-[400px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center">
            {/* <div className="p-1 flex justify-center"> */}
            <div className="bg-secondary h-[400px] w-full overflow-hidden" />
            {/* </div> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
