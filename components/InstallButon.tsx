"use client";

// import { usePWAInstall } from "@/lib/hooks/usePWAInstall";
// import { Download, DownloadIcon } from "lucide-react";
// import { Button } from "./ui/button";

// export default function InstallButton() {
//   const { isInstallable, installApp } = usePWAInstall();

//   if (!isInstallable) return null;

//   return (
//     <Button onClick={installApp}>
//       <DownloadIcon size={18} />
//       Install App
//     </Button>
//   );
// }


import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

import Image from "next/image";

function InstallModal({
  open,
  onOpenChange,
  onInstallClick
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onInstallClick: () => void
}) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" w-[330px] flex flex-col bg-white border-none rounded-2xl p-6">
        <div className="flex gap-2">
            <Image
                src='/icons/Logo-dark.png'
                alt='logo'
                width={70}
                height={50}
            />
            <p className="text-sm">Grow your relationships, time, <br/>influence and impact!</p>
        </div>
        <div className="flex justify-center items-center">
            <Button className="text-white rounded-[8px]" onClick={onInstallClick}>Install </Button>
        </div>
            


      </DialogContent>
    </Dialog>
  )
}

export default InstallModal
