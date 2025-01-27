import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muestra el botón solo cuando el usuario ha bajado cierta distancia
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 1000,
    });
  };
  return (
    <footer className="px-4 pb-4 xl:px-0 xl:pb-[80px]">
      <div className=" my-6 hidden h-[1px] w-full bg-[#EEEEEE] xl:block"></div>

      <div className=" relative mx-auto max-w-[76rem] xl:flex xl:gap-[168px] xl:py-[80px]">
        <button
          onClick={scrollToTop}
          className={`absolute right-0 top-[200px] flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-black ${
            isVisible ? "visible" : "invisible"
          }`}
        >
          <img src="/Alt Arrow Up.svg" alt="Alt Arrow Up" />
        </button>
        <div className=" xl:w-[353px]">
          <h2 className=" mr-[202px] text-2xl font-bold leading-8 xl:mr-0">
            Nubes de algodón
          </h2>
          <p className=" mr-[45px] mt-4 text-lg leading-8 xl:mr-0">
            Quisque egestas ipsum vitae erat faucibus, non volutpat arcu
            faucibus. Phasellus auctor sed ligula.
          </p>
        </div>

        <div className=" xl:flex xl:gap-[88px]">
          <div className="line"></div>

          <div>
            <h3 className=" mb-4 font-medium tracking-[0.08px]">
              Acerca de Nosotros
            </h3>
            <ul>
              <li>
                <a className=" footerLinks" href="#">
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Precios
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Aulas
                </a>
              </li>
            </ul>
          </div>

          <div className="line"></div>

          <div>
            <h3 className=" mb-4 font-medium tracking-[0.08px]">Servicios</h3>
            <ul>
              <li>
                <a className=" footerLinks" href="#">
                  Cunas
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Guardería
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Jardín
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Escuela de Padres
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Taller
                </a>
              </li>
              <li>
                <a className=" footerLinks" href="#">
                  Cocina
                </a>
              </li>
            </ul>
          </div>

          <div className="line"></div>

          <div>
            <h3 className=" mb-4 font-medium tracking-[0.08px]">Síguenos</h3>
            <ul className=" mt-4 flex gap-x-3">
              <li className="rounded-full bg-black text-white">
                <a
                  href="#"
                  className="flex h-[2rem] w-[2rem] items-center justify-center"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li className="rounded-full bg-black text-white">
                <a
                  href="#"
                  className="flex h-[2rem] w-[2rem] items-center justify-center"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>

              <li className="rounded-full bg-black text-white">
                <a
                  href="#"
                  className="flex h-[2rem] w-[2rem] items-center justify-center"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="line"></div>

      <div className=" mx-auto max-w-[76rem] xl:mt-[100px] xl:flex xl:items-center xl:justify-between">
        <span className="text-[#7C858E] sm:text-center">
          Copyright © {currentYear} Kids by johnnathandesigner. All Rights
          Reserved.
        </span>
        <ul className="mt-[40px] flex items-center justify-between text-[#7C858E] xl:mt-0 xl:gap-[52px]">
          <li>
            <a href="#">Aviso legal</a>
          </li>
          <li>
            <a href="#">Política de Privacidad</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
