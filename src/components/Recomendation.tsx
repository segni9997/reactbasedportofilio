import Card from './pages/Cards';
import arafaso from "../styles/Arfaso.jpg"
import elias from "../styles/elias.jpg"
import tempo from "../styles/tempo.jpg"
import exitmark from '../styles/exit.png';


  

export const Recomendations = () => {

    const slides = [
        { 
            id: 1, 
            imageSrc: elias, 
            title: 'Dean of school of Electrical and Computer Engineering ',
            description:"Dean of school of Electrical and Computer Engineering"

        
        },
        { 
            id: 2, 
            imageSrc: arafaso, 
            title: 'Computer Engineering Department Chair and Lecturer',
            description:"Computer Engineering Department Chair and Lecturer"

        },
        { 
            id: 3, 
            imageSrc: tempo, 
            title: 'tempo Contain My CGPA and  Program',
            description:"Temporary degree Contain My CGPA and  Program"

        },
        { 
            id: 4, 
            imageSrc: exitmark, 
            title: 'Exit Exam Mark From MoE',
            description:"Exit Exam Mark From MoE"
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


