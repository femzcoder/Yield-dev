import { ChevronDown } from "lucide-react"
import Image from "next/image"

export const NavbarButton = ({iconUrl, handleClick}:ButtonProps) =>{
    return(
        <button onClick={handleClick} className="border border-[#E7E5E4] rounded-full p-2 flex justify-center items-center">
            <Image src={iconUrl as string} alt="" width={16} height={16} />
        </button>
    )
}
export const WalletButton = ({handleClick}:ButtonProps) =>{
    return(
        <button className="bg-[#F2F1F1] flex gap-2 items-center  justify-center rounded-full px-2 py-1">Your YTD Income <ChevronDown size={18}/></button>
    )
}
export const AddProspectButton = ({iconUrl, handleClick}:ButtonProps) =>{
    return(
        <button onClick={handleClick} className="border flex gap-2 items-center  justify-center rounded-full p-2"><Image src="/icons/filter.png" alt="" width={16} height={16} className="hidden lg:iniline" /> <span className="text-sm md:text-md">Add Prospect</span> <ChevronDown size={20}/></button>
    )
}
