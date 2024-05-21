import './index.css' 
import {useState} from 'react'  
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';





const FrequentQuestions=()=>{ 
    const[questionStatus,setQuestionStatus]=useState(true) 

     const changeStatus=()=>{
        setQuestionStatus((prev)=>!prev)
    }

    return(
        <div className='frequentQuestionsLayout'> 
            <h3 className='questionsHead'>Frequently asked questions</h3> 
            <p className='questionsPara'>Everything you need to know about the product and billing.</p>  
            <div>
            <Accordion>
            <AccordionSummary
                expandIcon={questionStatus?<img src="\assets\plus-circle.png" alt="plus" onClick={changeStatus}/>:<img src="\assets\minus-circle.png" alt="minus" onClick={changeStatus}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <p style={{color:"#0000000", fontWeight:'bold'}}>Is there a free trial available?</p>
            </AccordionSummary>
            <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </AccordionDetails>
            </Accordion> 


            <Accordion>
            <AccordionSummary
                expandIcon={questionStatus?<img src="\assets\plus-circle.png" alt="plus" onClick={changeStatus}/>:<img src="\assets\minus-circle.png" alt="minus" onClick={changeStatus}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <p style={{color:"#0000000", fontWeight:'bold'}}>Can I change my plan later?</p>
            </AccordionSummary>
            <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </AccordionDetails>
            </Accordion>  


            <Accordion>
            <AccordionSummary
                expandIcon={questionStatus?<img src="\assets\plus-circle.png" alt="plus" onClick={changeStatus}/>:<img src="\assets\minus-circle.png" alt="minus" onClick={changeStatus}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <p style={{color:"#0000000", fontWeight:'bold'}}>What is your cancellation policy?</p>
            </AccordionSummary>
            <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </AccordionDetails>
            </Accordion>   


            <Accordion>
            <AccordionSummary
                expandIcon={questionStatus?<img src="\assets\plus-circle.png" alt="plus" onClick={changeStatus}/>:<img src="\assets\minus-circle.png" alt="minus" onClick={changeStatus}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <p style={{color:"#0000000", fontWeight:'bold'}}>Can other info be added to an invoice?</p>
            </AccordionSummary>
            <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </AccordionDetails>
            </Accordion> 


            </div> 


            <Accordion>
            <AccordionSummary
                expandIcon={questionStatus?<img src="\assets\plus-circle.png" alt="plus" onClick={changeStatus}/>:<img src="\assets\minus-circle.png" alt="minus" onClick={changeStatus}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <p style={{color:"#0000000", fontWeight:'bold'}}>How does billing work?</p>
            </AccordionSummary>
            <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </AccordionDetails>
            </Accordion>  


            <Accordion>
            <AccordionSummary
                expandIcon={questionStatus?<img src="\assets\plus-circle.png" alt="plus" onClick={changeStatus}/>:<img src="\assets\minus-circle.png" alt="minus" onClick={changeStatus}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <p style={{color:"#0000000", fontWeight:'bold'}}>How do I change my account email?</p>
            </AccordionSummary>
            <AccordionDetails>
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
            </AccordionDetails>
            </Accordion> 


        </div>
    )
} 

export default FrequentQuestions