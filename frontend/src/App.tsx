import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header/Header';
import GallaryPage from './page/GallaryPage';
import MainPage from './page/MainPage';
import MintPage from './page/MintPage';
import { useRef } from 'react';
// import ScrollTriggerProxy from './lib/animation/gsap/ScrollTriggerProxy';

function App() {
    const containRef = useRef(null);
    // useLocoScroll(true);

    return (
        <BrowserRouter>
            {/* <LocomotiveScrollProvider
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
                        //..all the dependencies you want to watch to update the scroll.
                        //  Basicaly, you would want to watch page/location changes
                        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                    ]
                }
                containerRef={containRef}
                onUpdate={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
            > */}
            {/* <ScrollTriggerProxy /> */}
            {/* <main className="App" id="App" data-scroll-container ref={containRef}> */}
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />

                <Route path="/gallary" element={<GallaryPage />} />
                <Route path="/mint" element={<MintPage />} />
            </Routes>
            <Footer />
            {/* </main> */}
            {/* </LocomotiveScrollProvider> */}
        </BrowserRouter>
    );
}

export default App;
