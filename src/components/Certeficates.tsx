import Card from './pages/Cards';
import Cplus from "../styles/CPlusPlus_certificate.jpg"
import Css from "../styles/CSS_certificate.jpg"
import Html from "../styles/HTML_certificate.jpg"
import Javascript from "../styles/Java_certificate.jpg"
import Reactjs from "../styles/react_certificate.jpg"
import responsive from "../styles/Responsive-Web-Design_certificate.jpg"
import intermidiate from "../styles/Intermediate_Python_certificate.jpg"
import php from "../styles/PHP_certificate.jpg"
import PythonEvery from "../styles/progr.png"
import pythondatas from "../styles/pythonDatastructure.png"
import segnihuawei from "../styles/Segni Asrat.jpg"
import pythonnew from "../styles/Python_certificate.jpg"

  

export const Certificate = () => {

    const slides = [
        { 
            id: 1, 
            imageSrc: segnihuawei, 
            title: 'Huawei ',
            description: 'From Huawei seeds for the Future 2024' 
        },
        { 
            id: 2, 
            imageSrc: pythonnew, 
            title: 'Python Core',
            description: 'Solo Learn' 
        },
        { 
            id: 3, 
            imageSrc: pythondatas, 
            title: 'Data Structure',
            description: 'Mechingan university' 
        },
        { 
            id: 4, 
            imageSrc: PythonEvery, 
            title: 'Python For Everybody',
            description: 'Mechingan university' 
        },     { 
            id: 5, 
            imageSrc: responsive, 
            title: 'Responsive Web Design',
            description: 'SoloLearn' 
        },     { 
            id: 6, 
            imageSrc: Reactjs, 
            title: 'React js',
            description: 'SoloLearn' 
        },     { 
            id: 7, 
            imageSrc: Javascript, 
            title: 'Js',
            description: 'SoloLearn' 
        },     { 
            id: 8, 
            imageSrc: Css, 
            title: 'Css',
            description: 'soloLearn' 
        },     { 
            id: 9, 
            imageSrc: Html, 
            title: 'HTML',
            description: 'soloLearn' 
        },     { 
            id: 10, 
            imageSrc: intermidiate, 
            title: 'Python For Everybody',
            description: 'SoloLearn' 
        },     { 
            id: 11, 
            imageSrc: Cplus, 
            title: 'C++',
            description: 'SoloLearn' 
        },     { 
            id: 12, 
            imageSrc: php, 
            title: 'PHP',
            description: 'SoloLearn' 
        },
       
    ];
    

 

    return (
        <>
                 <h2 className="text-3xl text-bg-ter font-serif font-semibold p-3 text-left">Certeficates</h2>

        <div className='grid grid-cols-3 mr-4 ml-2 p-2 '>{slides.map((slides, ind)=>{
                return (
                    <Card key={ind} imageSrc={slides.imageSrc} title={slides.title} description={slides.description}/>
                )
            })}</div>
        </>
            
       
    );
}


