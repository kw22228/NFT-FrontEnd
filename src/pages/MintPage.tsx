import ScrollTrigger from 'gsap/ScrollTrigger';
import Mint from '../components/Mint/Mint';

const MintPage = () => {
    if (ScrollTrigger.getAll()) {
        ScrollTrigger.getAll().forEach((instance, index) => instance.kill());
    }

    return (
        <>
            <Mint />
        </>
    );
};

export default MintPage;
