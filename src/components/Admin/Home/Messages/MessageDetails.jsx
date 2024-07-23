

const MessageDetails = () => {
    return (
        <div className="w-full flex justify-between items-center pt-4 px-4 gap-16">
            <div className="w-2/5 overflow-y-auto h-[90vh]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div>
                    <h1 className="text-lg font-semibold">Messages</h1>
                    <input type="search" name="search" placeholder="search" className="w-full my-6 text-white focus:outline-none border border-none bg-[#92A8C6] py-4 px-4 rounded-2xl"/>
                </div>
                <div className="bg-[#D9D9D9] h-[60vh] mt-16">
                    <div className="flex justify-between px-4 py-4">
                        <h2>Chats</h2>
                        <h2>Calls</h2>
                        <h2>Profiles</h2>
                    </div>
                </div>
            </div>   
            <div className="w-1/2 overflow-y-auto h-[90vh]" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                <div>
                    
                    <input type="search" name="search" placeholder="search" className="w-full mb-6 mt-12 text-white focus:outline-none border border-none bg-[#92A8C6] py-4 px-4 rounded-2xl"/>
                </div>
                <div className="bg-[#D9D9D9] h-[60vh] mt-16">
                    <div className="flex justify-between px-4 py-4">
                        
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default MessageDetails
