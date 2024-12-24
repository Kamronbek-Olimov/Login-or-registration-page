// https://www.figma.com/design/n16x6uAkP1S1tDP7zbOwWm/Login-Page-(Community)-(Copy)?node-id=102-29&t=IuXpyJTXik5VS8gv-0   -> figma link
import { useState, useEffect, useRef } from 'react'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import './App.css'
export default function App() {
  const [eye, setEye] = useState(false)
  const emailRef = useRef(null)
  const nameRef = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [none, setNone] = useState(false)
  useEffect(() => {
    none ? nameRef.current.focus() : emailRef.current.focus()
  }, [])
  return (
    <div className="min-h-screen flex items-center flex-col xl:flex-row-reverse justify-center gap-y-[27px] xl:gap-y-8 p-5 xl:px-[50px]">
      <picture className='xl:w-500px'>
        <source srcSet="/login-art.png" media="(min-width: 1280px)" />
        <img src="/login-mobile-art.png" alt="login art img" />
      </picture>
      <div className="w-full xl:flex items-center justify-center">
        <div className="xl:w-[400px] flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-4">
            <h3 className="font-roboto text-[#313957] font-semibold text-[24px] leading-6 xl:text-[36px] xl:leading-9 xl:drop-shadow-xl">Welcome Back  👋</h3>
            <p className="font-roboto text-[#313957] font-normal text-[15px] leading-6 xl:text-[20px] xl:leading-8 xl:drop-shadow-xl">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault()
            none ? nameRef.current.focus() : emailRef.current.focus()
            setName("")
            setEmail("")
            setPassword("")
            alert("Xabar yuborildi!")
          }} className="flex flex-col gap-y-4">
            <div className={none ? "flex flex-col gap-y-2" : "hidden flex-col gap-y-2"}>
              <label className="font-roboto text-[#313957] font-normal text-[14px] leading-[14px] xl:text-[16px] xl:leading-4" htmlFor="">Username</label>
              <input onChange={(e) => setName(e.target.value)} value={name} ref={nameRef} required={none} className="bg-[#F7FBFF] outline-none focus:border-[#162D3A] border border-[#D4D7E3] rounded-[8px] p-[14px] font-roboto text-[#162D3A] font-normal text-[14px] leading-[14px] xl:p-4 xl:text-[16px] xl:leading-4" type="text" placeholder="John" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-roboto text-[#313957] font-normal text-[14px] leading-[14px] xl:text-[16px] xl:leading-4" htmlFor="">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} ref={emailRef} required className="bg-[#F7FBFF] outline-none focus:border-[#162D3A] border border-[#D4D7E3] rounded-[8px] p-[14px] font-roboto text-[#162D3A] font-normal text-[14px] leading-[14px] xl:p-4 xl:text-[16px] xl:leading-4" type="email" placeholder="Example@gmail.com" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="font-roboto text-[#313957] font-normal text-[14px] leading-[14px] xl:text-[16px] xl:leading-4" htmlFor="">Password</label>
              <div className="bg-[#F7FBFF] flex items-center justify-between border border-[#D4D7E3] focus-within:border-[#162D3A] rounded-[8px] p-[14px] xl:p-4">
                <input onChange={(e) => setPassword(e.target.value)} value={password} required className="bg-transparent w-[90%] outline-none font-roboto text-[#162D3A] font-normal text-[14px] leading-[14px] xl:text-[16px] xl:leading-4" type={eye?"password":"text"} placeholder="At least 8 characters" />
                <button className='text-[#162D3A] text-[18px] xl:text-[20px]' type='button' onClick={()=>setEye(!eye)}>{eye?<FaEye />:<FaEyeSlash />}</button>
              </div>
            </div>
            <div className="flex justify-end">
              <span className="font-roboto text-[#1E4AE9] font-normal text-[14px] leading-[14px] xl:text-[16px] xl:leading-4">Forgot Password?</span>
            </div>
            <button className='p-[14px] bg-[#162D3A] rounded-[12px] font-roboto text-[#FFFFFF] font-normal text-[20px] leading-5 xl:p-4 xl:text-[20px] xl:leading-5'>{none ? "Sign up" : "Sign in"}</button>
          </form>
          <div className='flex flex-col gap-y-4 xl:gap-y-6'>
            <div className='flex items-center justify-between gap-x-4'>
              <hr className='border border-[#CFDFE2] h-[1px] w-full' />
              <p className='text-[#294957] font-roboto font-normal text-[12px] leading-[12px] whitespace-nowrap xl:text-[16px] xl:leading-4'>Or sign in with</p>
              <hr className='border border-[#CFDFE2] h-[1px] w-full' />
            </div>
            <div className='flex gap-x-4 xl:flex-col gap-y-4'>
              <button className='w-full flex items-center justify-center gap-x-4 bg-[#F3F9FA] p-[8px] rounded-[12px] xl:text-[16px] xl:leading-4 xl:p-3'>
                <img src="/google.svg" alt="social img" />
                <span className='font-normal text-[#313957] text-[16px] leading-4 xl:text-[16px] xl:leading-4'>Google</span>
              </button>
              <button className='w-full flex items-center justify-center gap-x-4 bg-[#F3F9FA] p-2 rounded-[12px] xl:text-[16px] xl:leading-4 xl:p-3'>
                <img src="/facebook.svg" alt="social img" />
                <span className='font-normal text-[#313957] text-[16px] leading-4 xl:text-[16px] xl:leading-4'>Facebook</span>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <span className='font-roboto text-[#313957] font-normal text-[16px] leading-[25px] xl:text-[18px] xl:leading-[28.8px]'>Don't you have an account? <button onClick={() => setNone(!none)} className='text-[#1E4AE9]'>{none ? "Sign in" : "Sign up"}</button></span>
          </div>
        </div>
      </div>
    </div>
  )
}