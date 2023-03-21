import { project } from "../project.js"

export function Project() {
    return (

        <section className="pt-[10%]">
            <div className="pt-[8%]" name="project">
                <div className=" w-[100%] flex flex-col items-center gap-[4rem]">
                    <h1 className="text-[white] text-[200%] border-b-[1px] border-white pb-[0.5%]">Project</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {project.map((item, index) => (
                            <div key={index} className="pl-[7%] flex flex-col items-center ">
                                <img className="w-[90%] h-[80%] mb-[6%] rounded-[15px]" src={item.image}></img>
                                <h3 className="text-[white] hover:border-b-[1px] hover:border-white"><a href="https://github.com/22whiskey/myTodolist">{item.project}</a></h3>
                            </div>
                        )
                        )}
                    </div>
                </div>

            </div>

        </section>


    )
}