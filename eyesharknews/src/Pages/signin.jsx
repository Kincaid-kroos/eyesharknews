import { NavLink } from "react-router-dom"
//import { useContext } from 'react'
//import AuthContext from "../../../Context/Acontext"

const SignIn = () => {

  //const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    //email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }

  

  return (

<div className="mx-auto bg-[#ffffff]  text-[#000000]">
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-4 md:pt-10">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Eyesharknews"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg leading-6 text-success font-bold">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
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
                <div className="text-md ">
                  <a href="#" className="font-semibold text-[#ff3f19] hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-lg text-success">
            Not a member?{' '}
            <NavLink to="/sign up" className="font-bold leading-6 text-[#ff3f19] hover:text-indigo-500 no-underline">
              Register an Account
            </NavLink>
          </p>
        </div>
      </div>
</div>
  
  
    
  )
}

export default SignIn
