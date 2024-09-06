import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BsMenuButton } from "react-icons/bs";


export const Navbar =()=> {
  return (
    <>
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
      <div className="ms-2 text-xl text-black dark:text-white">VeggieCart

      </div>

        <div className="flex justify-between gap-9 items-center cursor-pointer ">

         
        <div className="inline-flex items-center  gap-x-1.5 font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 active:text-blue-700">
        <DropdownMenu>
  <DropdownMenuTrigger>Home</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/>
        </svg>
       
       </div>


   <div className=" font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">About</div>
        <div className=" font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">Services</div>
        <div className=" font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">Contact us</div>
      </div>
      <div className="ms-5 flex w-[30%] items-center justify-between">
      <input
        type="search"
        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-sodivd border-secondary-500 bg-transparent bg-cdivp-padding px-3 py-1.5 text-base font-normal text-surface transition duration-300 ease-in-out focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outdivne-none motion-reduce:transition-none dark:border-white/10 dark:bg-body-dark dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2" />
        <span  
        className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-gray-600 dark:text-white"><CiSearch /></span>
      </div>
      
      
      </div>
    </nav>
      
    </>
  )
}















     