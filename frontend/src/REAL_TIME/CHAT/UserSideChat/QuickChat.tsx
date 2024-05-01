import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../../../AxiosConfig/axiosInstance";
interface QuickChatProps {
  onDoctorSelect: (conversationId: any) => void;
  socket:any
}
const QuickChat: React.FC<QuickChatProps> = ({ onDoctorSelect ,socket}) => {
  const { convesationId } = useParams();
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null); // State variable to store the selected doctor
  const user = useSelector((state: any) => state.persisted.auth.user);
  const userId = user ? user._id : null;

  const handleDoctorSelection = (doctor: any) => {
    setSelectedDoctor(doctor);
  };
// console.log(selectedDoctor,"ithaan doc");

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/auth/getConverstations?id=${
            user ? user._id : null
          }`
        );
        if (response) {
          setDoctors(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);



  return (
    <div>
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div className="ml-2 font-bold text-2xl">QuickChat</div>
        </div>

        {/* <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
          {selectedDoctor && (
            <div  className="flex items-center mb-4">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src={selectedDoctor.image}
                  alt="Avatar"
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm font-semibold mt-2">{selectedDoctor.name}</div>
              <div className="text-xs text-gray-500">{selectedDoctor.specialization}</div>
              <div className="flex flex-row items-center mt-3">
                <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div className="leading-none ml-1 text-xs">Active</div>
              </div>
            </div>
          )}
        </div> */}

        {/* Display list of doctors */}
        <div className="flex flex-col mt-8">
          <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Active Conversations</span>
            <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
              {doctors.length}
            </span>
          </div>
          <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
            {doctors &&
              doctors.map((doctor, index) => (
                <button
                  key={index}
                  className={`flex flex-row items-center hover:bg-indigo-100 rounded-xl p-2 ${
                    selectedDoctor === doctor ? "bg-indigo-300" : ""
                  }`}
                  onClick={() => {
                    onDoctorSelect({
                      conversationId: doctor.conversation._id,
                      doctor: doctor.doctor,
                    });
                    handleDoctorSelection(doctor);
                  }}
                >
                  <div className="h-8 w-8 bg-indigo-200 rounded-full overflow-hidden">
                    <img
                      src={doctor.doctor.image}
                      alt={doctor.doctor.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-2 text-sm font-semibold">{`Dr. ${doctor.doctor.name}`}</div>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickChat;
