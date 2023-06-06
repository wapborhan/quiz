const QuizDone = (props)=> {
    return (
        <div className="w-full min-h-[300px] flex items-center justify-center flex-col gap-4">
            <h3 className="text-3xl text-black max-w-[80%] text-center">You have {props.point} correct answer</h3>
            <button onClick={()=> props.backToHome()} className="px-4 py-3 bg-main text-white opacity-80 hover:opacity-100 transition-all">Go Back To Welcome Page</button>
        </div>
    )
}
export default QuizDone