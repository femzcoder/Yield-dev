import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface FileUploadProps {
  label?: string;
  accept?: string;
  onFileSelect: (file: File | null) => void;
  error?: string;
}

export const FileUpload = ({
  label = "Upload File",
  accept = "*",
  onFileSelect,
  error,
}: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  return (
    <div className="space-y-2">

      <div
        className={cn(
          "flex  flex-col items-center gap-2 justify-center w-full px-4 py-3 border border-dashed border-[#DCC9A7] rounded-2xl cursor-pointer hover:bg-gray-50 transition",
          error && "border-destructive"
        )}
        onClick={() => fileInputRef.current?.click()}
      >
        {label && <label className="text-sm font-medium">{label}</label>}
        <span className="text-xs text-center text-gray-500">Supports: Images (JPEG, PNG, GIF), PDF, Max file size: 5MB</span>
        
        
        <Button
          variant="default"
          className="text-white rounded-[3xl]"
          type="button"
        >
          Browse
        </Button>
        {/* <span className="text-gray-600 text-sm">Browse</span> */}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
