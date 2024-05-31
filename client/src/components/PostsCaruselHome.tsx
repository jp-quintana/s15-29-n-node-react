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
import Image from "next/image"
import User from "./icons/User"

export default function PostsCaruselHome() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
   
  

    let portadas = [

        {url:"/pruevasIMG/auto.jpg",
        titulo:"Oportunidad imperdible Toyota Hilux",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'activa',
         estadopost:false,
        },

        {url:"/pruevasIMG/barco.jpg",
        titulo:"Oportunidad de un barco super rápido",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'próximamente',
         estadopost:true,
        },

        {url:"/pruevasIMG/casa.jpg",
        titulo:"Casa de dos pisos para tres familias",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'próximamente',
         estadopost:true,
        },

        {url:"/pruevasIMG/excavator.jpg",
        titulo:"Especial de equipos viales",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'finalizada',
         estadopost:false,
        },

        {url:"/pruevasIMG/tractor.jpg",
        titulo:"Oportunidad de Jon Deer",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'activa',
         estadopost:true,
        },

        {url:"/pruevasIMG/auto.jpg",
        titulo:"Oportunidad imperdible Toyota Hilux",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'activa',
         estadopost:false,
        },

        {url:"/pruevasIMG/barco.jpg",
        titulo:"Oportunidad de un barco super rápido",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'próximamente',
         estadopost:true,
        },

        {url:"/pruevasIMG/casa.jpg",
        titulo:"Casa de dos pisos para tres familias",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'próximamente',
         estadopost:true,
        },

        {url:"/pruevasIMG/excavator.jpg",
        titulo:"Especial de equipos viales",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'finalizada',
         estadopost:false,
        },

        {url:"/pruevasIMG/tractor.jpg",
        titulo:"Oportunidad de Jon Deer",
         dueño: "BidBit",
         fecha:{
          inicio:'10/6/24, 12:00',
          fin:'24/6/24, 16:00'
         },
         estadosubasta:'activa',
         estadopost:true,
        },
    ] 

    //styles de los estados de post
    
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
      <div  className="flex flex-col relative max-w-[1200px] mx-auto mt-28 gap-10  " >
        <ul className="flex gap-10 border-b-2  max-lg:mx-3 max-sm:gap-3 flex-wrap">
            <li style={
              {
                borderBottom: "2px #d42b42 solid"
              }
            }>Todos los eventos</li>
            <li>Subasta</li>
            <li>Compra directa</li>
            <li>Judicial</li>
            
        </ul>
        <section className="flex justify-between  max-lg:mx-2">
            <h6 className="font-semibold text-gray-400" >Destacados del dia</h6>
            <Link href={'/'} className="text-purple-500">Ver todos los eventos</Link> 
        </section>

        <Carousel opts={{
          align:'start',
          }} className="w-full mx-auto max-w-6xl  p-4">
       
        <CarouselContent>
            {portadas.map((item,index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                 <div className="shadow-lg">
                  <picture className="relative">
                    <Image src={item.url} alt={item.titulo} width={400} height={400} className="rounded-t-xl w-full" />
                    <span className={`
                    text-xs absolute top-2 left-2 bg-[#d42b42] py-1 px-2 rounded-full text-amber-50` }
                    style={
                    {  backgroundColor: item.estadosubasta==='finalizada' ? '#18208d' : '#d42b42'
                      
                     
                    }  
                    }>{item.estadosubasta.toUpperCase()}</span>
                  </picture>
                  <div className="flex flex-col gap-[6px] text-black bg-white p-3 rounded-b-xl h-56">
                    <section className="flex gap-1">
                      <User/>
                      <h6 className="text-gray-500 font-medium">{item.dueño}</h6>
                    </section>
                    <h3 className="font-medium">{item.titulo}</h3>
                    
                    <section>
                    <div className="flex justify-between mb-2">
                      <p className="bg-red-600 rounded-md text-white p-1 text-xs ">INICIO</p>
                      <p className="bg-green-600 rounded-md text-white p-1 text-xs">{item.fecha.inicio}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="bg-red-600 rounded-md text-white p-1 text-xs ">FIN</p>
                      <p className="bg-green-600 rounded-md text-white p-1 text-xs">{item.fecha.fin}</p>
                    </div>

                    </section>

                    <div className="w-full  flex items-stretch mt-auto text-center">
                    {item.estadopost ? <p className="mx-auto pb-3">En Loteo</p> :
                     <Link href={'/'} className="bg-red-500 text-white w-full py-2 hover:bg-black rounded-sm">Ver Subasta</Link>}
                    </div>                    
                  </div>
                 </div>
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
