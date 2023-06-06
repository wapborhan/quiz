import welcomeBackground from '../assets/bg.png'

const Welcome = (props)=> {
    return (
        <>
            <div className="relative w-full flex items-center justify-center">
                <img className='w-full max-w-[98%]' src={welcomeBackground} alt="quiz app welcome image"/>
            </div>
            <div className='flex flex-col items-start my-4 px-16'>
                <h4 className='text-xl font-semibold text-black mb-2'>Welcome to Quiz App</h4>
                <h4 className='text-base font-medium text-black'>
                Get ready for some fun and learning with our engaging quiz app
                </h4>
            </div>
            <div className='w-full flex mt-12'>
                <button onClick={()=> props.loadQuiz()} className="w-full rounded-br-[50px] rounded-bl-[50px] bg-main text-white text-center py-4 cursor-pointer opacity-80 hover:opacity-100 transition-all">Let's Get Started</button>
            </div>
        </>
    )
}
export default Welcome