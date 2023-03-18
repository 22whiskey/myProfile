import { project } from "../project.js"

export function Project() {
    return (

        <section className="pt-[10%]">
            <div className="pt-[8%]" name="project">
                <div className=" w-[100%] flex flex-col items-center gap-[4rem]">
                    <h1 className="text-[white] text-[200%] border-b-[1px] border-white pb-[0.5%]">Project</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {project.map((item, index) => (
                            <div key={index} id="project-picture">
                                <img className="w-[100%] h-[80%] object-contain" src={item.image}></img>
                            </div>
                        )
                        )}
                    </div>
                </div>

            </div>

        </section>


    )
}