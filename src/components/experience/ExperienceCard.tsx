type ExperienceProps = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export default function ExperienceCard({ title, company, date, description }: ExperienceProps) {
  return (
    <div className="border-l-4 border-[#776254] pl-4 sm:pl-6 relative">
      <span className="absolute w-4 h-4 bg-[#776254] rounded-full left-[-8px] sm:left-[-9px] top-1"></span>
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-400">{company} · {date}</p>
      <p className="mt-2 text-sm sm:text-base text-gray-300">{description}</p>
    </div>
  );
}
