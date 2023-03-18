import { history } from "../history"

export function History() {

    return (

        <section className="pt-[10%] px-[4%]">
            <div className="pt-[8%]" name="history">
                <div className="flex justify-center items-center text-center text-[150%] leading-[200%] text-white  gap-[10%]" >
                    {history.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h1>{item.education}</h1>
                            <p className="text-[70%] pb-[60px]">{item.attended}</p>
                            <img className="w-[300px] h-[350px] pb-[60px]" src={item.image} alt={item.education}></img>
                            <p className="">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section >


    )
}