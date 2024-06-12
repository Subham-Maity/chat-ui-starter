import {OptionsMenuProps} from "@/types/chat.types";

const OptionsMenu: React.FC<OptionsMenuProps> = ({ onMarkAsUnread, onDelete }) => {
    return (
        <div className=" absolute right-0 z-50 mt-2 bg-white shadow-md rounded-md whitespace-nowrap">
            <button
                onClick={onMarkAsUnread}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
                Mark as unread
            </button>
            <button
                onClick={onDelete}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
                Delete
            </button>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Cancel
            </button>
        </div>
    );
};

export default OptionsMenu;