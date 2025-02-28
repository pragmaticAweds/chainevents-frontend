'use client'

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar'; 
import { BiIdCard, BiUser, BiEnvelope } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { SiEthereum, SiSolana } from 'react-icons/si';
import { PiTicket } from "react-icons/pi";
import { LuWallet } from "react-icons/lu";
import { PiBarn } from "react-icons/pi";
import { LuFileQuestion } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import RegistrationModal from '../../components/RegistrationModal';
import EventCapacityModal from "../../components/EventCapacityModal";
import NewEventType from "../../components/NewEventType";
import AddQuestionModal from "../../components/AddQuestionModal";

const Registration = () => {
    
    const [modals, setModals] = useState({
        registration: false,
        eventCapacity: false,
        addQuestion: false,
        newEventType: false,
    });

    const openModal = (modalName) => {
        setModals({ ...modals, [modalName]: true });
    };

    const closeModal = (modalName) => {
        setModals({ ...modals, [modalName]: false });
    };

    return (
        <div className="min-h-screen bg-primaryBackground text-white">
            {/* <Navbar /> */}
            
            <div className="flex flex-col md:flex-row mt-7">
                {/* Sidebar */}
                <div className="hidden md:block md:ml-7">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 max-w-5xl mx-auto p-5 md:p-8">
                    
                    {/* Top Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        <button
                            className="custom-button-bg w-full text-white py-3 rounded-md flex items-center justify-center space-x-2"
                            onClick={() => openModal('registration')} 
                        >
                            <span>Registration</span>
                            <PiTicket className="text-green-500" />
                        </button>
                        <RegistrationModal
                            isOpen={modals.registration}
                            onClose={() => closeModal('registration')}
                        />
                        <button
                            className="custom-button-bg w-full text-white py-3 rounded-md flex items-center justify-center space-x-2"
                            onClick={() => openModal('eventCapacity')} 
                        >
                            <span>Event Capacity</span>
                            <PiBarn className="text-yellow-600" />
                        </button>
                        <EventCapacityModal
                            isOpen={modals.eventCapacity}
                            onClose={() => closeModal('eventCapacity')}
                        />
                    </div>

                    {/* Registration Questions */}
                    <div className="bg-transparent p-6 rounded-md mb-8">
                        <h2 className="text-lg font-bold mb-4">Registration Questions</h2>
                        <p className="text-white">
                            We will ask guests the following questions when they register for events.
                        </p>

                        {/* Personal Information */}
                        <div className="mb-6 mt-6">
                            <h3 className="text-lg font-medium flex items-center space-x-2 mb-2">
                                <BiIdCard className="text-green-500" />
                                <span>Personal Information</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-center custom-button-bg py-3 px-4 rounded-md">
                                    <BiUser className="text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="bg-transparent border-none focus:outline-none text-white placeholder-gray-400 flex-1"
                                        required
                                    />
                                </div>
                                <div className="flex items-center custom-button-bg py-3 px-4 rounded-md">
                                    <BiEnvelope className="text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="bg-transparent border-none focus:outline-none text-white placeholder-gray-400 flex-1"
                                        required
                                    />
                                </div>
                                <div className="relative flex items-center custom-button-bg py-3 px-4 rounded-md">
                                    <MdOutlinePhoneInTalk className="text-gray-400 mr-2" />
                                    <select
                                        className="bg-transparent border-none focus:outline-none text-white appearance-none flex-1"
                                    >
                                        <option>Off</option>
                                        <option>Optional</option>
                                        <option>Required</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Web3 Identity */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium flex items-center space-x-2 mb-2">
                                <LuWallet className="text-purple-500" />
                                <span>Web3 Identity</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center justify-between custom-button-bg py-3 px-4 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <SiEthereum className="text-white" />
                                        <span>ETH Address</span>
                                    </div>
                                    <span className="text-gray-400">Off</span>
                                </div>
                                <div className="flex items-center justify-between custom-button-bg py-3 px-4 rounded-md">
                                    <div className="flex items-center space-x-2">
                                        <SiSolana className="text-white" />
                                        <span>SOL Address</span>
                                    </div>
                                    <span className="text-gray-400">Off</span>
                                </div>
                            </div>
                        </div>

                        {/* Custom Questions */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium flex items-center space-x-2 mb-2">
                                <LuFileQuestion className="text-blue-500" />
                                <span>Custom Questions</span>
                            </h3>
                            <button
                                className="bg-gray-500 text-white py-3 px-4 rounded-md flex items-center space-x-2"
                                onClick={() => openModal('addQuestion')} 
                            >
                                <FaPlus />
                                <span>Add Question</span>
                            </button>
                            <AddQuestionModal
                                isOpen={modals.addQuestion}
                                onClose={() => closeModal('addQuestion')}
                            />
                        </div>
                    </div>

                    {/* Tickets Section */}
                    <div className="mb-4 flex flex-col md:flex-row items-center">
                        <h2 className="text-xl font-semibold mb-2 md:mb-0">Tickets</h2>
                        <button
                            className="bg-gray-500 text-white py-3 px-4 rounded-md flex items-center space-x-2 ml-auto"
                            onClick={() => openModal('newEventType')} 
                        >
                            <FaPlus />
                            <span>New Event Type</span>
                        </button>
                        <NewEventType
                            isOpen={modals.newEventType}
                            onClose={() => closeModal('newEventType')}
                        />
                    </div>
                    <div className="custom-button-bg py-3 px-4 rounded-md flex items-center justify-between">
                        <span>Standard Free</span>
                        <span>0 Registered</span>
                    </div>

                    {/* Registration Email */}
                    <div className="mt-8 bg-inherit p-6 rounded-md mb-16">
                        <h2 className="text-lg font-bold mb-4">Registration Email</h2>
                        <p className="text-white mb-4">
                            Upon registration, we send guests a confirmation email that includes a calendar invite. You can add a custom message to the email.
                        </p>
                        <button className="custom-button-bg p-3 text-gray-400 rounded flex items-center space-x-2">
                            <span>Customized Email</span>
                            <BiEnvelope className="text-gray-400 mr-2" />
                        </button>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Registration;
