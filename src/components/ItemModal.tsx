import { Dispatch, FC, SetStateAction } from "react";

interface ItemModalProps { 
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const ItemModal: FC<ItemModalProps> = ({ setModalOpen }) => {
    return (
        <div className="absolute inset-0 bg-black/75 flex justify-center items-center">
            <div className="space-y-4 p-3 bg-white">
                <h3 className="text-xl font-semibold">Name of item</h3>
                <input
                    type="text"
                    className="w-full bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-violet-300 focus:ring"
                />
                <div className="grid grid-cols-2 gap-8">
                    <button
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="rounded-md bg-gray-500 p-1 text-xs text-white transition hover:bg-gray-600">
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="rounded-md bg-violet-500 p-1 text-xs text-white transition hover:bg-violet-600">
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;