import { NavbarButton } from "@/components/OtherButtons"
import { BlueText } from "@/components/Typo"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function NotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger >
        <NavbarButton iconUrl={"/icons/notificationIcon.png"} />
      </PopoverTrigger>
      <PopoverContent className="w-120 bg-white border-none shadow-lg rounded-2xl">
        <div className="grid gap-4">
          <div className="bg-white p-2 shadow-sm rounded-md">
            <h4 className="leading-none font-medium">Notifications</h4>
          </div>

          <div className="bg-[#F5F5F4] w-full items-center flex justify-between p-2 shadow-sm rounded-md">
            <h4 className="leading-none font-medium">Notifications</h4>
            <Button variant="ghost" className="w-full justify-start"><BlueText text="Mark all as read" /></Button>
          </div>

        </div>
      </PopoverContent>
    </Popover>
  )
}
