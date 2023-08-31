import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import APPCONTEXT from "../../context/APP";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const request = useAxios();
  const [confirmPassword, setConfirmPassword] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "private_investor",
  });

  const { login } = useContext(APPCONTEXT);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (confirmPassword !== formData.password) {
      toast.error("Passwords don't match.");
      return;
    } else {
      const response = await request(
        {
          url: "signup",
          method: "POST",
          data: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          },
        },
        true
      );

      if (response === "error") {
        return;
      }

      login(response.token, response.user);
      const role = response.user.role;

      if (role === "admin") {
        navigate("/admin");
      } else if (role === "aggregator") {
        navigate("/aggregator");
      } else if (role === "private_investor" || role === "company_investor") {
        navigate("/investor");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div>
      <section className="bg-[url(https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBsYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)] min-h-screen flex items-center justify-center bg-no-repeat bg-cover">
        {/* <!-- login container --> */}
        <div className="bg-[#F7F5D2] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- image --> */}
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://media.istockphoto.com/id/157687412/photo/african-girl-with-mango-tree.jpg?s=612x612&w=0&k=20&c=U0hKNGa8M09R0is6OLB3N2_1GlFHImw5rdaEXdPq8m4="
            />
          </div>

          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className=" text-2xl text-[000000]">𝑺𝒊𝒈𝒏 𝑼𝒑</h2>
            <p className="text-sm mt-4 text-[0000000]">
              Join our thriving Agricultural Community
            </p>

            <form onSubmit={handleSignUp} className="flex flex-col gap-4">
              <input
                className="p-2 mt-4 rounded-xl border"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                className="p-2 rounded-xl border  w-full"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Username"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <input
                  className="p-2 mt-4 rounded-xl border w-full"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
              <select
                value={formData.role}
                onChange={(e) => handleChange(e)}
                className="p-2 rounded-xl border  w-full"
              >
                <option value="private_investor">Private Investor</option>
                <option value="company_investor">Company Investor</option>
              </select>
              <button className="bg-[#F36B23] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Create an account
              </button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-dark">
              <hr className="border-black" />
              <p className="text-center text-xl">𝔀𝓮𝓵𝓬𝓸𝓶𝓮</p>
              <hr className="border-black" />
            </div>

            <div className="mt-3 text-xs flex justify-between items-center ">
              <p className="text-[#F36B23]">Already have an account?</p>
              <Link className="text-blue-600" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
