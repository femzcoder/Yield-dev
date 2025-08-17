import "react-onesignal";

declare module "react-onesignal" {
  interface OneSignal {
    registerForPushNotifications: () => Promise<void>;
  }
}


// Extend the Window interface to include OneSignal
interface OneSignalAPI {
  Notifications?: {
    requestPermission: () => Promise<void>;
  };
  Slidedown?: {
    promptPush: () => void;
  };
}

interface Window {
  OneSignal?: OneSignalAPI;
}
