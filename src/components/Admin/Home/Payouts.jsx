
import wallet from '../../../assets/wallet.svg';
import Profile from './Dashboard/Profile';

const Payouts = () => {
    return (
        <div className='w-full'>
            <Profile/>
            <div className="flex">
                <div className="border-r border-gray-300 h-full ml-8"></div>
                
                <h2 className='mt-10 -ml-6 '>Payout</h2>
                <div className="p-10 bg-gray-400 h-32 w-4/5 mt-16">
                    <h2 className='text-justify'>Grey Box</h2> 
                    <div className='flex justify-around'>
                    <div className="p-10 bg-gray-400 h-48 w-72 ml-8 flex mt-24">
                            <pre className=' text-center ml-8 '>Rs.56,0000
                    <br/>Payable Amount</pre>
                            
                            <button className='border-2 p-1 -ml-28 mt-16 border-blue-900 text-start ' style={{backgroundColor:"rgba(1, 51, 101, 1)",color:"white",cursor:"pointer"}}>REQUEST</button>
                            
                        </div>
                    <div className="p-10 bg-gray-400 h-48 w-72 ml-8 flex mt-24">
                            <h2 className='text-justify'><img src={wallet} className='ml-16' /><br />
                            <button className='border-2 p-1 ml-4 border-blue-900' style={{backgroundColor:"rgba(1, 51, 101, 1)",color:"white"}}>Edit Payment Details</button></h2>
                        </div>
                    </div>
                    <div className='flex justify-around'>
                        <div className="p-2 bg-gray-400 h-40 w-80 ml-8 flex mt-8">
                            
                            <h2 className='text-justify'>
                                To initiate your payout, please fill out This Form
Your payout will be processed the next Friday.
Repeat this process for your future payouts.</h2>
                    </div>
                    <div className="p-2 bg-gray-400 h-40 w-80 ml-6 flex mt-8">
                <h2 className='text-justify'>Black Box</h2>
                        </div>
                        </div>
                </div>
            </div>

           
           
        </div>
    );
};

export default Payouts;
