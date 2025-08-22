import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getClientDate(): string {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return formattedDate.replace(/(\d{2}) (\w+) (\d{4})/, "$1 $2, $3");
}
