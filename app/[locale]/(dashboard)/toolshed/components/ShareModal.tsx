import { SendEmailModal } from "@/components/Container"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Copy, Facebook, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export function ShareProfileDialog() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = (message: {
    recipient: string;
    subject: string;
    message: string;
  }) => {
    // Simulate sending email
    console.log("Email Sent ✅", message);
    alert(`Email sent to ${message.recipient}`);
  };

  return (
    <>
        <Dialog>
        <form>
            <DialogTrigger asChild>
            <Button className="text-white rounded-[4px]">Share</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-[12px] border-none">
            <DialogHeader>
                <DialogTitle className="font-[700] text-[24px]">Share profile</DialogTitle>
                <DialogDescription className="text-[#595657]">
                If you like this article, share it with your friends.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
                <div className="grid grid-cols-4 gap-3">
                <div className="flex flex-col items-center justify-center">
                    <Button style={{backgroundColor:'rgba(29, 161, 242, 0.1)'}} className="p-6 rounded-full w-[50px] h-[50px]" onClick={()=>{setIsModalOpen(true); console.log('you press me')}} variant={'ghost'}><Mail color="#007AFF"/></Button>
                    <span className="text-[12px] text-[#007AFF]">Email</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button style={{backgroundColor:'rgba(29, 161, 242, 0.1)'}} className="p-6 rounded-full w-[50px] h-[50px]" variant={'ghost'}><Facebook color="#007AFF"/></Button>
                    <span className="text-[12px] text-[#007AFF]">Facebook</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button style={{backgroundColor:'rgba(29, 161, 242, 0.1)'}} className="p-6 rounded-full w-[50px] h-[50px]" variant={'ghost'}><Linkedin color="#007AFF"/></Button>
                    <span className="text-[12px] text-[#007AFF]">LinkedIn</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Button style={{backgroundColor:'rgba(37, 211, 102, 0.1)'}} className="p-6 rounded-full w-[50px] h-[50px]" variant={'ghost'}><Mail color='#25D366'/></Button>
                    <span className="text-[12px] text-[#25D366]">Whatsapp</span>
                </div>
                </div>
                <div className="flex justify-between items-center gap-3 border p-2 rounded-[4px] border-[#595657]">
                <Input className="rounded-[12px] border-none" id="username-1" name="username" defaultValue="@peduarte" />
                <Copy/>
                </div>
            </div>
            </DialogContent>
        </form>
        </Dialog>   


        <SendEmailModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSendEmail={handleSendMessage}
      /> 
    </>

  )
}
