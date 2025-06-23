import Image from "next/image";

export const AssistantContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-2 md:p-4 space-y-6">
      <div className="bg-white pl-2 flex items-center justify-between gap-4">
        <h3 className="font-semibold">Need Assistant?</h3>
        <div className="flex items-center gap-2 border-2 border-[#722F37] rounded-l-full px-2 py-1">
          <Image src="/icons/userIcon.png" alt="Assistant Icon" width={24} height={24} />
          <div>
            <h3 className="font-semibold text-[#722F37]">Gabriel</h3>
            <span className="text-[#595657]">Field Analyst</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export const FlexContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {children}
    </div>
  );
}

export const Grid2Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  );
}