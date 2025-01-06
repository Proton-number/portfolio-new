import RandomLetterSwapPingPong from "./animation/RandomLetterSwapPingPong";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className=" mb-6">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold">
            ADEBIMPE <br /> FAVOUR
          </h1>
        </div>
        <div className="w-full h-full rounded-lg  text-3xl md:text-5xl flex flex-col items-center justify-center font-overusedGrotesk">
          <div className="h-full  rounded-xl py-12  align-text-center gap-y-1 md:gap-y-2 flex flex-col justify-center items-center">
            <RandomLetterSwapPingPong
              label="SOFTWARE  DEVELOPER"
              reverse={false}
              className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
