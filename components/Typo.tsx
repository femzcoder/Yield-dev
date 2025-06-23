import Link from "next/link";

export const TitleText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={`font-bold text-gray-800 dark:text-white ${style}`}>
      {text}
    </h1>
  );
};
export const PurpleText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={` text-[#7A003F] dark:text-white ${style}`}>
      {text}
    </h1>
  );
};
export const BlueText = ({text, style}: {text: string, style?: string}) => {
  return (
    <h1 className={` text-[#007AFF] dark:text-white ${style}`}>
      {text}
    </h1>
  );
};
export const TextWithIcon = ({text, icon, style}: {text: string, icon: React.ReactNode, style?: string}) => {
  return (
    <h1 className={`flex gap-1 items-center text-gray-800 dark:text-white ${style}`}>
      {icon}
      {text}
    </h1>
  );
};

export const LinkText = ({text, linkUrl, style}: {text: string, linkUrl: string, style?: string}) => {
  return (
    <Link href={linkUrl} className={`text-[#007AFF] ${style}`}>{text}</Link>
  );
};