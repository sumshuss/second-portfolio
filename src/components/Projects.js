import portImg1 from '../assets/img/pwgen.png';
import portImg2 from '../assets/img/meowChat.png';

export const Projects = () => {
    
    const projects = [
        {
            title : "MeowChat",
            Description: "Live chat app built with React, SCSS and JavaScript",
            imgUrl:portImg2
        },
        {
            title : "MeowChat",
            Description: "Live chat app built with React, SCSS and JavaScript",
            imgUrl: portImg1
        }
    ]
    return(

        <section className='project' id="project">
            <h1> projects section</h1>
        </section>

    )
}
