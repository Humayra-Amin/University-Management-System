// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import Sociallogin from "../Sociallogin/Sociallogin";
// import useAuth from "../../hooks/useAuth";
// import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaIdCard } from "react-icons/fa";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from "react";
// import { Helmet } from "react-helmet-async";
// import bg from '../../assets/images/background.jpg';
// import logo from '../../assets/images/logos.png';

// const Login = () => {
//     const { signInUser } = useAuth();
//     const [showLoginPass, setShowLoginPass] = useState(false);

//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const navigate = useNavigate();
//     const location = useLocation();
//     const from = location?.state || '/student';

//     const onSubmit = (data) => {
//         const { email, password, studentID } = data;

//         signInUser(email, password)
//             .then((result) => {
//                 if (result.user) {
//                     toast.success('Login successfully!!!');
//                     setTimeout(() => {
//                         navigate(from);
//                     }, 1000);
//                 }
//             })
//             .catch((error) => {
//                 console.error(error);
//                 toast.error("Invalid Email, Password or Student ID!!!");
//             });
//     };

//     return (
//         <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
//             <Helmet>
//                 <title>UMS | Login</title>
//                 <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
//             </Helmet>

//             <div className="absolute top-28 left-20 p-4 poppins font-bold text-yellow-500 z-10">
//                 <h1 className="text-5xl">University Management System</h1>
//                 <h2 className="text-5xl text-center mt-8">UMS</h2>
//             </div>
     
//             <div className="absolute right-28 top-10 flex items-center justify-center w-[25%] h-[90%] p-8 bg-blue-900 shadow-lg">
//                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">

//                     <div className="flex justify-center mb-4">
//                         <img src={logo} className="w-[40%] h-auto" />
//                     </div>

//                     {/* Student ID Field */}
//                     <div className="relative">
//                         <div className="relative">
//                             <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//                             <input
//                                 type="text"
//                                 {...register("studentID", { required: "Student ID is required" })}
//                                 placeholder="Enter your student ID"
//                                 className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             />
//                         </div>
//                         {errors.studentID && <span className="text-red-500 text-sm">{errors.studentID.message}</span>}
//                     </div>

//                     {/* Email Field */}
//                     <div className="relative">
//                         <div className="relative">
//                             <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//                             <input
//                                 type="email"
//                                 {...register("email", { required: "Email is required" })}
//                                 placeholder="Enter your email"
//                                 className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             />
//                         </div>
//                         {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
//                     </div>

//                     {/* Password Field */}
//                     <div className="relative">
//                         <div className="relative">
//                             <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//                             <input
//                                 type={showLoginPass ? "text" : "password"}
//                                 {...register("password", { required: "Password is required" })}
//                                 placeholder="Enter your password"
//                                 className="w-full pl-10 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                             />
//                             <span
//                                 onClick={() => setShowLoginPass(!showLoginPass)}
//                                 className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-500"
//                             >
//                                 {showLoginPass ? <FaEyeSlash /> : <FaEye />}
//                             </span>
//                         </div>
//                         {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-center items-center">
//                         <button
//                             type="submit"
//                             className="w-[50%] flex justify-center items-center py-2 px-4 bg-white text-black rounded-md hover:bg-blue-600">
//                             Submit
//                         </button>
//                     </div>

//                     <Sociallogin></Sociallogin>
//                 </form>
//             </div>

//             <ToastContainer></ToastContainer>
//         </div>
//     );
// };

// export default Login;
