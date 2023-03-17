export function Profile() {

    return (

        <section className="pt-[15%]" name="profile">
            <div className=" w-[100%] flex justify-around text-white items-center  ">
                <div className="text-[200%] leading-[200%]">
                    <span className="text-[140%] border-b-[1px] border-white">About me :</span>
                    <h1 className="mt-[4%]">My name is <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-teal-100">Vachirawit Linkanokrat</span></h1>
                    <p className="">Bootcamp at Techup thailand</p>
                    <h2>I always learning a new thing . <br></br>
                        love to communicate with other people . <br></br>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-teal-100"> Life is short so I always do what I dreams . </span><br></br>
                    </h2>
                </div>
                <div>
                    <img className="rounded-[15%] " src="/photo/aibright-2.jpg" alt="Bright-Picture"></img>
                </div>

            </div>



        </section>


    )
}