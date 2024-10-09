import "../styles/styles.css";
import segni from "../styles/segni2.png";

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
      <div className="relative lg:h-[500px] sm:mx-auto w-full flex items-center justify-center">
        {colorfulSquares.map((square, index) => (
          <div
            key={index}
            className={`${square.bg} rotate-45 transform absolute mt-72 `}
            style={{
              width: `${square.width}px`,
              height: `${square.height}px`,
              top: `${square.top}px`,
              left: square.left ? `${square.left}px` : 'auto',
              right: square.right ? `${square.right}px` : 'auto'
            }}
          />
        ))}

        <div className="lg:absolute mt-48 top-14 w-full lg:h-[400px] flex items-center justify-center p-4 sm:p-8">
          <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto">
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[550px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[550px] flex items-center justify-center">
                <img
                  src={segni}
                  className="rounded-full shadow-2xl object-contain bg-transparent w-full h-full shadow-bg-sec bg-gradient-to-l from-bg-ter to-bg-sec"
                  alt="Segni"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="flex-1 p-4 mt-16 ">
              <div className="p-6 rounded-lg shadow-lg text-center w-full max-w-2xl bg-transparent">
                <h2 className="font-semibold font-pri text-2xl text-bg-sec">About Me</h2>
                <p className="mt-2 text-bg-ter font-serif">
                  Hi, I'm Segni Asrat, a dedicated web and software developer with a solid foundation in creating dynamic and responsive applications. With a degree in Computer Engineering from Dilla University, I have honed my skills in various programming languages and development frameworks. I'm passionate about designing and building innovative solutions that make a real impact. Let's create something remarkable together!
                </p>
                <button className="border-2 border-bg-sec rounded-full p-2 mt-4 hover:bg-bg-sec hover:text-white hover:scale-110 duration-500">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
