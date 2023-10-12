import ninios from "../../public/nosotros_ninios.png";
import mision_ninio from "../../public/nosotros_mision_ninio.png"
import maestra from "../../public/nosotros_maestra.png"
import ninios_casa from "../../public/nosotros_ninio_armando_casa.png"
import playground from "../../public/nosotros_jardin_playground.png"
import juguetes from "../../public/nosotros_juguetes.png"
import tutora1 from "../../public/nosotros_tutora1.png"
import tutora2 from "../../public/nosotros_tutora2.png"
import tutora3 from "../../public/nosotros_tutora3.png"
import tutora4 from "../../public/nosotros_tutora4.png"
import tutora5 from "../../public/nosotros_tutora5.png"
import { Link } from "react-router-dom";


const Nosotros =()=>{
    return(
        <section className="overflow-x-hidden">
            <div className="w-screen m-[0px] h-[376px] bg-discos bg-cover bg-center">
                <h1 className="max-w[72rem] text-white pl-[112px] pt-[160px] w-[1050px] h-[144px] text-[58px] leading-[72px] font-normal">
                    Guardería infantil educativo desde Nubes de Algodón
                </h1>
            </div>
            <div className="flex w-232 gap-6 mt-[1rem] mx-[112px]">
                <Link className="text-black font-medium" to="/">
                    Home
                </Link>
                <p>/</p>
                <p className="text-[#7C858E]">Nosotros</p>
            </div>
            <p className="mt-[3rem] ml-[112px] w-[904px] max-w[72rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime porro, nisi architecto reprehenderit deleniti excepturi nulla perferendis dicta voluptates unde consequuntur necessitatibus? Omnis placeat explicabo dicta doloremque qui quo vitae quae ab quos minima tempore, unde fuga odit reprehenderit dolorem consequuntur deserunt quod obcaecati! Vitae blanditiis aliquid quae fugit quo qui mollitia, in excepturi eveniet iste aperiam veritatis neque illo, voluptates accusamus reprehenderit eum veniam? Inventore est beatae ullam delectus magnam, aliquam quibusdam id corporis soluta.</p>
            <img src={ninios} alt="kids playing" className="h-[440px] w-[1216px] my-[4rem] ml-[112px] " />
            <p className="max-w[72rem] ml-[736px] mb-[8rem] h-[96px] w-[592px] text-[20px] leading-[32px] font-normal">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident.</p>
            <div className="flex justify-between gap-[8rem] h-[528px] max-w[72rem] w-[1217px] ml-[117px] mb-[8rem]">
                <img src={mision_ninio} className="w-[489px] h-[528px]" alt="niño armando juguete" />
                <div className="flex flex-col justify-center gap-[3rem]">
                    <p className="text-[36px] leading-[48px] font-[500] w-[414px] h-[48px]">Nuestra Misión</p>
                    <p className="text-[20px] leading-[32px] w-[592px] h-[320px]">Es crear un entorno seguro, amoroso y estimulante donde cada niño pueda florecer. Nos comprometemos a proporcionar una educación temprana de calidad que fomente el crecimiento holístico de los pequeños. Alentando su curiosidad, creatividad y desarrollo socioemocional. Valoramos la individualidad de cada niño y trabajamos en estrecha colaboración con las familias para nutrir su potencial único. Estamos dedicados a ser un faro de aprendizaje y cuidado en la vida de cada niño que pasa por nuestras puertas.</p>
                </div>
            </div>
            <div className="max-w[72rem] flex justify-between gap-[8rem] h-[528px] max-w[72rem] w-[1216px] ml-[117px] mb-[8rem]">
                <div className="flex flex-col justify-end gap-[3rem]">
                    <p className="text-[36px] leading-[48px] font-[500] w-[414px] h-[48px]">Nuestra Visión</p>
                    <p className="w-[592px] h-[320px] text-[20px] leading-[32px]">Es ser reconocidos como líderes en la educación temprana y el cuidado infantil. Nos esforzamos por ser un espacio donde los niños encuentren inspiración, amor por el aprendizaje y confianza en sí mismos. Buscamos ser un recurso valioso para las familias, brindando apoyo, orientación y un ambiente en el que todos se sientan bienvenidos y valorados. Visualizamos un futuro en el que cada niño que ha pasado por nuestra guardería se convierta en un adulto seguro, compasivo y con una base sólida para el éxito en la vida.</p>
                </div>
                <img src={maestra} alt="maestra enseñando" />
            </div>
            <p className="max-w[72rem] w-[905px] h-[96px] text-[36px] leading-[48px] ml-[111px] mb-[8rem] ">Un espacio de aprendizaje y diversión para los pequeños de nuestra guardería</p>
            <div className=" max-w[72rem] flex h-[542px] mx-[110.5px] mb-[5rem] relative">
                <img src={ninios_casa} className="w-[801.5px] h-[504px] absolute bottom-0 left-0" alt="niños armando casa" />
                <h5 className="ml-[460.5px] z-10 text-[20px] leading-[32px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.</h5>
                <h5 className="absolute top-[250px] right-[0px] w-[357px] h-[192px] ml-[860.5px] z-10 text-[20px] leading-[32px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es.</h5>
            </div>
            <div className="h-[248px] mx-[112px] max-w[72rem] flex justify-between items-center mb-[8rem]">
                <h4 className="text-[24px] leading-[32px] w-[344px] mb-[1rem]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</h4>
                <img src={playground} className="w-[384px] h-[248px]" alt="jardin de juegos" />
                <img src={juguetes} className="w-[384px] h-[248px]" alt="jueguetes" />
            </div>
            <h2 className="text-[36px] leading-[48px] ml-[112px]">Nuestras Tutoras</h2>
            <div class="max-w-screen-xl px-5 bg-white min-h-screen">
                    <div class="flex flex-col items-center">
                    </div>
                    <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                        <div class="py-5 w-[1008px]">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src={tutora1} className="w-[176px] h-[128px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.C.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Stephany Rodríguez</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src={tutora2} className="w-[176px] h-[128px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.G.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Noemi Pérez</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src={tutora3} className="w-[176px] h-[128px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.J.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Dafne Gómez</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src={tutora4} className="w-[176px] h-[128px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.P.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Ivanna Morales</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>
                        <div class="py-5">
                            <details class="group">
                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <span className="relative">
                                        <img src={tutora5} className="w-[176px] h-[128px]" alt="tutora"/>
                                        <p className="absolute bottom-0 right-0">A.E.-</p>
                                    </span>
                                    <span className="h-[48px] text-[36px] leading-[48px]"> Lucía Ramos</span>
                                    <span class="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </details>
                        </div>	
                    </div>
                </div>
        </section>
    )
}
export { Nosotros }