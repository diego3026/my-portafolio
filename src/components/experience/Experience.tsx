import type { Key } from "react";
import experienceData from "../../data/experiences.json"; // ajusta la ruta según tu estructura
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="relative w-full bg-[#111111] text-white py-16 px-4 sm:px-6 lg:px-8 scroll-mt-[100px]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experiencia</h2>

        <div className="space-y-12 mt-10">
          {experienceData.map((item: { title: string; company: string; date: string; description: string; }, index: Key | null | undefined) => (
            <ExperienceCard
              key={index}
              title={item.title}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
