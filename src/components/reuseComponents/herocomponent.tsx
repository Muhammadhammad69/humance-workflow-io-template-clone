import React from "react";

// interface Position {
//   bgPosition: string;
// }
interface Position {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface HeroProps {
  bgImage: string;
  content: string;
  position?: Position;
}
export const ResuseHeroComponent = ({
  bgImage,
  content,
  position,
}: HeroProps) => {
  // const {bgImage, content, position} = props.props
  const positionClasses = [
    position?.base ? position.base : "",
    position?.sm ? position.sm : "",
    position?.md ? position.md : "",
    position?.lg ? position?.lg : "",
    position?.xl ? position?.xl : "",
  ].join(" ");
  
  return (
    // bg-[position:25%]  sm:bg-[position:20%]  lg:bg-[position:45%]
    <section
      className={`${bgImage} ${positionClasses} bg-[position:25%] sm:bg-[position:20%]  lg:bg-[position:45%] bg-no-repeat bg-[size:cover] xl:mx-[40px] rounded-[25px] mt-[20px]`}
    >
      <div className="px-[20px]">
        <div className="h-[250px] sm:h-[320px] lg:h-[400px] xl:h-[450px] flex items-center justify-center">
          <h1 className="font-be-vietnam-pro text-[30px] min-[480px]:text-[40px] sm:text-[50px] leading-[35px] min-[480px]:leading-[50px] md:text-[70px]  sm:leading-[60px] md:leading-[70px] font-[700]  text-white">
            {content}
          </h1>
        </div>
      </div>
    </section>
  );
};
