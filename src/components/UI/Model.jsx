import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
const Model = (props) => {
   const { isOpen, close , open } = props;

    return (
        <>
            <Button
                onClick={open}
                className="rounded-md bg-indigo-500  px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30"
            >
                Open dialog
            </Button>

            <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
            >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            {props.title && <DialogTitle
                                as="h3"
                                className="text-base/7 font-medium text-black"
                            >
                                {props.title}
                            </DialogTitle>}
                           
                            <div className="mt-4">
                                
                                    {props.children }
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default Model;
