export const metadata = {
  title: "Programa - Jornadas de Ciberseguridad",
  description: "Ciberdefensa y Seguridad Nacional",
};

import PageIllustration from "@/components/page-illustration";
import Programa from "@/components/programa";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Programa />
     
      {/* <Workflows /> */}
     
      {/* <Features /> */}
    
      {/* <Testimonials /> */}
    
      {/* <Cta /> */}
    </>
  );
}
