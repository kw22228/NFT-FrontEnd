import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header/Header';
import GallaryPage from './page/GallaryPage';
import MainPage from './page/MainPage';
import MintPage from './page/MintPage';
// import ScrollTriggerProxy from './utils/animation/gsap/ScrollTriggerProxy';

function App() {
    // const containRef = useRef(null);

    return (
        <BrowserRouter>
            {/* <LocomotiveScrollProvider //
                options={{
                    smooth: true,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                    },
                }}
                watch={
                    [
                        //
                    ]
                }
                containerRef={containRef}
            >
                <ScrollTriggerProxy />
                <main className="Main" data-scroll-container ref={containRef}> */}
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/gallary" element={<GallaryPage />} />
                <Route path="/mint" element={<MintPage />} />
            </Routes>
            {/* </main> */}
            {/* </LocomotiveScrollProvider> */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
