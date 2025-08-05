"use client";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalProvider() {
  useEffect(() => {
    async function initOneSignal() {
      await OneSignal.init({
        appId: '918b727b-88b7-4c2d-894e-d198d84678b0',
        allowLocalhostAsSecureOrigin: true,
        notifyButton: {
        enable: true,
        size: 'medium',
        position: 'bottom-right',
        offset: { bottom: '10px', right: '10px', left: 'unset' },
        prenotify: true,
        showCredit: false,
        text: {
            'tip.state.unsubscribed': 'Subscribe to notifications',
            'tip.state.subscribed': "You're subscribed to notifications",
            'tip.state.blocked': "You've blocked notifications",
            'message.prenotify': 'Click to subscribe to notifications',
            'message.action.subscribing': 'Subscribing...',   // ✅ REQUIRED FIELD
            'message.action.subscribed': 'Thanks for subscribing!',
            'message.action.resubscribed': 'You’ve resubscribed to notifications',
            'message.action.unsubscribed': 'You won’t receive notifications anymore',
            'dialog.main.title': 'Manage Site Notifications',
            'dialog.main.button.subscribe': 'SUBSCRIBE',
            'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
            'dialog.blocked.title': 'Unblock Notifications',
            'dialog.blocked.message': "Follow browser instructions to allow notifications",
        },
        },

      });
    }
    initOneSignal();
  }, []);

  return null; // ✅ Nothing to render
}
