export const metadata = {
  title: "Jornadas de Ciberseguridad",
  description: "Ciberdefensa y Seguridad Nacional",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
    <div className="bg-[url('/imgages/background_vector.svg')]">

<PageIllustration />
      <Hero />
      <Workflows />
      {/* <Features /> */}
      <Testimonials />
      {/* <Cta /> */}
    </div>
      
    </>
  );
}
