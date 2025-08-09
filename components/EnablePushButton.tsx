"use client";
import React from "react";
import { Button } from "./ui/button";
import { ClipboardCheck } from "lucide-react";

export default function SubscribeButton() {
  const handleClick = async () => {
    if (window.OneSignal?.Notifications) {
      try {
        await window.OneSignal.Notifications.requestPermission();
        // Or: window.OneSignal.Slidedown?.promptPush();
      } catch (err) {
        console.error("Permission request failed", err);
      }
    } else {
      console.warn("OneSignal not loaded yet");
    }
  };

  return (
    <Button variant="secondary" onClick={handleClick}>
      <ClipboardCheck />
    </Button>
  );
}
