import React, { useState, useContext } from "react";
import { X } from "lucide-react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
    
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }
    //   // Lock background scroll
    //   useEffect(() => {
    //     document.body.style.overflow = "hidden";
    //     return () => (document.body.style.overflow = "auto");
    //   }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">

            {/* Card */}
            <div className="relative w-[420px] max-w-[95%] rounded-2xl bg-[#111827] text-white shadow-2xl overflow-hidden">

                {/* Gradient top border */}
                <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300" />

                {/* Close */}
                <button
                    onClick={() => setShowLogin(false)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                    <X size={18} />
                </button>

                {/* Content */}
                <div className="p-8">

                    <h2 className="text-3xl font-bold text-amber-400">
                        {currState === "Login" ? "Login" : "Sign Up"}
                    </h2>

                    <p className="text-gray-400 mt-1">
                        {currState === "Login"
                            ? "Hungry? Login to order your favorite food 🍔"
                            : "Join us & start ordering delicious meals 🍕"}
                    </p>

                    {/* Form */}
                    <form onSubmit={onLogin} className="mt-6 space-y-5">

                        {currState === "Sign Up" && (
                            <input
                                type="text"
                                name='name'
                                value={data.name}
                                onChange={onChangeHandler}
                                placeholder="Your name"
                                className="input-food"
                                required
                            />
                        )}

                        <input
                            type="email"
                            name='email'
                            value={data.email}
                            onChange={onChangeHandler}
                            placeholder="Your email"
                            className="input-food"
                            required
                        />

                        <input
                            type="password"
                            name='password'
                            value={data.password}
                            onChange={onChangeHandler}
                            placeholder="Password"
                            className="input-food"
                            required
                        />

                        {/* Remember */}
                        <div className="flex items-center justify-between text-sm text-gray-400">
                            {currState === "Login" && (
                                <span className="text-amber-400 cursor-pointer hover:underline">
                                    Forgot password?
                                </span>
                            )}
                        </div>

                        {/* Terms */}
                        <label className="flex gap-3 text-sm text-gray-400 cursor-pointer">
                            <input type="checkbox" required className="accent-orange-500 mt-1" />
                            <span>
                                I agree to the{" "}
                                <span className="text-amber-400">terms</span> &{" "}
                                <span className="text-amber-400">privacy policy</span>.
                            </span>
                        </label>

                        {/* Button */}
                        <button type='submit'
                            className="w-full py-3 rounded-xl font-semibold text-gray-900 bg-gradient-to-r from-orange-500 to-yellow-400 hover:opacity-90 transition">
                            {currState === "Login" ? "Login" : "Create Account"}
                        </button>
                    </form>

                    {/* Switch */}
                    <p className="text-center text-gray-400 mt-6">
                        {currState === "Login" ? (
                            <>
                                New here?{" "}
                                <span
                                    className="text-amber-400 cursor-pointer hover:underline"
                                    onClick={() => setCurrState("Sign Up")}
                                >
                                    Sign Up →
                                </span>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <span
                                    className="text-amber-400 cursor-pointer hover:underline"
                                    onClick={() => setCurrState("Login")}
                                >
                                    Login →
                                </span>
                            </>
                        )}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
