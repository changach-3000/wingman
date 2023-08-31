import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import APPCONTEXT from "../context/APP";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const request = useAxios();
  const navigate = useNavigate();
  const { login } = useContext(APPCONTEXT);

  const handleLogin = async (e) => {
    e.preventDefault();
    let response = await request(
      {
        url: "login",
        method: "POST",
        data: {
          email: formData.email,
          password: formData.password,
        },
      },
      true
    );

    if (response === "error") {
      return;
    }

    login(response.token, response.user);

    const role = response.user.role;
    if (role === "administrator") {
      navigate("/admin");
    } else if (role === "aggregator") {
      navigate("/aggregator");
    } else if (role === "private_investor" || role === "company_investor") {
      navigate("/investor");
    } else {
      navigate("/");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <section class="bg-[url(https://images.unsplash.com/photo-1494187570835-b188e7f0f26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjBsYW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)] min-h-screen flex items-center justify-center bg-no-repeat bg-cover">
        {/* <!-- login container --> */}
        <div class="bg-[#F7F5D2] flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- image --> */}
          <div class="md:block hidden w-1/2">
            <img
              class="rounded-2xl"
              src="https://media.istockphoto.com/id/1018703724/photo/plant-tree-in-neutral-background-close-up-of-fresh-green-plant.jpg?s=612x612&w=0&k=20&c=Pfgp-cgbu71Wa2oxLcD6CcPYNtiFkfaLzkDESBrTEPk="
            />
          </div>

          {/* <!-- form --> */}
          <div class="md:w-1/2 px-8 md:px-16">
            <h2 class=" text-2xl text-[000000]">𝑺𝒊𝒈𝒏 𝒊𝒏</h2>
            <p class="text-sm mt-4 text-[0000000]">
              If you are already a member, easily log in
            </p>

            <form onSubmit={handleLogin} class="flex flex-col gap-4">
              <input
                class="p-2 mt-8 rounded-xl border"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div class="relative">
                <input
                  class="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                class="bg-[#F36B23] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>

            <div class="mt-6 grid grid-cols-3 items-center text-dark">
              <hr class="border-black" />
              <p class="text-center text-xl">𝔀𝓮𝓵𝓬𝓸𝓶𝓮</p>
              <hr class="border-black" />
            </div>

            <div class="mt-5 text-xs border-b border-[#0C3D10] py-4 text-blue-600">
              <a href="#">Forgot your password?</a>
            </div>

            <div class="mt-3 text-xs flex justify-between items-center ">
              <p class="text-[#F36B23]">Don't have an account?</p>
              <Link class="text-blue-600 " to="/signup">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
