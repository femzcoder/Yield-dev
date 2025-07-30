'use client'

import { ChatModalProps, OwnPostProps, PrimaryTabContainerProps, TabItem } from "@/lib/types";
import Image from "next/image";
import { useChatbot } from "./chatbot/Chatbot";
import { Label } from "@/components/ui/label"
import { ArrowLeft, BusFront, LucideSend, MessageSquare, Plus, Send, ThumbsUp } from "lucide-react"
// import { ConverstaionPlannerModal } from "./ConversationPlanner"
import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TitleText } from "./Typo";
import { Textarea } from "./ui/textarea";

type EmailModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSendEmail: (message: { recipient: string; subject: string; message: string }) => void;
};

export function ChatModal({
  open,
  onOpenChange,
  messages,
  user,
  onSendMessage,
}: ChatModalProps) {
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (onSendMessage) onSendMessage(input);
    setInput("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col bg-white border-none rounded-3xl p-0">
        {/* Header */}
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <Image src="/icons/userIcon.png" alt="Assistant Icon" width={24} height={24} />
            <div>
              <h3 className="font-semibold text-[#722F37] leading-3 text-sm">{user.name}</h3>
              <span className="text-[#595657] text-sm">{user.position}</span>
            </div>
          </div>
        </DialogHeader>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 py-2 px-5 mt-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 border w-[60%] text-[12px] ${
                msg.sender === "user"
                  ? "bg-[#fff] text-[#595657] self-end ml-auto rounded-t-3xl rounded-bl-3xl border-[#595657]"
                  : "bg-[#eeeeee] border-[#C79438] text-gray-800 self-start rounded-t-3xl rounded-br-3xl"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 w-full mb-2 px-4">
          <Plus size={18} />
          <form
            onSubmit={handleSend}
            className="flex w-full gap-2 px-2 py-1 rounded-3xl bg-[#F5F5F5]"
          >
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border-none outline-none"
            />
            <Button variant="ghost" type="submit">
              <LucideSend size={16} />
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SendEmailModal({
  open,
  onOpenChange,
  onSendEmail,
}: EmailModalProps) {
  const [recipient, setRecipient] = useState("Pedro Duarte");
  const [subject, setSubject] = useState("Markets are down - how should we respond?");
  const [message, setMessage] = useState(`Dear [Client Name],

Markets are shifting. The US Fed remains cautious, global trade tensions persist, and economic signals are mixed—all of which have implications for Singapore as a regional hub.

Here’s what we’re watching:
- Global interest rates and how they may influence Singapore’s.
- Trade flows impacting our supply chains and economic growth.
- Geopolitical risks affecting investor sentiment.

Your plan remains built for resilience, with diversification and long-term focus at its core. 
To stay ahead: www.y!elds/dailydigest/.com`);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    onSendEmail({ recipient, subject, message });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] lg:w-[700px] h-[70vh] flex flex-col bg-white border-none rounded-3xl p-0 pb-6">
        <DialogHeader className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1">
            <ArrowLeft onClick={() => onOpenChange(false)} className="cursor-pointer" />
            <TitleText text="Send Email" />
          </div>
        </DialogHeader>

        <form onSubmit={handleSend} className="flex-1 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="recipient">Recipient</Label>
              <Input
              className="outline-none roun"
                id="recipient"
                name="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button className="text-white" type="submit">Send Email</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}


export const AssistantContainer = ({ children }: { children: React.ReactNode }) => {
  const chatbot = useChatbot();

  return (
    <div className="p-2 md:p-4 space-y-6">
      <div className="bg-white pl-2 flex items-center justify-between gap-4">
        <h3 className="font-semibold">Need Assistant?</h3>
        <div className="flex items-center gap-2 border-2 border-[#722F37] rounded-l-full px-2 py-1" onClick={() => {
          chatbot.toggle();
        }}>
          <Image src="/icons/userIcon.png" alt="Assistant Icon" width={24} height={24} />
          <div>
            <h3 className="font-semibold text-[#722F37]">Gabriel</h3>
            <span className="text-[#595657] text-sm">Field Analyst</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export const FlexContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
      {children}
    </div>
  );
}

export const Grid2Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}

export const PrimaryTabContainer = ({ TabData }: PrimaryTabContainerProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(TabData[0]);

  return (
    <AssistantContainer >
      <>
        <div className="w-full grid grid-cols-4 p-2 bg-[#F2F1F1]">
          {TabData.map((tab, index) => (
            <button
              onClick={() => setActiveTab(tab)}
              key={index}
              className={`w-full p-2 text-center ${
                activeTab.title === tab.title
                  ? 'primary-button-background text-white rounded-3xl'
                  : 'bg-transparent text-[#722F37]'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="lg:p-4">{activeTab.content}</div>      
      </>
     
    </AssistantContainer>

  );
};
export const PrimaryTabContainerNoAssistant = ({ TabData }: PrimaryTabContainerProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(TabData[0]);

  return (
      <>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 p-2 bg-[#F2F1F1]">
          {TabData.map((tab, index) => (
            <button
              onClick={() => setActiveTab(tab)}
              key={index}
              className={`w-full p-2 text-center ${
                activeTab.title === tab.title
                  ? 'primary-button-background text-white rounded-3xl'
                  : 'bg-transparent text-[#722F37]'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="lg:p-4">{activeTab.content}</div>      
      </>

  );
};

export const SecondaryTabContainer = ({ TabData }: PrimaryTabContainerProps) => {
  const [activeTab, setActiveTab] = useState<TabItem>(TabData[0]);

  return (
    <div >
      <div className="w-full overflow-x-auto lg:w-[80%] flex  lg:grid grid-cols-4 p-2">
        {TabData.map((tab, index) => (
          <button
            onClick={() => setActiveTab(tab)}
            key={index}
            className={`min-w-[150px] w-full min p-2 text-left border-b ${
              activeTab.title === tab.title
                ? 'gradient-text border-[#C58B18] font-semibold'
                : 'border-[#DBDBDB] text-[#595657]'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="p-4">{activeTab.content}</div>
    </div>
  );
};

export const OwnPost = ({icon, title, name,time, description, tags, likeCount, commentCount, repostCount, engagementCount}: OwnPostProps) => {
  return (
    <div className="">

      <div className="bg-[#F2F1F1] p-3 rounded-lg space-y-2">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="Post Icon" width={24} height={24} />
          <p className="font-semibold">{name}</p>
          <Image src={"/icons/verified.svg"} alt="verified Icon" width={18} height={18} />
          <p className="text-sm text-[#595657]">{time}</p>
        </div>

        <div>
          <h4 className="font-semibold text-[#722F37]">{title}</h4>
          <p className="text-sm text-[#595657]">{description}</p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          {tags && tags.map((tag, index) => (
            <span key={index} className="text-xs text-[#007AFF] font-medium  px-2 py-1 rounded-full">#{tag}</span>
          ))}
        </div>        
      </div>

      <div className="flex items-center gap-10 bg-white w-full p-3">
        <span className="text-xs flex items-center"><ThumbsUp size={16}/> {likeCount || 0} </span>
        <span className="text-xs flex items-center"><MessageSquare size={16}/> {commentCount || 0} </span>
        <span className="text-xs flex items-center"><Send size={16}/> {repostCount || 0} </span>
        <span className="text-xs flex items-center"><BusFront size={16}/> {engagementCount || 0} </span>
      </div>
    </div>
  );
}
export const ReaderPost = ({icon, name,time, description, likeCount}: OwnPostProps) => {
  return (
    <div style={{borderLeft:'4px solid rgba(199, 148, 56, 0.6)'}} className="rounded-[12px]">

      <div className="p-3 rounded-lg space-y-2">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="Post Icon" width={24} height={24} />
          <p>{name}</p>
          <p className="text-sm text-[#595657]">{time}</p>
        </div>

        <div>
          <p className="text-sm text-[#595657]">{description}</p>
        </div>
     
      </div>

      <div className="flex items-center gap-10 bg-white w-full p-3">
        <span className="text-xs flex items-center gap-2"><ThumbsUp size={16}/> {likeCount || 0} </span>
      </div>
    </div>
  );
}


