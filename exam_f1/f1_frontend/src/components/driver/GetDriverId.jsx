import { useState } from "react";

const GetDriverId = ({onGetDriver}) =>{
    const [driverId, setDriverId] = useState("");
    const [isGetDriverFormVisible, setIsGetDriverFormVisible] = useState(false);

    const toggleGetDriverForm = () => {
        setIsGetDriverFormVisible(!isGetDriverFormVisible);
    }
    const handleGetDriverId = () => {
        onGetDriver(driverId);
        setDriverId("");
    }

    return(
        <div
        className="w-2/3 md:w-1/2 lg:w-1/4 bg-black p-2 flex flex-col space-y-2 rounded-lg ">
            <button
                onClick={()=>toggleGetDriverForm()}
                className="inline-flex items-center justify-center max-h-full max-w-full p-3 rounded-lg sm:w-auto sm:max-w-xs px-4 sm:px-8 font-light tracking-wide text-white transition duration-200 bg-black  hover:bg-red-700"
            >
                Search For A Driver ID
            </button>
            {isGetDriverFormVisible && (
            <div
            className=" p-2 flex flex-col space-y-2">
                <p
                className="text-sm text-white">Enter or choose a driver ID</p>
                <input 
                    type="number"
                    placeholder="Driver ID"
                    value={driverId}
                    onChange={(e) => setDriverId(e.target.value)}
                    className="w-full p-2 border-gray-300 rounded"

                />
                <button
                    onClick={handleGetDriverId}
                    className="w-full bg-white text-black transition duration-200 hover:bg-blue-700 font-bold p-2 rounded hover:text-white"
                >
                Get Driver By Id
                </button>
            </div>
        )}
        </div>
    )
}
export default GetDriverId;