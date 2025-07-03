"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";
import ChatbotUI from "./ChatbotUI";

interface ChatbotContext {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const ChatbotContext = createContext<ChatbotContext>({
  open: () => {},
  close: () => {},
  toggle: () => {}
});

export const ChatbotProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(s => !s);
  };

  return (
    <ChatbotContext.Provider value={{ open, close, toggle }}>
      {children}
      <ChatbotUI open={isOpen} setOpen={setIsOpen} />
    </ChatbotContext.Provider>
  );
};

export function useChatbot() {
  return useContext(ChatbotContext);
}