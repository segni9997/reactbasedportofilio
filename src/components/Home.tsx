import "../styles/styles.css";
import segni from "../styles/segni2.png";
import { NavBar } from "./pages/NavBar";

export const Home = () => {
  const colorfulSquares = [
    { width: 20, height: 16, bg: "bg-bg-ter", top: 32, left: 20 },
    { width: 16, height: 16, bg: "bg-bg-sec", top: 10, right: 10 },
    { width: 24, height: 24, bg: "bg-bg-fth", top: -20, left: 20 },
    { width: 10, height: 10, bg: "bg-bg-ter", top: 32, right: 32 },
    { width: 12, height: 12, bg: "bg-bg-fou", top: 48, left: 16 },
    { width: 18, height: 18, bg: "bg-bg-ter", top: -24, right: 8 },
    { width: 20, height: 20, bg: "bg-bg-fth", top: 72, left: 24 },
    { width: 14, height: 14, bg: "bg-bg-ter", top: 56, left: 56 },
    { width: 16, height: 16, bg: "bg-bg-sec", top: 28, left: 40 },
    { width: 22, height: 22, bg: "bg-bg-fth", top: -12, left: 48 },
    { width: 12, height: 12, bg: "bg-bg-ter", top: 20, right: 24 },
    { width: 14, height: 14, bg: "bg-bg-fou", top: 68, left: 8 },
    { width: 18, height: 18, bg: "bg-bg-sec", top: -16, right: 16 },
    { width: 20, height: 20, bg: "bg-bg-fth", top: 80, left: 48 },
  ];

  return (
    <>
      <div className="relative h-[1000px] w-full flex items-center justify-center">
      {colorfulSquares.map((square) => (
          <div
            className={`w-${square.width} h-${square.height} ${square.bg} rotate-45 transform absolute top-${square.top} left-${square.left}`}
          />
        ))}

        <div className="absolute top-14 w-full h-[700px] flex items-center justify-center p-4 sm:p-8">
          <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
          

            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center p-4 sm:mt-14">
              <div className="w-[300px] sm:w-[400px] md:w-[550px] h-[600px] sm:mt-16 sm:h-[350px] flex items-center justify-center">
                <img
                  src={segni}

                  className="rounded-full shadow-2xl object-contain bg-transparent w-full h-full   shadow-bg-sec bg-gradient-to-l from-bg-ter to-bg-sec  "
                  alt="Segni"
               
                />
              </div>
            </div>
              {/* Text Section */}
              <div className="flex-1 p-4">
              <div className=" p-6 rounded-lg shadow-lg  text-center w-full max-w-2xl bg-transparent">
                <h2 className="t font-semibold  font-pri text-2xl text-bg-sec">About Me</h2>
                <p className=" mt-2 text-bg-ter font-serif">
                  Hi, I'm Segni Asrat, a dedicated web and software developer with a solid foundation in creating dynamic and responsive applications. With a degree in Computer Engineering from Dilla University, I have honed my skills in various programming languages and development frameworks. I'm passionate about designing and building innovative solutions that make a real impact. Let's create something remarkable together!
                  <button className="border-2 border-bg-sec rounded-full p-2 hover:bg-bg-sec hover:text-white hover:scale-110 duration-500 ">Download CV</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bg-ter w-full m-0 foot rounded-sm">
        <NavBar />
      </div>
    </>
  );
};
