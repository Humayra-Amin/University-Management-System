// import { FaGoogle } from "react-icons/fa";
// import useAuth from "../../hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";

// const Sociallogin = () => {
//     const { googleLogin } = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location?.state || "/student";

//     const handleSocialLogin = (socialProvider) => {
//         socialProvider()
//             .then((result) => {
//                 if (result.user) {
//                     navigate(from);
//                 }
//             });
//     };

//     return (
//         <div className="poppins">
//             <div className="relative flex justify-center items-center my-6">
//                 <span className="px-4 text-white text-[16px]">OR Login with</span>
//             </div>

//             {/* Social Login */}
//             <div className="mt-6 text-2xl flex items-center justify-center gap-8">
//                 <button
//                     onClick={() => handleSocialLogin(googleLogin)}
//                     className="flex items-center justify-center w-48 h-12 rounded-md bg-white shadow-lg hover:bg-blue-200">
//                     <FaGoogle className="text-blue-600" size={30} />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Sociallogin;
