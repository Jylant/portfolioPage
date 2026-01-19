import '../styles/index.scss';

function About() {
    const aboutText = () => {
        const row1 = "I'm a youthful and energetic software developer from Oulu, Finland. I'm currently studying at Oulu University of Applied Sciences."
        const row2 = "I had an internship at University of Oulu's ICT department as a small scale Software Developer, where I used mainly JAVA's Vaadin and Quarkus frameworks for the project."
        const row3 = "Even though it's yet to show up on these pages, I love all things machine learning. My favourite language is Python, but I'm very comfortable with C++, and C#. I'm also familiar with JavaScript and React."
        const row4 = "I'm always looking for new challenges and opportunities to learn new things, and I try to make most of everything that can be a learning experience."
        const row5 = "I almost forgot to mention that I'm also familiar with SQL and postgreSQL based databases, and I've worked with both in my projects, and in my internship through JDBC."
        const row6 = "My hobbies relevant to programming include tabletop boardgames and role playing games, which have deepened and enforced my natural problem solving skills."
        
        return (
            <>
                {row1} <br /> <br />{row2}<br /> <br />{row3}<br /> <br />{row4}<br /><br />{row5}
            </>
        );
    }
    
    return (
        <>
            <h1>About me</h1>
            <p>{aboutText()}</p>
        </>
    );
}

export default About;
