export function Footer() {

    return (

        <nav className='bg-gradient-to-r from-cyan-500 to-teal-900 py-[1%] text-white mt-[15%]'>
            <section className="flex justify-center gap-[10%]">
                <div className="flex items-center w-[20%] gap-[4%]">
                    <img className="w-[20%] " src="/photo/github.png"></img>
                    <a className="hover:border-b-[1px] border-white " href="https://github.com/22whiskey">Github</a>
                </div>
                <div className="flex items-center w-[20%] gap-[4%]">
                    <img className="w-[20%] " src="/photo/linkedin.png"></img>
                    <a className="hover:border-b-[1px] border-white " href="https://www.linkedin.com/in/brighttech/">Linkedin</a>
                </div>
                <div className="flex items-center w-[20%] gap-[4%]">
                    <img className="w-[20%] " src="/photo/email.png"></img>
                    <p>22whiskey.smd@gmail.com</p>
                </div>
            </section>

        </nav >)
}