import GithubInIcon from "./GithubInIcon";
import useImage from "../hooks/useImage";

export default function ProjectComponent({
  title,
  techStack,
  description,
  github,
  img,
  link,
}) {
  const { image } = useImage(img);
  return (
    <div className="w-full h-full grid place-items-center p-5 gap-3 transition-all border-8 border-solid rounded-1xl bg-[#ffffff] dark:border-slate-800 dark:bg-slate-800 hover:scale-110 hover:bg-[#f1616d] hover:border-[#f1616d]">
      <img
        src={image}
        alt={image}
        className="object-cover rounded aspect-video"
      />
      <p className="text-xl font-bold">{title}</p>
      <p className="italic">{techStack}</p>
      <p>{description}</p>
      <div className="flex flex-row">
        <a
          href={link}
          target="_blank"
          id="project-visit"
          className="px-4 py-2 font-bold text-white rounded-full bg-slate-800 dark:bg-[#494949]"
        >
          Visit
        </a>
        {github && (
          <a
            href={github}
            target="_blank"
            id="project-code"
            className="flex gap-2 px-4 py-2 ml-4 font-bold rounded-full bg-slate-200 dark:text-black "
          >
            Code <GithubInIcon darkColor="bg-black" />
          </a>
        )}
      </div>
    </div>
  );
}
