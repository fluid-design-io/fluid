import { CheckIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export const buttonColors = [
  {
    name: `gray`,
    palette:
      "bg-stone-500 dark:bg-stone-600 ring-stone-500 dark:ring-stone-600",
    active:
      "ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
        select-none
        transition
        
        bg-stone-50
        text-stone-800
        focus:bg-stone-100
        hover:bg-stone-100
        hover:text-stone-900
        focus:text-stone-900
        active:bg-stone-200
        
        prefers-contrast:border
        prefers-contrast:bg-stone-50
        prefers-contrast:text-stone-900
        prefers-contrast:border-stone-800
        prefers-contrast:hover:bg-stone-50
        prefers-contrast:focus:bg-stone-50
        prefers-contrast:hover:text-stone-900
        
        dark:bg-stone-900
        dark:text-stone-100
        dark:hover:bg-stone-900/50
        dark:focus:bg-stone-900/50
        dark:active:bg-stone-700
        dark:hover:text-stone-100
        dark:focus:text-stone-100
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-black
        dark:prefers-contrast:text-stone-50
        dark:prefers-contrast:hover:bg-stone-800
        dark:prefers-contrast:focus:bg-stone-800
        dark:prefers-contrast:hover:text-stone-50
        dark:prefers-contrast:focus:text-stone-50
        dark:prefers-contrast:border-stone-200

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-stone-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-stone-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
        select-none
        transition
        
        bg-stone-900
        text-stone-100
        focus:bg-stone-800
        hover:bg-stone-800
        hover:text-stone-50
        focus:text-stone-50
        active:bg-stone-700
        
        prefers-contrast:border
        prefers-contrast:border-stone-50
        prefers-contrast:hover:bg-stone-600
        prefers-contrast:focus:bg-stone-600
        prefers-contrast:hover:text-stone-50
        
        dark:bg-stone-600
        dark:text-stone-50
        dark:hover:bg-stone-500
        dark:focus:bg-stone-500
        dark:hover:text-stone-50
        dark:focus:text-stone-50
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-transparent
        dark:prefers-contrast:bg-stone-100
        dark:prefers-contrast:text-stone-900
        dark:prefers-contrast:hover:bg-stone-800
        dark:prefers-contrast:focus:bg-stone-800
        dark:prefers-contrast:border-stone-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-stone-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-stone-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `orange`,
    palette:
      "bg-orange-500 dark:bg-orange-600 ring-orange-500 dark:ring-orange-600",
    active:
      "ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
        select-none
        transition
        
        bg-stone-50
        text-orange-500
        focus:bg-orange-500
        hover:bg-orange-500
        hover:text-orange-50
        focus:text-orange-50
        active:bg-orange-400
        
        prefers-contrast:border
        prefers-contrast:bg-stone-50
        prefers-contrast:text-orange-800
        prefers-contrast:border-orange-800
        prefers-contrast:hover:bg-orange-50
        prefers-contrast:focus:bg-orange-50
        prefers-contrast:hover:text-orange-800
        
        dark:bg-stone-900
        dark:text-orange-500
        dark:hover:bg-stone-900/50
        dark:focus:bg-stone-900/50
        dark:active:bg-stone-700
        dark:hover:text-orange-400
        dark:focus:text-orange-400
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-black
        dark:prefers-contrast:text-orange-500
        dark:prefers-contrast:hover:bg-orange-900
        dark:prefers-contrast:focus:bg-orange-900
        dark:prefers-contrast:hover:text-orange-50
        dark:prefers-contrast:focus:text-orange-50
        dark:prefers-contrast:border-orange-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-orange-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-orange-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
        select-none
        transition
        
        bg-orange-500
        text-orange-50
        focus:bg-orange-600
        hover:bg-orange-600
        hover:text-orange-50
        focus:text-orange-50
        active:bg-orange-500
        
        prefers-contrast:border
        prefers-contrast:border-orange-800
        prefers-contrast:hover:bg-orange-50
        prefers-contrast:focus:bg-orange-50
        prefers-contrast:hover:text-orange-800
        
        dark:bg-orange-600
        dark:text-orange-50
        dark:hover:bg-orange-500
        dark:focus:bg-orange-500
        dark:hover:text-orange-50
        dark:focus:text-orange-50
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-transparent
        dark:prefers-contrast:bg-orange-100
        dark:prefers-contrast:text-orange-900
        dark:prefers-contrast:hover:bg-orange-800
        dark:prefers-contrast:focus:bg-orange-800
        dark:prefers-contrast:border-orange-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-orange-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-orange-50
      `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `yellow`,
    palette: "bg-yellow-500 dark:bg-oragne-600",
    active:
      "ring-yellow-500 ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
          select-none
          transition
          
          bg-stone-50
          text-yellow-600
          focus:bg-yellow-500
          hover:bg-yellow-500
          hover:text-yellow-50
          focus:text-yellow-50
          active:bg-yellow-400
          
          prefers-contrast:border
          prefers-contrast:bg-stone-50
          prefers-contrast:text-yellow-800
          prefers-contrast:border-yellow-800
          prefers-contrast:hover:bg-yellow-50
          prefers-contrast:focus:bg-yellow-50
          prefers-contrast:hover:text-yellow-800
          
          dark:bg-stone-900
          dark:text-yellow-500
          dark:hover:bg-stone-900/50
          dark:focus:bg-stone-900/50
          dark:active:bg-stone-700
          dark:hover:text-yellow-400
          dark:focus:text-yellow-400
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-black
          dark:prefers-contrast:text-yellow-500
          dark:prefers-contrast:hover:bg-yellow-900
          dark:prefers-contrast:focus:bg-yellow-900
          dark:prefers-contrast:hover:text-yellow-50
          dark:prefers-contrast:focus:text-yellow-50
          dark:prefers-contrast:border-yellow-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-yellow-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-yellow-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          select-none
          transition
          
          bg-yellow-300
          text-stone-900/75
          focus:bg-yellow-400/80
          hover:bg-yellow-400/80
          hover:text-yellow-900
          focus:text-yellow-900
          active:bg-yellow-400
          
          prefers-contrast:border
          prefers-contrast:border-yellow-800
          prefers-contrast:hover:bg-yellow-50
          prefers-contrast:focus:bg-yellow-50
          prefers-contrast:hover:text-yellow-800
          
          dark:bg-yellow-500
          dark:text-stone-900/80
          dark:hover:bg-yellow-400
          dark:focus:bg-yellow-400
          dark:hover:text-yellow-800
          dark:focus:text-yellow-800
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-transparent
          dark:prefers-contrast:bg-yellow-100
          dark:prefers-contrast:text-yellow-900
          dark:prefers-contrast:hover:bg-yellow-800
          dark:prefers-contrast:focus:bg-yellow-800
          dark:prefers-contrast:border-yellow-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-yellow-50
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-yellow-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `lime`,
    palette: "bg-lime-500 dark:bg-oragne-600",
    active:
      "ring-lime-500 ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
          select-none
          transition
          
          bg-stone-50
          text-lime-600
          focus:bg-lime-500
          hover:bg-lime-500
          hover:text-lime-50
          focus:text-lime-50
          active:bg-lime-400
          
          prefers-contrast:border
          prefers-contrast:bg-stone-50
          prefers-contrast:text-lime-800
          prefers-contrast:border-lime-800
          prefers-contrast:hover:bg-lime-50
          prefers-contrast:focus:bg-lime-50
          prefers-contrast:hover:text-lime-800
          
          dark:bg-stone-900
          dark:text-lime-500
          dark:hover:bg-stone-900/50
          dark:focus:bg-stone-900/50
          dark:active:bg-stone-700
          dark:hover:text-lime-400
          dark:focus:text-lime-400
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-black
          dark:prefers-contrast:text-lime-500
          dark:prefers-contrast:hover:bg-lime-900
          dark:prefers-contrast:focus:bg-lime-900
          dark:prefers-contrast:hover:text-lime-50
          dark:prefers-contrast:focus:text-lime-50
          dark:prefers-contrast:border-lime-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-lime-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-lime-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          select-none
          transition
          
          bg-lime-300
          text-stone-900/75
          focus:bg-lime-400/80
          hover:bg-lime-400/80
          hover:text-lime-900
          focus:text-lime-900
          active:bg-lime-400
          
          prefers-contrast:border
          prefers-contrast:border-lime-800
          prefers-contrast:hover:bg-lime-50
          prefers-contrast:focus:bg-lime-50
          prefers-contrast:hover:text-lime-800
          
          dark:bg-lime-500
          dark:text-stone-900/80
          dark:hover:bg-lime-400
          dark:focus:bg-lime-400
          dark:hover:text-lime-800
          dark:focus:text-lime-800
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-transparent
          dark:prefers-contrast:bg-lime-100
          dark:prefers-contrast:text-lime-900
          dark:prefers-contrast:hover:bg-lime-800
          dark:prefers-contrast:focus:bg-lime-800
          dark:prefers-contrast:border-lime-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-lime-50
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-lime-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `green`,
    palette: "bg-green-500 dark:bg-oragne-600",
    active:
      "ring-green-500 ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
          select-none
          transition
          
          bg-stone-50
          text-green-600
          focus:bg-green-500
          hover:bg-green-500
          hover:text-green-50
          focus:text-green-50
          active:bg-green-400
          
          prefers-contrast:border
          prefers-contrast:bg-stone-50
          prefers-contrast:text-green-800
          prefers-contrast:border-green-800
          prefers-contrast:hover:bg-green-50
          prefers-contrast:focus:bg-green-50
          prefers-contrast:hover:text-green-800
          
          dark:bg-stone-900
          dark:text-green-500
          dark:hover:bg-stone-900/50
          dark:focus:bg-stone-900/50
          dark:active:bg-stone-700
          dark:hover:text-green-400
          dark:focus:text-green-400
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-black
          dark:prefers-contrast:text-green-500
          dark:prefers-contrast:hover:bg-green-900
          dark:prefers-contrast:focus:bg-green-900
          dark:prefers-contrast:hover:text-green-50
          dark:prefers-contrast:focus:text-green-50
          dark:prefers-contrast:border-green-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-green-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-green-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          select-none
          transition
          
          bg-green-300
          text-stone-900/75
          focus:bg-green-400/80
          hover:bg-green-400/80
          hover:text-green-900
          focus:text-green-900
          active:bg-green-400
          
          prefers-contrast:border
          prefers-contrast:border-green-800
          prefers-contrast:hover:bg-green-50
          prefers-contrast:focus:bg-green-50
          prefers-contrast:hover:text-green-800
          
          dark:bg-green-500
          dark:text-stone-900/80
          dark:hover:bg-green-400
          dark:focus:bg-green-400
          dark:hover:text-green-800
          dark:focus:text-green-800
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-transparent
          dark:prefers-contrast:bg-green-100
          dark:prefers-contrast:text-green-900
          dark:prefers-contrast:hover:bg-green-800
          dark:prefers-contrast:focus:bg-green-800
          dark:prefers-contrast:border-green-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-green-50
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-green-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `teal`,
    palette: "bg-teal-500 dark:bg-oragne-600",
    active:
      "ring-teal-500 ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
          select-none
          transition
          
          bg-stone-50
          text-teal-600
          focus:bg-teal-500
          hover:bg-teal-500
          hover:text-teal-50
          focus:text-teal-50
          active:bg-teal-400
          
          prefers-contrast:border
          prefers-contrast:bg-stone-50
          prefers-contrast:text-teal-800
          prefers-contrast:border-teal-800
          prefers-contrast:hover:bg-teal-50
          prefers-contrast:focus:bg-teal-50
          prefers-contrast:hover:text-teal-800
          
          dark:bg-stone-900
          dark:text-teal-500
          dark:hover:bg-stone-900/50
          dark:focus:bg-stone-900/50
          dark:active:bg-stone-700
          dark:hover:text-teal-400
          dark:focus:text-teal-400
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-black
          dark:prefers-contrast:text-teal-500
          dark:prefers-contrast:hover:bg-teal-900
          dark:prefers-contrast:focus:bg-teal-900
          dark:prefers-contrast:hover:text-teal-50
          dark:prefers-contrast:focus:text-teal-50
          dark:prefers-contrast:border-teal-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-teal-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-teal-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          select-none
          transition
          
          bg-teal-300
          text-stone-900/75
          focus:bg-teal-400/80
          hover:bg-teal-400/80
          hover:text-teal-900
          focus:text-teal-900
          active:bg-teal-400
          
          prefers-contrast:border
          prefers-contrast:border-teal-800
          prefers-contrast:hover:bg-teal-50
          prefers-contrast:focus:bg-teal-50
          prefers-contrast:hover:text-teal-800
          
          dark:bg-teal-500
          dark:text-stone-900/80
          dark:hover:bg-teal-400
          dark:focus:bg-teal-400
          dark:hover:text-teal-800
          dark:focus:text-teal-800
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-transparent
          dark:prefers-contrast:bg-teal-100
          dark:prefers-contrast:text-teal-900
          dark:prefers-contrast:hover:bg-teal-800
          dark:prefers-contrast:focus:bg-teal-800
          dark:prefers-contrast:border-teal-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-teal-50
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-teal-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `sky`,
    palette: "bg-sky-500 dark:bg-sky-600",
    active:
      "ring-sky-500 ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
          select-none
          transition
          
          bg-stone-50
          text-sky-600
          focus:bg-sky-500
          hover:bg-sky-500
          hover:text-sky-50
          focus:text-sky-50
          active:bg-sky-400
          
          prefers-contrast:border
          prefers-contrast:bg-stone-50
          prefers-contrast:text-sky-800
          prefers-contrast:border-sky-800
          prefers-contrast:hover:bg-sky-50
          prefers-contrast:focus:bg-sky-50
          prefers-contrast:hover:text-sky-800
          
          dark:bg-stone-900
          dark:text-sky-500
          dark:hover:bg-stone-900/50
          dark:focus:bg-stone-900/50
          dark:active:bg-stone-700
          dark:hover:text-sky-400
          dark:focus:text-sky-400
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-black
          dark:prefers-contrast:text-sky-500
          dark:prefers-contrast:hover:bg-sky-900
          dark:prefers-contrast:focus:bg-sky-900
          dark:prefers-contrast:hover:text-sky-50
          dark:prefers-contrast:focus:text-sky-50
          dark:prefers-contrast:border-sky-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-sky-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-sky-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          select-none
          transition
          
          bg-sky-300
          text-stone-900/75
          focus:bg-sky-400/80
          hover:bg-sky-400/80
          hover:text-sky-900
          focus:text-sky-900
          active:bg-sky-400
          
          prefers-contrast:border
          prefers-contrast:border-sky-800
          prefers-contrast:hover:bg-sky-50
          prefers-contrast:focus:bg-sky-50
          prefers-contrast:hover:text-sky-800
          
          dark:bg-sky-500
          dark:text-stone-900/80
          dark:hover:bg-sky-400
          dark:focus:bg-sky-400
          dark:hover:text-sky-800
          dark:focus:text-sky-800
          
          dark:prefers-contrast:font-bold
          dark:prefers-contrast:bg-transparent
          dark:prefers-contrast:bg-sky-100
          dark:prefers-contrast:text-sky-900
          dark:prefers-contrast:hover:bg-sky-800
          dark:prefers-contrast:focus:bg-sky-800
          dark:prefers-contrast:border-sky-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-sky-50
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-sky-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `indigo`,
    palette:
      "bg-indigo-500 dark:bg-indigo-600 ring-indigo-500 dark:ring-indigo-600",
    active:
      "ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
        select-none
        transition
        
        bg-stone-50
        text-indigo-500
        focus:bg-indigo-500
        hover:bg-indigo-500
        hover:text-indigo-50
        focus:text-indigo-50
        active:bg-indigo-400
        
        prefers-contrast:border
        prefers-contrast:bg-stone-50
        prefers-contrast:text-indigo-800
        prefers-contrast:border-indigo-800
        prefers-contrast:hover:bg-indigo-50
        prefers-contrast:focus:bg-indigo-50
        prefers-contrast:hover:text-indigo-800
        
        dark:bg-stone-900
        dark:text-indigo-400
        dark:hover:bg-stone-900/50
        dark:focus:bg-stone-900/50
        dark:active:bg-stone-700
        dark:hover:text-indigo-400
        dark:focus:text-indigo-400
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-black
        dark:prefers-contrast:text-indigo-500
        dark:prefers-contrast:hover:bg-indigo-900
        dark:prefers-contrast:focus:bg-indigo-900
        dark:prefers-contrast:hover:text-indigo-50
        dark:prefers-contrast:focus:text-indigo-50
        dark:prefers-contrast:border-indigo-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-indigo-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
        select-none
        transition
        
        bg-indigo-500
        text-indigo-50
        focus:bg-indigo-600
        hover:bg-indigo-600
        hover:text-indigo-50
        focus:text-indigo-50
        active:bg-indigo-500
        
        prefers-contrast:border
        prefers-contrast:border-indigo-800
        prefers-contrast:hover:bg-indigo-50
        prefers-contrast:focus:bg-indigo-50
        prefers-contrast:hover:text-indigo-800
        
        dark:bg-indigo-600
        dark:text-indigo-50
        dark:hover:bg-indigo-500
        dark:focus:bg-indigo-500
        dark:hover:text-indigo-50
        dark:focus:text-indigo-50
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-transparent
        dark:prefers-contrast:bg-indigo-100
        dark:prefers-contrast:text-indigo-900
        dark:prefers-contrast:hover:bg-indigo-800
        dark:prefers-contrast:focus:bg-indigo-800
        dark:prefers-contrast:border-indigo-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-indigo-50
      `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `fuchsia`,
    palette:
      "bg-fuchsia-500 dark:bg-fuchsia-600 ring-fuchsia-500 dark:ring-fuchsia-600",
    active:
      "ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
        select-none
        transition
        
        bg-stone-50
        text-fuchsia-500
        focus:bg-fuchsia-500
        hover:bg-fuchsia-500
        hover:text-fuchsia-50
        focus:text-fuchsia-50
        active:bg-fuchsia-400
        
        prefers-contrast:border
        prefers-contrast:bg-stone-50
        prefers-contrast:text-fuchsia-800
        prefers-contrast:border-fuchsia-800
        prefers-contrast:hover:bg-fuchsia-50
        prefers-contrast:focus:bg-fuchsia-50
        prefers-contrast:hover:text-fuchsia-800
        
        dark:bg-stone-900
        dark:text-fuchsia-400
        dark:hover:bg-stone-900/50
        dark:focus:bg-stone-900/50
        dark:active:bg-stone-700
        dark:hover:text-fuchsia-400
        dark:focus:text-fuchsia-400
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-black
        dark:prefers-contrast:text-fuchsia-500
        dark:prefers-contrast:hover:bg-fuchsia-900
        dark:prefers-contrast:focus:bg-fuchsia-900
        dark:prefers-contrast:hover:text-fuchsia-50
        dark:prefers-contrast:focus:text-fuchsia-50
        dark:prefers-contrast:border-fuchsia-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-fuchsia-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-fuchsia-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
        select-none
        transition
        
        bg-fuchsia-500
        text-fuchsia-50
        focus:bg-fuchsia-600
        hover:bg-fuchsia-600
        hover:text-fuchsia-50
        focus:text-fuchsia-50
        active:bg-fuchsia-500
        
        prefers-contrast:border
        prefers-contrast:border-fuchsia-800
        prefers-contrast:hover:bg-fuchsia-50
        prefers-contrast:focus:bg-fuchsia-50
        prefers-contrast:hover:text-fuchsia-800
        
        dark:bg-fuchsia-600
        dark:text-fuchsia-50
        dark:hover:bg-fuchsia-500
        dark:focus:bg-fuchsia-500
        dark:hover:text-fuchsia-50
        dark:focus:text-fuchsia-50
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-transparent
        dark:prefers-contrast:bg-fuchsia-100
        dark:prefers-contrast:text-fuchsia-900
        dark:prefers-contrast:hover:bg-fuchsia-800
        dark:prefers-contrast:focus:bg-fuchsia-800
        dark:prefers-contrast:border-fuchsia-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-fuchsia-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-fuchsia-50
      `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `rose`,
    palette: "bg-rose-500 dark:bg-rose-600 ring-rose-500 dark:ring-rose-600",
    active:
      "ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
        select-none
        transition
        
        bg-stone-50
        text-rose-500
        focus:bg-rose-500
        hover:bg-rose-500
        hover:text-rose-50
        focus:text-rose-50
        active:bg-rose-400
        
        prefers-contrast:border
        prefers-contrast:bg-stone-50
        prefers-contrast:text-rose-800
        prefers-contrast:border-rose-800
        prefers-contrast:hover:bg-rose-50
        prefers-contrast:focus:bg-rose-50
        prefers-contrast:hover:text-rose-800
        
        dark:bg-stone-900
        dark:text-rose-400
        dark:hover:bg-stone-900/50
        dark:focus:bg-stone-900/50
        dark:active:bg-stone-700
        dark:hover:text-rose-400
        dark:focus:text-rose-400
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-black
        dark:prefers-contrast:text-rose-500
        dark:prefers-contrast:hover:bg-rose-900
        dark:prefers-contrast:focus:bg-rose-900
        dark:prefers-contrast:hover:text-rose-50
        dark:prefers-contrast:focus:text-rose-50
        dark:prefers-contrast:border-rose-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-rose-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-rose-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
        select-none
        transition
        
        bg-rose-500
        text-rose-50
        focus:bg-rose-600
        hover:bg-rose-600
        hover:text-rose-50
        focus:text-rose-50
        active:bg-rose-500
        
        prefers-contrast:border
        prefers-contrast:border-rose-800
        prefers-contrast:hover:bg-rose-50
        prefers-contrast:focus:bg-rose-50
        prefers-contrast:hover:text-rose-800
        
        dark:bg-rose-600
        dark:text-rose-50
        dark:hover:bg-rose-500
        dark:focus:bg-rose-500
        dark:hover:text-rose-50
        dark:focus:text-rose-50
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-transparent
        dark:prefers-contrast:bg-rose-100
        dark:prefers-contrast:text-rose-900
        dark:prefers-contrast:hover:bg-rose-800
        dark:prefers-contrast:focus:bg-rose-800
        dark:prefers-contrast:border-rose-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-rose-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-rose-50
      `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `red`,
    palette: "bg-red-500 dark:bg-red-600 ring-red-500 dark:ring-red-600",
    active:
      "ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-800",
    color: {
      light: `
        select-none
        transition
        
        bg-stone-50
        text-red-500
        focus:bg-red-500
        hover:bg-red-500
        hover:text-red-50
        focus:text-red-50
        active:bg-red-400
        
        prefers-contrast:border
        prefers-contrast:bg-stone-50
        prefers-contrast:text-red-800
        prefers-contrast:border-red-800
        prefers-contrast:hover:bg-red-50
        prefers-contrast:focus:bg-red-50
        prefers-contrast:hover:text-red-800
        
        dark:bg-stone-900
        dark:text-red-500
        dark:hover:bg-stone-900/50
        dark:focus:bg-stone-900/50
        dark:active:bg-stone-700
        dark:hover:text-red-400
        dark:focus:text-red-400
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-black
        dark:prefers-contrast:text-red-500
        dark:prefers-contrast:hover:bg-red-900
        dark:prefers-contrast:focus:bg-red-900
        dark:prefers-contrast:hover:text-red-50
        dark:prefers-contrast:focus:text-red-50
        dark:prefers-contrast:border-red-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-red-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-red-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
        select-none
        transition
        
        bg-red-500
        text-red-50
        focus:bg-red-600
        hover:bg-red-600
        hover:text-red-50
        focus:text-red-50
        active:bg-red-500
        
        prefers-contrast:border
        prefers-contrast:border-red-800
        prefers-contrast:hover:bg-red-50
        prefers-contrast:focus:bg-red-50
        prefers-contrast:hover:text-red-800
        
        dark:bg-red-600
        dark:text-red-50
        dark:hover:bg-red-500
        dark:focus:bg-red-500
        dark:hover:text-red-50
        dark:focus:text-red-50
        
        dark:prefers-contrast:font-bold
        dark:prefers-contrast:bg-transparent
        dark:prefers-contrast:bg-red-100
        dark:prefers-contrast:text-red-900
        dark:prefers-contrast:hover:bg-red-800
        dark:prefers-contrast:focus:bg-red-800
        dark:prefers-contrast:border-red-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-red-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-red-50
      `.replace(/[\n\r]\s*/g, " "),
    },
  },
];

const ColorRadioButton = ({
  palette,
  active,
  selected = false,
  name,
  setSelected,
}) => {
  return (
    <button
      className={`rounded-full w-6 h-6 m-1 hover:opacity-80 transition flex justify-center items-center ${palette} ${
        selected ? active : ``
      }`}
      onClick={() => setSelected(name)}
    >
      {selected && <CheckIcon className="w-4 h-4 text-white" />}
    </button>
  );
};

function ColorButtons({ setSelectedColor, selectedColor, ...props }) {
  const { t } = useTranslation("button");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={`motion.color`}
      className="flex flex-wrap items-center justify-center gap-2 py-2 mt-2 outline-none min-h-[4rem]"
    >
      {buttonColors.map(({ name, color, palette, active }) => (
        <ColorRadioButton
          key={name}
          {...{
            palette,
            active,
            selected: selectedColor === name,
            name,
            setSelected: setSelectedColor,
          }}
        />
      ))}
    </motion.div>
  );
}

export default ColorButtons;
