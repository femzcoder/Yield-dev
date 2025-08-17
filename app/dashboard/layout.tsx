import { ChatbotProvider } from "@/components/chatbot/Chatbot";
import DashboardLayoutProvider from "@/components/common/LayoutProvider";
// import { useEffect } from "react";


export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>


      <body
      >
          <ChatbotProvider>
            <DashboardLayoutProvider>
              {children}
            </DashboardLayoutProvider>
          </ChatbotProvider>
      </body>
    </html>
  );
}