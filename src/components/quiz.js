const Quiz = (props)=> {
    return (
        <>
            <div className='start-quiz absolute z-50 top-0 w-full h-full flex items-center justify-center'>
                <div className='absolute left-0 top-0 w-[50%] h-full bg-main'></div>
                <div className='absolute right-0 top-0 w-[50%] h-full bg-main'></div>
                <div className="relative hide min-w-max">
                    <h5 className="text-4xl text-white">Good Luck</h5>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-6 mb-14 gap-2">
                <div className="font-bold flex items-center text-black"><p className="text-main">{parseInt(props.quizIndex)+1}</p>/{props.quizList.length}</div>
                <p className="font-regular text-black w-full max-w-[80%] text-center px-4">{props.quizList[props.quizIndex].question}</p>
            </div>

            <div className="flex flex-col gap-4 mb-16 px-14">
                {
                    props.quizList[props.quizIndex].options.map((item, index) => (
                        <div onClick={(e)=> props.chooseOption(e, item.index)} key={index} className="option-item w-full border-[1px] rounded border-gray-300 border-black flex items-center gap-4 px-4 py-3 cursor-pointer group bg-transparent hover:bg-main active:opacity-100 hover:opacity-60 hover:border-main transition-all">
                            <div className="font-semibold text-black group-hover:text-white">{item.index}</div>
                            <p className="font-regular text-black group-hover:text-white">{item.option}</p>
                        </div>
                    ))
                }
            </div>

            <div className="w-full flex">
                <button onClick={()=> props.nextStep()} className="w-full bg-main text-white rounded-br-[50px] font-semibold py-4 opacity-80 hover:opacity-100 transition-all">Next</button>
            </div>
        </>
    )
}
export default Quiz