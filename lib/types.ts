export interface ButtonProps{
    iconUrl?: string;
    handleClick?: () => void;
    disabled?: boolean;
    styles?: string;
    text?: string;
    type?: "button" | "submit" | "reset";
}

export interface SlideCardProps { title: string, description: string, imageUrl: string, buttonText?: string, handleClick?: () => void }

export type TabItem = {
  title: string;
  content: React.ReactNode;
};

export type PrimaryTabContainerProps = {
  TabData: TabItem[];
  hasAssistant?: boolean;
};

export type Message = {
  id: number;
  sender: "user" | "bot";
  text: React.ReactNode; // can be string or JSX
};

export type User = {
  name: string;
  position: string;
};

export type ChatModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  messages: Message[];
  user: User;
  onSendMessage?: (text: string) => void;
};

export type OwnPostProps = {
  icon: string;
  name?: string;
  time: string;
  title?: string;
  description?: string;
  tags?: string[];
  likeCount?: number;
  commentCount?: number;
  repostCount?: number;
  engagementCount?: number;
  handleLike?: () => void;
  handleComment?: () => void;
  handleRepost?: () => void;
  handleEngagement?: () => void;
};


// types/needs-form.ts
export type NeedsFormValues = {
  // Prospect Needs
  wealthAccumulation: string[];
  protection: string[];

  // Savings & Investment
  beneficiary: string;
  calculationType: string;
  amountNeeded: number;
  yearsNeeded: number;
  totalAmountNeeded: number;

  // Critical Illness
  c_beneficiary: string;
  c_calculationType: string;
  c_amountNeeded: number;
  c_yearsNeeded: number;
  c_liabilities: string;
  c_existingSupport: string;
  c_totalAmountNeeded: number;
};
export type ProfileFormValues = {
  firstname: string
  lastname: string
  gender: string
  marital_status: string
  dob: string
  // Prospect Needs
  occupation: string
  employer: string
  citizen_status: string
  country: string
  province: string
  city: string
  id_method: string
  id_number: string

    phone: string
  email: string
  address: string

    degree: string
    languages: {
    name: string
    level: "basic" | "fluent"
  }[]
};


