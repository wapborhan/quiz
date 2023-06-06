/* useState */
import {useEffect, useState } from 'react'

/* Quis Json */
import quizArr from './quizList.json'

/* Components */
import Welcome from './components/welcome';
import Quiz from './components/quiz'
import QuizDone from './components/quziDone';

const QuizApp = ()=> {
    const [quizList, setQuizList] = useState(quizArr)
    const [quizStarted, setQuizStarted] = useState(
        localStorage.getItem('quiz') && localStorage.getItem('quiz') === 'true' ? true : false
        )
    const [quizIndex, setQuizIndex] = useState(
        localStorage.getItem('quizIndex') && quizList[localStorage.getItem('quizIndex')] ? localStorage.getItem('quizIndex') : 0
    )
    const [answers, setAnswers] = useState([])
    const [point, setPoint] = useState(
       isNaN(parseInt(localStorage.getItem('point'))) 
        ? 0 : parseInt(localStorage.getItem('point'))
    )
    const [quizDone, setQuizDone] = useState(
        localStorage.getItem('quizDone') && localStorage.getItem('quizDone') === 'true' ? true : false
    )

    useEffect(()=> {
        localStorage.setItem('quiz', quizStarted)
        localStorage.setItem('quizIndex', quizIndex)
        localStorage.setItem('point', point)
        localStorage.setItem('quizDone', quizDone)
    })


       
    const loadQuiz = ()=> {
        setQuizStarted(true)
    }

    const chooseOption = (e, itemIndex)=> {
        document.querySelectorAll('.option-item').forEach(item =>{
            item.classList.remove('bg-main')
            item.classList.add('bg-transparent')
        })

        e.target.classList.remove('bg-transparent')
        e.target.classList.add('bg-main')
        setAnswers(itemIndex)   
    }
    const nextStep = ()=> {
        let checkQuizIndex = quizIndex
        checkQuizIndex++
        if(answers.length !== 0) {
            if(quizList[checkQuizIndex]) {
                if(answers[0].toLowerCase() === quizList[quizIndex].answer.toLowerCase()) {
                    let pt = point
                    pt++
                    setPoint(pt)
                }
                let qIndex = quizIndex
                qIndex++
                setQuizIndex(qIndex)
    
                document.querySelectorAll('.option-item').forEach(item =>{
                    item.classList.remove('bg-main')
                    item.classList.add('bg-transparent')
                })
            }else {
                if(answers[0].toLowerCase() === quizList[quizIndex].answer.toLowerCase()) {
                    let pt = point
                    pt++
                    setPoint(pt)
                }
                setQuizDone(true)
            }
            setAnswers('')
        }else {
            alert('choose at lease one option please')
        }
    }
    const backToHome = ()=> {
        setQuizStarted(false)
        setQuizDone(false)
        setQuizIndex(0)
        setPoint(0)
        setAnswers('')
    }

    return (
        <div className="w-full h-screen bg-linear-body flex items-center justify-center">
            <div className="relative overflow-hidden w-full max-w-lg bg-white rounded-[50px]">
                {
                    !quizDone ? <div className='start-quiz absolute z-50 top-0 w-full h-full flex items-center justify-center'>
                    <div className='absolute left-0 top-0 w-[50%] h-full bg-main'></div>
                    <div className='absolute right-0 top-0 w-[50%] h-full bg-main'></div>
                    <div className="relative hide min-w-max">
                        <h5 className="text-4xl text-white">Welcome To QuizUp</h5>
                    </div>
                </div> : ""
                }
                <div className="w-full flex items-ceter justify-center py-4">
                    <h1 className="font-bold">
                        <span className="text-2xl text-main underline">QUIZ</span>
                        <span className="text-2xl text-black underline">UP</span>
                    </h1>
                </div>
                {
                    !quizStarted && !quizDone ? 
                    <Welcome loadQuiz={loadQuiz}/>
                    : 
                    quizDone 
                    ? <QuizDone backToHome={backToHome} quizList={quizList} point={point}/> 
                    : <Quiz quizList={quizList} quizIndex={quizIndex} chooseOption={chooseOption} nextStep={nextStep}/>
                }
            </div>
        </div>
    )
}
export default QuizApp