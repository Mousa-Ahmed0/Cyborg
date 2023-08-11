import './App.css'
// عدد الكومبونت رح يكون كبير جدا بدل هاض المنظر بعمل ملف بجمع في الروابط 
/*
import Container from './components/Container/Container'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
*/// وبستدعي سطر زاحد 
import { Container } from './components/index';
import { Header,Footer ,Hero,MostPopular,GamingLib} from './sections/index';

const App =()=>{
    return (
        <>
            <Header />
            
            <Container>
                <Hero/>
                <MostPopular/>
                <GamingLib/>
            </Container> 
            
            <Footer/>
        </>
    )
}
export default App; 