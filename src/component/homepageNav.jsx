import { Link } from "react-scroll";
export function Nav() {


    return (

        <nav className='bg-gradient-to-r from-cyan-500 to-teal-900 fixed w-[100%] h-[8%] flex justify-around items-center text-white gap-[5%] '>
            <div><h1 className='font-[700] text-[200%] '>Bright Profile</h1></div>
            <div>
                <ul className='flex gap-[50%]'>
                    <li className="hover:border-b-[1px] border-white "> <Link to="profile" smooth={true} duration={800}>Profile</Link></li>
                    <li className="hover:border-b-[1px] border-white "> <Link to="history" smooth={true} duration={800}>History</Link></li>
                    <li className="hover:border-b-[1px] border-white ">Acheivement</li>
                </ul>
            </div >
            <div className='pl-[16%] '>
                <button>Dark-light</button></div>
        </nav>


        // {/* <main>
        //     <section>
        //         <div></div>
        //         <div></div>
        //     </section>

        //     <section>
        //         <div></div>
        //         <div></div>
        //         <div></div>
        //     </section>
        // </main>

        // <footer>
        //     <ul>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </ul>
        // </footer> */}

    )
}