import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function AcordeonPreguntas() {
  // haciendo preuba 
 return (
    <div className="mx-auto w-full max-w-[900px] mt-52 ">
        <h5 className="font-extrabold text-4xl text-center mb-10">Preguntas frecuentes</h5>
        <Accordion type="multiple"  className="w-full grid grid-cols-2 gap-10 max-sm:grid-cols-1 max-lg:px-3">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Qué es BidBit?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita autem officiis commodi vero obcaecati aperiam earum odio, placeat neque! Nostrum optio culpa suscipit blanditiis magnam enim accusantium, aspernatur temporibus eos!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Como puedo ofertar?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium in cum expedita, minima fuga totam neque aspernatur enim dolor maxime adipisci tempora debitis pariatur nam perferendis iure nostrum sequi.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Qué tipo de subastas encentro en BidBIt?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>¿Cuando se realizan las subastas?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>¿Las subastas, ¿son en vivo?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>¿Cómo me entero que hay una subasta nueva?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>¿Que medios de pago puedo utilizar?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>¿Si soy el ganador de la subasta, ¿Cómo hagp para obtener el lote que gané?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>¿Debo pagar algun seguro de caución o garantía antes de ofertar?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>¿Qué pasa con el pago de la caución si no gano la subasta?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam perferendis qui, molestias, atque minima commodi saepe sequi a temporibus eveniet illum cum? Explicabo officia culpa dicta veritatis molestias ratione.
        </AccordionContent>
      </AccordionItem>

    </Accordion>
    </div>
  )

}
