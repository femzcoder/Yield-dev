import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ArrowLeft, LucideSend, Plus} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ConverstaionPlannerModal } from "./ConversationPlanner"

export function PlanConverstaionModal() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hi there! How can I assist you today?" },
  ])
  const [input, setInput] = useState("")

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: input,
    }

    setMessages([...messages, newMessage])
    setInput("")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#7A003F] text-sm rounded-4xl py-1 px-3 text-white">
          Plan Conversation
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col bg-white border-none rounded-3xl p-0">
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1">
            <ArrowLeft/>
            <Image src="/icons/userIcon.png" alt="Assistant Icon" width={24} height={24} />
            <div>
              <h3 className="font-semibold text-[#722F37] leading-3 text-sm">Gabriel</h3>
              <span className="text-[#595657] text-sm">Field Analyst</span>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-3 py-2 px-5 mt-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 border w-[50%] text-sm ${
                msg.sender === "user"
                  ? "bg-[#fff] text-[#595657] self-end ml-auto rounded-t-3xl rounded-bl-3xl border-[#595657]"
                  : "bg-[#eeeeee] border-[#C79438] text-gray-800 self-start rounded-t-3xl rounded-br-3xl"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div>
          <ConverstaionPlannerModal/>
        </div>
        

        {/* Input Area */}
        <div className="flex items-center gap-3 w-full mb-2 px-4 ">
          <Plus size={18}/>
          <form onSubmit={handleSend} className="flex w-full gap-2 px-2 py-1 rounded-3xl bg-[#F5F5F5]">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border-none outline-none"
              
            />
            <Button variant={'ghost'} type="submit"><LucideSend size={16} /></Button>
          </form>

        </div>


      </DialogContent>
    </Dialog>
  )
}
