import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

import Header from './components/Header/Header';
import MainPage from './page/MainPage';
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
            </Routes>
            {/* </main> */}
            {/* </LocomotiveScrollProvider> */}
        </BrowserRouter>
    );
}

export default App;
