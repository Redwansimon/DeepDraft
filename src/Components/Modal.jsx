import React from 'react'

const Modal = ({isOpen,onClose}) => {



  return (
    <div className={`fixed flex top-0 left-0 w-full h-full items-center justify-center ${isOpen?"":"hidden"}`}>
      <div className="modal-container">
        <div className="bg-gray-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
              {/* midal contant */}
            <h2 className='text-xl font-semibold mb-4 mt-6  uppercase'>Please Login Here!</h2>
            <form className='px-4 '>
                <div className='mb-5'>
                    <input className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' type="email" name="email" id="email" placeholder='Enter your email'/>
                </div>
                <div className='mb-5'>
                    <input className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' type="email" name="password" id="password" placeholder='Enter your password'/>
                </div>
                <div>
                    <button className='hover:shadow-md rounded-md bg-orange-600 hover:bg-gray-400 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                </div>

            </form>
            {/* modal clode btn */}
            <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-5 '>
                Close
            </button>
        </div>
          
      </div>
    </div>
  )
}

export default Modal
