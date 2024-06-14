'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

interface ProductCarouselProps {
  image: string;
}

const ProductCarousel = ({ image }: ProductCarouselProps) => {
  return (
    <Carousel className="w-full max-w-[400px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center">
            {/* <div className="bg-secondary h-[400px] w-full overflow-hidden" /> */}

            <Image
              src={image}
              alt="image"
              width={400}
              height={400}
              className="bg-secondary h-[400px] w-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
