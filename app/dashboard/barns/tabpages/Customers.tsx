    "use client"
    import { useState } from "react"
    import Budget from "./customertabpages/Budget"
    import Cashflow from "./customertabpages/Cashflow"
    import ReturnOnSpend from "./customertabpages/ReturnOnSpend"
    import NewIncome from "./customertabpages/NewIncome"
    
    const Customer = () =>{
      const [activeTab, setActiveTab] = useState({ title: 'Budget', content: <Budget/> })
      return (
        <div>
            <div className='w-full overflow-x-auto lg:w-[80%] flex  lg:grid grid-cols-4 p-2'>
                {
                    TabData.map((tab, index) => (
                        <button onClick={() => setActiveTab(tab)} key={index} className={`min-w-[150px] w-full min p-2 text-left border-b ${activeTab.title === tab.title ? ' gradient-text border-[#C58B18] font-semibold' : ' border-[#DBDBDB] text-[#595657]'}`}>
                            {tab.title}
                        </button>
                    ))
                }
            </div>
    
            <div className='p-4'>
                {activeTab.content}
            </div>      
        </div>
    
      )
    }
    
    export default Customer
    
    const TabData = [
      { title: 'Budget', content: <Budget/> },
      { title: 'Cashflow', content: <Cashflow/> },
      { title: 'Return on Spend', content: <ReturnOnSpend/> },
      { title: 'New Income', content: <NewIncome/> },
    ];