"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const CarouselProductImages = ({
  className,
}: {
  className?: string;
}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const data = Array.from({ length: 10 });

  return (
    <div className={className}>
      <Carousel setApi={setApi} className='mx-auto max-w-lg h-full w-full'>
        <CarouselContent className='h-full'>
          {data.map((_, index) => (
            <CarouselItem key={index}>
              <Card className=''>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-6' />
        <CarouselNext className='right-6' />
      </Carousel>
      <div className='bottom-2 inset-x-1 absolute text-center text-sm text-muted-foreground text-black mx-auto'>
        Images {current} of {count}
      </div>
    </div>
  );
};
export default CarouselProductImages;
