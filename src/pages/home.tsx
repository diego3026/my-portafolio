import Contacto from "../components/contacto/Contacto";
import Content from "../components/content/Content";
import Experience from "../components/experience/Experience";
import Formacion from "../components/formacion/Formacion";
import Header from "../components/header/Header";
import Project from "../components/project/Project";
import Skills from "../components/skills/Skills";

const HomePage = () =>{
    return (
        <>
            <Header/>
            <Content/>
            <Skills/>
            <Experience/>
            <Project/>
            <Formacion/>
            <Contacto/>
        </>
    )
}

export default HomePage;