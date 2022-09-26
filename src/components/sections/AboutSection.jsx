import { Arrow2 } from "../common/Arrows";
import cesar from "../../assets/img/cesar.png";
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative grid items-start h-auto grid-cols-1 gap-5 px-10 lg:my-0 md:grid-cols-2 place-items-center"
    >
      <div className="grid gap-5 place-items-center">
        <h2 className="my-10 text-5xl font-bold border-b-8 border-solid border-[#fa1e2c] w-fit">
          ABOUT ME
        </h2>
        <p className="md:text-xl lg:text-2xl max-w-[50ch] font-bold">
          I'm Cesar, a passionate full-stack developer* based in Perú, who loves
          to code everything he can. Always learning, my goal is to expand my
          knowlegde and grow as a developer. I always wanted to know how web
          pages work, from how they loaded the images, their design to their
          payment methods. and I got into the world of programming without fear,
          I really like the design, the animations and the power to translate
          ideas into a web in the best and most beautiful way.
        </p>
      </div>
      <div>
        <img
          className="rounded-3xl classImg"
          src={cesar}
          alt="cesar"
          loading="lazy"
        />
      </div>
      <Arrow2 />
    </section>
  );
}
