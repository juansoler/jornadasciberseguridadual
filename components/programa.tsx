import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";
import ual from "@/public/images/ual.png";

export default function Programa() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Ciberdefensa y Seguridad Nacional
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Jornadas de Ciberseguridad
              </p>
              {/* <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Registro
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Programa
                  </a>
                </div>
              </div> */}



          
            </div>
          </div>

          <div className="pb-12 text-center md:pb-20">

            <Image
              className="inline-flex"
              src={ual}
              width={350}
              height={288}
              alt="Workflow 01"
            />
          </div>

          <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center">Programa de Jornadas</h1>
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">10:00</h2>
                    <p className="text-gray-700">Inauguración de las jornadas.</p>
                    <p className="text-gray-500">Rector Universidad de Almería. Consejero de Universidades, Investigación e Innovación (Junta de Andalucía). Subdelegado de Gobierno, Coronel Jefe de la Comandancia de Guardia Civil de Almería, Comisario Provincial de Almería.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">11:00</h2>
                    <p className="text-gray-700">Subdirector del Centro Criptológico Nacional (CCN).</p>
                    <p className="text-gray-500">Centro Nacional de Inteligencia (CNI). Los detalles de la charla (título y resumen) serán proporcionados en breve.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">11:30</h2>
                    <p className="text-gray-700">Informática Forense en el ámbito de la Ciberseguridad.</p>
                    <p className="text-gray-500">Director y cofundador de 3inLAB Informática Forense. (detalles de la ponencia).</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">12:00</h2>
                    <p className="text-gray-700">Desayuno - networking.</p>
                    <p className="text-gray-500">(detalle y lugar del desayuno)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">12:30</h2>
                    <p className="text-gray-700">Noname057, ¿Hacktivistas o ciber terroristas?</p>
                    <p className="text-gray-500">Rafael López. Perception Point. (detalle de la ponencia)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">13:00</h2>
                    <p className="text-gray-700">Operaciones Guardia Civil. Fraude grandes empresas.</p>
                    <p className="text-gray-500">Guardia Civil. Equipo @. Comandancia de Almería. (detalle de la ponencia)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">14:00</h2>
                    <p className="text-gray-700">Advertencias. Consideraciones y concienciación.</p>
                    <p className="text-gray-500">Guardia Civil. Equipo EDITE. Comandancia de Almería. (detalle de la ponencia)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">14:30 / 15:00</h2>
                    <p className="text-gray-700">Descanso.</p>
                    <p className="text-gray-500">Comida para autoridades y ponentes en el comedor vip de la universidad.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">16:30</h2>
                    <p className="text-gray-700">Francisco Hernández Guerrero. Fiscal Delegado de Criminalidad Informática de la Fiscalía Provincial de Granada.</p>
                    <p className="text-gray-500">(detalles de la charla)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">17:00</h2>
                    <p className="text-gray-700">Más allá del Bitcoin.</p>
                    <p className="text-gray-500">Comisaría Provincial de Almería. Policía Nacional. Operaciones de Policía Nacional. No se emitirá en streaming. (detalles de la charla)</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">18:00</h2>
                    <p className="text-gray-700">Descanso breve. Coffee break.</p>
                  </div>
                  <div className="border-b pb-4">
                    <h2 className="text-xl font-semibold">18:30</h2>
                    <p className="text-gray-700">Telefónica Tech.</p>
                    <p className="text-gray-500">Antonio Pérez Seronellas. (detalles de la charla)</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">19:00</h2>
                    <p className="text-gray-700">Telefónica.</p>
                    <p className="text-gray-500">Luis Pablo del Árbol (detalles de la charla)</p>
                  </div>
                </div>
              </div>
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
        </div>
      </div>
    </section>
  );
}
