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
import { url } from "inspector"
 
export function RegistrarPujar() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
  

    let portadas = [
        {url:"/pruevasIMG/portada.jpg",
        titulo:"No te pierdas las oportunidad",
         content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quasi aliquid non accusantium dolorum voluptatem provident quae, ratione ab, rerum cumque perspiciatis excepturi dolor, dolore suscipit tenetur! Amet, dolorum voluptatum?",
        },
        {url:"/pruevasIMG/portada2.jpg",
        titulo:"No te pierdas las oportunidad",
         content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quasi aliquid non accusantium dolorum voluptatem provident quae, ratione ab, rerum cumque perspiciatis excepturi dolor, dolore suscipit tenetur! Amet, dolorum voluptatum?",
        },
        {url:"/pruevasIMG/portada3.jpg",
        titulo:"No te pierdas las oportunidad",
         content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quasi aliquid non accusantium dolorum voluptatem provident quae, ratione ab, rerum cumque perspiciatis excepturi dolor, dolore suscipit tenetur! Amet, dolorum voluptatum?",
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
      <div  className="relative " >
        <Carousel setApi={setApi} className="">
          <CarouselContent className="max-h-[600px]">
            {portadas.map((item,index) => (
              <CarouselItem key={index} className="">
                <div className="w-full    bg-cover bg-center"
                 style={
                  {
                      backgroundImage:'url('+item.url+')'
                  }
                }>
                  <div className=" w-full max-w-[800px]   pt-28
                   flex aspect-square items-start justify-start flex-col gap-5 
                  p-6 mx-12 max-lg:m-0
                   "
                   >
                    <h2 className="text-[calc(1em+4vw)] font-semibold text-black tracking-tighter">{item.titulo}</h2>
                    <p className="text-[calc(5px+1vw)]  text-black">{item.content}</p>
                    <Link href={'/'} className="bg-transparent text-black border-4 p-2 rounded-md 
                    font-extrabold hover:bg-[#c157eb]">Regístrate y puja</Link>
                  </div>
                
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div  id='bolas' className="flex  justify-center absolute right-[40%] left-[40%] bottom-4   text-center text-sm text-muted-foreground">
         {Array.from({length:count}).map((_,index)=>(
            <div key={index}
            className={`w-[30px] h-[30px] mx-1 bg-white rounded-full `}
          style={{
           backgroundColor: current==index+1 ? 'black' : 'white'
          }}
            
            ></div>
         ))}
        </div>
        
      </div>
      
    )
  }