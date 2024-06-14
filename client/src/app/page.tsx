import AcordeonPreguntas from '@/components/AcordeonPreguntas';
import CaruselIntegrantes from '@/components/CaruselIntegrantes';
import PostsCaruselHome from '@/components/PostsCaruselHome';
import { RegistrarPujar } from '@/components/Registrate&Puja';
import Example from '@/components/example';

const Page = () => {
  return (
    <div className="mb-40  mt-20  ">
      <RegistrarPujar/>
      <PostsCaruselHome/>
      <CaruselIntegrantes/>
      <AcordeonPreguntas/>
    </div>
  );
};

export default Page;
