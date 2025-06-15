import CardProject from "../cardProject/CardProject";
import projects from "../../data/projects.json";

export default function CardList() {
    return (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {projects.map((project, index) => (
                <CardProject key={index} {...project} />
            ))}
        </div>
    );
}
