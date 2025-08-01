import { ChatbotProvider } from "@/components/chatbot/Chatbot";
import DashboardLayoutProvider from "@/components/common/LayoutProvider";


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