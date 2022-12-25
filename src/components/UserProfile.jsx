import Modal from "./Modal";
import CloseIcon from "@mui/icons-material/Close";

const UserProfile = ({ open, setOpen }) => {
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="w-[360px] rounded-lg px-6 py-10 flex flex-col bg-blue justify-center items-center ">
          <div className=" absolute md:scale-100 top-0  w-14 h-14 bg-purple blur-[50px] " />
          <div className=" absolute md:scale-100 top-0 left-0  w-20 h-20 bg-cyan-500 blur-[50px] " />
          <button
            className="fixed right-5 top-5 text-white/70 hover:text-purple duration-300"
            onClick={() => setOpen(!open)}
          >
            <CloseIcon />
          </button>
          <div className="w-32 h-32 rounded-full overflow-hidden bg-blue/10 drop-shadow-xl mb-5">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />
          </div>
          <h2 className="text-xl font-bold text-white/80">William Rocheald</h2>
          <span className="text-gray-400 text-sm uppercase tracking-wider ">
            Movie Entuisaist
          </span>
          <div className="flex flex-col my-10">
            <span className="font-bold uppercase text-white/80 tracking-wider">
              About
            </span>
            <p className="text-gray-400 text-sm border-b-[1px] pb-6">
              As a movie enthusiast, you have a deep love and passion for films.
              You enjoy watching a wide range of movies, from classic films to
              the latest blockbuster releases.
            </p>
            <span className="text-gray-400 mt-5">
              E-mail: jhondoe@gmail.com
            </span>
            <span className="text-gray-400 mt-2">
              Date of Birth: May 20, 1980
            </span>
          </div>
          <button className="text-white bg-purple w-full py-3 rounded-lg duration-300 hover:bg-purple/80">
            Logout
          </button>
        </div>
      </Modal>
    </>
  );
};

export default UserProfile;
