"use client";
import { useEffect, useState } from "react";

export function usePWADetect() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // ✅ Check if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true ||
      localStorage.getItem("pwa_installed") === "true"
    ) {
      setIsInstalled(true);
    }

    // ✅ Listen for install prompt availability
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // ✅ Listen for installation completion
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      localStorage.setItem("pwa_installed", "true");
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response to install prompt:", outcome);

    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return { isInstalled, isInstallable, installApp };
}
