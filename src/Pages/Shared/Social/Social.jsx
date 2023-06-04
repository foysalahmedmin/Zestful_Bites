import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const Social = () => {
    return (
        <div className="flex gap-5 justify-center items-center my-5">
            <button>
                <FaFacebook className="text-4xl text-primary" />
            </button>
            <button>
                <FaGoogle className="text-4xl text-primary"  />
            </button>
            <button>
                <FaGithub className="text-4xl text-primary"  />
            </button>
        </div>
    );
};

export default Social;