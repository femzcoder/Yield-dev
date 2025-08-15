import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ChatbotProvider } from "@/components/chatbot/Chatbot";
import DashboardLayoutProvider from "@/components/common/LayoutProvider";


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  // const messages = await getMessages();


  return (
    <html lang={locale}>
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