import { NavLink } from "react-router-dom"
import { useState } from 'react'
//import AuthContext from "../../../Context/Acontext"
//useContext,
const SignUp = () => {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password1, setPassword1] = useState("")

  //const {registerUser} = useContext(AuthContext)

  console.log(email);
  console.log(username);
  console.log(password);
  console.log(password1);


  const handleSubmit = async e => {
    e.preventDefault()
   // registerUser(email, username, password, password1)
  }

  

  return (

<div className="mx-auto  bg-[#ffffff]  text-[#000000]">
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-4 md:pt-10">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Eyesharknews"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Register an account
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg leading-6 text-success font-bold">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="eyesharknews@gmail.com"
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 bg-white shadow-lg ring-1 ring-inset ring-gray-300
                   placeholder:text-[#b1a5a5] text-[#000000]/90 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-lg leading-6 text-success font-bold">
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Jason Smith"
                  required
                  onChange={e => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 bg-white shadow-lg ring-1 ring-inset ring-gray-300
                  placeholder:text-[#b1a5a5] text-[#000000]/90 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm
                    sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg  font-bold leading-6 text-success">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={e => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-lg  font-bold leading-6 text-success">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={e => setPassword1(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-success">
            Already have an account?{' '}
            <NavLink to="/sign in" className="font-bold leading-6 text-[#ff3f19] hover:text-indigo-500 no-underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
</div>
  
  
    
  )
}

export default SignUp
