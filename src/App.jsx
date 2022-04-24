import Hero from "./components/Hero";
import FloatingMenu from "./components/FloatingMenu";
import Navbar from "./components/Navbar";
import Brief from "./components/Brief";
import Portofolio from "./components/Portofolio";
import useMediaQuery from "./hooks/useMediaQuery";
import './styles/index.css'
export function App() {
    const isMobile = useMediaQuery("(max-width: 535px)");
    return (
        <div>
        <Navbar/>
        {!isMobile &&<FloatingMenu/>}
        <Hero/>
        <Brief/>
        <Portofolio/>
        </div>
    )
}