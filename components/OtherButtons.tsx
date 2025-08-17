import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { ButtonProps } from "@/lib/types"

export const NavbarButton = ({iconUrl, handleClick}:ButtonProps) =>{
    return(
        <button onClick={handleClick} className="border border-[#E7E5E4] rounded-full p-2 flex justify-center items-center">
            <Image src={iconUrl as string} alt="" width={16} height={16} />
        </button>
    )
}
export const WalletButton = ({handleClick}:ButtonProps) =>{
    return(
        <button onClick={handleClick} className="bg-[#F2F1F1] flex gap-2 items-center  justify-center rounded-full px-2 py-1">Your YTD Income <ChevronDown size={18}/></button>
    )
}
export const PurpleButton = ({iconUrl, text, handleClick, type, styles}:ButtonProps) =>{
    return(
        <button onClick={handleClick} type={type} className={`bg-[#7A003F] rounded-4xl py-1 px-3 text-white ${styles}`}>
            {iconUrl && <Image src={iconUrl} alt="" width={16} height={16} className="inline-block mr-2" />}
            {text}
        </button>
    )
}
export const AddProspectButton = ({ handleClick}:ButtonProps) =>{
    return(
        <button onClick={handleClick} className="border flex gap-2 items-center  justify-center rounded-full p-2"><Image src="/icons/filter.png" alt="" width={16} height={16} className="hidden lg:iniline" /> <span className="text-sm md:text-md">Add Prospect</span> <ChevronDown size={20}/></button>
    )
}
export const FilterButton = ({text, handleClick}:ButtonProps) =>{
    return(
        <Button onClick={handleClick} className="rounded-3xl" variant={"outline"} size={"sm"}> <Image src="/icons/filter.png" alt="" width={16} height={16} className="hidden lg:inline" /> <span className="text-sm md:text-md">{text}</span> <ChevronDown size={20}/></Button>
    )
}
