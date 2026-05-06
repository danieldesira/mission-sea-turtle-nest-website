"use client";

import Button from "../common/button";

export default function WebNotifications() {
  const enableNotifications = () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker.register("/sw.js");
    }
  };

  return <Button onClick={enableNotifications}>Enable notifications</Button>;
}
