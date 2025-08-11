
import { FormSelect, FormTextArea } from "@/components/common/FormInput"
import { FileUpload } from "@/components/FileUpload"
import { TitleText } from "@/components/Typo"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

function Feedback() {
  const [profileData, setProfileData] = useState({
    feedbackType: "",
    description: "",
    memberId:'0000',
  })

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile submitted:", profileData)
  }

  return (
      <div className=" flex flex-col bg-white border-none md:rounded-2xl p-0 h-screen w-full">
        {/* Header */}
        <div className="bg-[#FAFAF9] shadow-xl py-2">
          <div className="flex items-center gap-1 px-4">
            <ArrowLeft onClick={() =>{}} className="cursor-pointer" />
            <h3 className="text-sm font-semibold">Feedback</h3>
          </div>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormSelect
              label="Member ID"
              name="memberId"
              onChange={(value) => handleChange("memberId", value)}
              value={profileData.memberId}
              options={[
                { value: "0000", label: "0000" },
                { value: "1111", label: "1111" },
                { value: "2222", label: "2222" },
              ]}
            />
            <FormSelect
              label="Feedback Type"
              name="feedbackType"
              onChange={(value) => handleChange("feedbackType", value)}
              value={profileData.feedbackType}
              options={[
                { value: "bug", label: "Bug Report" },
                { value: "feature", label: "Feature Request" },
                { value: "other", label: "Other" },
              ]}
            />

          

            <FormTextArea
              label="Description"
              name="description"
              value={profileData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            //   error={touched.description && errors.description ? errors.description : undefined}
            //   helperText="Add a description"
            />

            <div className="md:px-20 mb-6">
              <TitleText text="Attachments"/>

              <FileUpload
                label="Drag and drop a file here "
                accept=".pdf,.jpg,.png"
                onFileSelect={handleFileUpload}
              />

              {selectedFile && (
                <div className="text-sm text-center text-gray-700">
                  Selected: <strong>{selectedFile.name}</strong>
                </div>
              )}

            </div>


            <div>
                <div className='w-full'>
                    <Button className="text-white w-full rounded-[8px]" type="submit">
                        Send Email
                    </Button>                    
                </div>

            </div>
          </form> 
        </div>
      </div>
  )
}

export default Feedback
