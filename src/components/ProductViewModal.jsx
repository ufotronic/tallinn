import { Button, Dialog, DialogPanel, DialogBackdrop, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Status from './Status';
import { Divider } from '@mui/material';
import { MdClose, MdDone } from 'react-icons/md';


function ProductViewModal({open, setOpen, product, isAvailable}) {
  
    //let [isOpen, setIsOpen] = useState(true)
  //function open() {    setOpen(true) }
  //function close() {setOpen(false)}

   const {id, productName, image, description, quantity, price, discount, specialPrice } = product;

   const handleClickOpen = () => {
    setOpen(true);
   }

  return (
    <>


      <Dialog open={open} as="div" className="relative z-10 " onClose={close}>

        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>


        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all, md:max-w-[620px] md:min-w-[620px] w-full" >

                {image && (
                <div className="flex justify-center aspect-[3/2]">
                    <img 
                        className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                        src={image}
                        alt={productName}>
                    </img>
                </div>

                )}

                <div className='px-6 pt-10 pb-2'>
                        <DialogTitle as="h1" className="lg:text-3xl sm:text-2xl text-xl font-semibold leading-6 text-gray-800 mb-4">
                
                                {productName}

                        </DialogTitle>

                    <div className="space-y-2 text-gray-700 pb-4">
                            <div className="flex items-center justify-between gap-2">
                                {specialPrice ? (
   
                                <div className="flex flex-col">
                                    <span className="text-gray-400 line-through">
                                        ${Number(price).toFixed(2)}
                                    </span>
                                    <span className="text-xl font-bold text-slate-700">
                                        ${Number(specialPrice).toFixed(2)}              
                                    </span>
                                </div>
   
   
                                ) : (
            
                                    <div>
                                        <span className="text-xl font-bold text-slate-700">
                                            {"    "}
                                            ${Number(price).toFixed(2)}              
                                        </span>
            
                                    </div>
                                )}
                                {isAvailable ? (
                                    <Status
                                    text="In Stock"
                                    icon={MdDone}
                                    bg="bg-teal-200"
                                    color="text-teal-900"
                                    />
                                ) : (
                                    <Status
                                    text="Out-Of-Stock"
                                    icon={MdClose}
                                    bg="bg-rose-200"
                                    color="text-rose-700"
                                    />
                                )}






                            </div>
                            <Divider/>
                            <p className="mt-2 text-sm/6 text-slate-600">

                                {description}

                            </p>

                            
                        </div>
                    </div>



            <div className="px-6 py-4 flex justify-end gap-4">
              <button
                onClick={() => setOpen(false)}
                type="button"
                className="px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-700 hover:text-slate-800 hover:border-slate-800 rounded-md "
              >
                Close
              </button>
            </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default ProductViewModal;
