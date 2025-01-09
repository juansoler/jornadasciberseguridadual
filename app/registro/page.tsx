export const metadata = {
  title: "Registro Jornadas de Ciberseguridad",
  description: "Ciberdefensa y Seguridad Nacional",
};

import PageIllustration from "@/components/page-illustration";
import Registro from "@/components/registro";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Registro />
     
      {/* <Workflows /> */}
     
      {/* <Features /> */}
    
      {/* <Testimonials /> */}
    
      {/* <Cta /> */}
    </>
  );
}
