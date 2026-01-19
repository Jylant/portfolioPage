import { h } from 'preact';


import '../../styles/footer.scss';

const Footer = () => {
    const name = "Antti Jylhä";
    const emailFront = 'jylhant';
    const emailService = 'gmail';
    const emailEnd = 'com';
    const githubLink = "https://github.com/jylant";
    const linkedInLink = "https://www.linkedin.com/in/antti-jylha-846121265/";

    return (
        <>
        <footer className='footer'>
            <p>Name: {name}</p>
            <p>Email: <a href={`mailto:${emailFront}@${emailService}.${emailEnd}`}>Email me</a></p>
            <p>GitHub: <a href={githubLink}>Jylant</a></p>
            <p>LinkedIn: <a href={linkedInLink}>Here</a></p>
            <p>© 2026 Antti Jylhä. All rights reserved.</p>
        </footer>
        </>
    );
};

export default Footer;
