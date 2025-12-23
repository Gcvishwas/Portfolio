import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
//... is known as rest parameter and allows functions to accept any number of arguments as an array
//ClassValue is an array than can be a string, boolean, object, null etc
export const cn=(...inputs:ClassValue[])=>{
return twMerge(clsx(inputs));
}