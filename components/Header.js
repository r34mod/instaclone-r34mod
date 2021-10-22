import Image from "next/image";
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
}  from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState} from "recoil";

function Header(){

    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    
    const router = useRouter();

    return(
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
                {/*LEFT SIDE*/}
                <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain"/>
                </div>

                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain"/>
                </div>
               
                {/*MIDDLE SIDE*/}
                <div onClick={() => router.push('/')} className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm 
                        border-gray-300 focus:ring-black focus:border-black rounded-md" 
                        type="text" placeholder="Search" />
                    </div>
                </div>
                {/*RIGHT*/}
                <div className="flex items-center justify-end space-x-4">
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />

                    {session ? (
                        <>
                        <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45" />
                                <div className="absolute -top-1 -right-2 text-xs w-4 h-4
                                bg-red-500 rounded-full flex items-center justify-center
                                text-white">7</div>
                            </div>
                            <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn" />
                            <HeartIcon className="navBtn" />

                    <img
                        src={session?.user.image} alt="pictureProfile" 
                        className="h-8 rounded-full cursor-pointer"/>
                     
                     </>
                    ): (
                        <button onClick={signIn}>Inicia sesion</button>
                    )}
                    
                    </div>
                
                
            </div>
            
        </div>
    )
}

export default Header;