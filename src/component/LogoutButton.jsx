import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
const LogoutButton = () => {
  const [showModal, setShowModal] = useState(false);

  const { logout, loading } = useLogout();

  const handleLout = async () => {
    await logout();
  };
  return (
    <>
      <div className="mt-auto" onClick={() => setShowModal(true)}>
        <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
      </div>
      <dialog
        open={showModal}
        onClose={() => setShowModal(false)}
        className="modal"
      >
        <div className="modal-box flex flex-col gap-3 justify-center items-center">
			<div className="flex flex-col gap-1 w-full items-center">
			<h3 className="font-bold text-lg">Are you sure?</h3>
			<p className="py-4">Do you want to logout?</p>
			</div>
          <div className="modal-action w-full flex gap-4 items-center justify-center">
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-error text-white"

            >
              No
            </button>
            <button
              onClick={() => {
                handleLout();
              }}
              className="btn btn-primary text-white"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Yes"
              )}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default LogoutButton;
