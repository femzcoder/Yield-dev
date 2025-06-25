interface ButtonProps{
    iconUrl?: string;
    handleClick?: () => void;
    disabled?: boolean;
    styles?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
}

interface SlideCardProps { title: string, description: string, imageUrl: string, buttonText?: string, handleClick?: () => void }