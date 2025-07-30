"use client";

import "./ChatbotUI.css";
import {
  MessageSquare,
  Maximize2,
  Minimize2,
  ArrowLeft,
  EllipsisVertical,
  Search,
  Mic,
  Plus,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BasicTransition from "../animations/BasicTransition";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import ChatbotIcons from "./ChatbotIcons";
import { ConverstaionPlannerModal } from "../conversationPlanner/ConversationPlanner";

export default function ChatbotUI({
  open,
  setOpen,
  showChatButton = true
}: {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
  showChatButton?: boolean;
}) {
  const [enlarged, setEnlarged] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToEnd();
      }, 20);
    }
  }, [open, enlarged]);

  const scrollToEnd = (delay = 25) => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, delay);
  };

  const handleSend = () => {
    if (!input.trim()) {
      inputRef.current?.focus();
      return;
    }
    setIsSending(true);
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    scrollToEnd();
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "I have summarized the context, provided a proposed game plan, with scenarios on likely objections." },
      ]);
      setIsSending(false);
      scrollToEnd();
    }, 2000);
  };

  return (
    <>
      {open && <BasicTransition show={enlarged}>
        <div 
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setEnlarged(false)}
        />  
      </BasicTransition>}

      {<BasicTransition show={open} className={`
        chatbot-ui-parent
        fixed z-50
        ${open
          ? enlarged
            ? "inset-0 flex items-center justify-center p-4"
            : "bottom-6 right-6"
          : "bottom-6 right-6"}
      `}>
        <div
          className={`
            chatbot-ui
            flex flex-col bg-white shadow-2xl overflow-hidden
            border border-gray-300 rounded-[16px]
            ${enlarged
              ? "w-full max-w-[720px] h-[80vh]"
              : "w-100 h-120"}
          `}
        >
          <div className="chatbot-ui__header flex justify-between items-start p-3 gap-3 bg-[#FAFAF9] shadow-xl py-2">
            <div className="flex items-center h-full">
              <button
                onClick={() => { 
                  setOpen(false);
                  setEnlarged(false);
                }}
                className="color-[#2D2D2D] hover:text-gray-600"
              >
                <ArrowLeft/>
              </button>
            </div>
            <div className="flex grow items-center gap-1">
              <Image src="/icons/userIcon.png" alt="Assistant Icon" width={24} height={24} />
              <div>
                <h3 className="font-semibold text-[#722F37] leading-3 text-sm">Gabriel</h3>
                <span className="text-[#595657] text-sm">Field Analyst</span>
              </div>
            </div>
            <div className="flex items-center h-full gap-1">

              <Button variant="outline" size="icon" className="rounded-4xl hover:bg-gray-200">
                <Search />
              </Button>

              <Button variant="outline" size="icon" className="rounded-4xl hidden md:flex hover:bg-gray-200"
                onClick={() => {
                  setEnlarged((e) => !e);
                }}
              >
                {enlarged ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-4xl hover:bg-gray-200">
                    <EllipsisVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-[#DEE2E6] shadow w-[120px] bg-white rounded-2xl" align="start">
                  <DropdownMenuGroup>
                    <DropdownMenuItem  >
                      Message
                    </DropdownMenuItem>
                    <Separator/>
                    <DropdownMenuItem>
                      Call
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
          </div>

          <div className="chatbot-ui__content flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.from === "bot"
                    ? "flex items-start"
                    : "flex items-end justify-end"
                }
              >
                <div
                  className={`max-w-[70%] min-w-[100px] px-3 py-2 text-sm animate-in fade-in ${
                    msg.from === "bot"
                      ? `
                        rounded-[24px_24px_24px_0px]
                        border
                      border-[var(--Color-Normal,#C79438)]
                      bg-[var(--slate-60,#EEE)]
                      `
                      : `
                        rounded-[24px_24px_0px_24px]
                        border
                        border-[var(--Color-Text, #595657)]
                      bg-[#F2F4F5]
                      `
                  }`}
                >
                  {msg.text}
                  {i > 0 && msg.from === "bot" && <div className="mt-2">
                    <ConverstaionPlannerModal />
                  </div>}
                  <div className="text-right text-gray-400 text-xs mt-2">9:03 AM</div>
                </div>
              </div>
            ))}
            
            {isSending && <div className="flex w-full mt-5 mb-3 justify-center">
              <ChatbotSpinner />
            </div>}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-ui__footer flex items-center border-t border-gray-200 p-2">
            <div className="pr-1">
              <button
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <Plus size={18}/>
              </button>
            </div>
            <div className="flex grow bg-gray-100 rounded-full p-1">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Type message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <div className="flex gap-1">
                <button
                  onClick={handleSend}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <Mic size={18} />
                </button>
                <button
                  onClick={handleSend}
                  className="p-2 rounded-full hover:bg-gray-200"
                >
                  <ChatbotIcons.GoldenSend size={16} />
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </BasicTransition>}

      {showChatButton && !open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-[50px] h-[50px] primary-button-background rounded-full shadow-lg transition fixed z-49 bottom-4 right-4"
        >
          <MessageSquare className="text-white" size={24} />
        </button>
      )}
    </>
  );
}

function ChatbotSpinner() {
  return (
    <div
      className={`
        inline-block
        animate-spin
        rounded-full
        border-2 border-solid
        border-current
        border-r-transparent
        h-8 w-8
        text-gray-400
      `}
      role="status"
      aria-label="loading"
    />
  );
}