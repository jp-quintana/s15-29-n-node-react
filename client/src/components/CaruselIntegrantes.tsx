'use client'
import * as React from "react"
 
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { AvatarFallback, AvatarImage,Avatar } from "./ui/avatar"

export default function CaruselIntegrantes() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
  

    let portadas = [
        {url:"/pruevasIMG/naty.jpg",
        username:"Olivia Wilson",
        cargo:'CEO and Founder at Borecole',
        content:"Functional tool with lost of flexible solutions for your business. I can't recommend it enough. It has helped my business tremendously!"
        },
        {url:"/pruevasIMG/jose.jpg",
        username:"Jose Arturo Bartalama",
        cargo:'CEO and Founder at Borecole',
        content:"Functional tool with lost of flexible solutions for your business. I can't recommend it enough. It has helped my business tremendously!"
        },
        {url:"/pruevasIMG/jeison.jpg",
        username:"Jeison Torrez",
        cargo:'CEO and Founder at Borecole',
        content:"Functional tool with lost of flexible solutions for your business. I can't recommend it enough. It has helped my business tremendously!"
        }
    ] 
    React.useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])
   
    return (
      <div  className="mt-28 mx-auto relative bg-gradient-to-br from-[#0e0614] to-purple-950  
      max-w-[950px] rounded-2xl p-8 " >
        <Carousel setApi={setApi} className="">
          <CarouselContent className="max-h-[700px]">
            {portadas.map((item,index) => (
              <CarouselItem key={index} className="">
                <div className="w-full text-center">
                <span className="text-[120px] text-violet-600">&quot;</span>
                <p className="mb-4 text-2xl">{item.content}</p>
                <section className="flex flex-col items-center gap-2">
                    <Avatar>
                        <AvatarImage src={item.url} alt={item.username} className="w-28 h-28"/>
                        <AvatarFallback>
                            YC
                        </AvatarFallback>
                    </Avatar>
                    <h6 className="font-bold">{item.username}</h6>
                    <p>{item.cargo}</p>
                </section>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2"/>
          <CarouselNext className="right-2"/>
        </Carousel>
        
        
      </div>
      
    )
}
