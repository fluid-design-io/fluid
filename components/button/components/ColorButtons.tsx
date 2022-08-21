import { CheckIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export const buttonColors = [
  {
    name: `gray`,
    palette:
      "bg-primary-500 dark:bg-primary-600 ring-primary-500 dark:ring-primary-600 text-white",
    active:
      "ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
        min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-50
        text-primary-800
        focus:bg-primary-100
        hover:bg-primary-100
        hover:text-primary-900
        focus:text-primary-900
        active:bg-primary-200
        
        contrast-more:border
        contrast-more:bg-primary-50
        contrast-more:text-primary-900
        contrast-more:border-primary-800
        contrast-more:hover:bg-primary-50
        contrast-more:focus:bg-primary-50
        contrast-more:hover:text-primary-900
        
        dark:bg-primary-900
        dark:text-primary-100
        dark:hover:bg-primary-900/50
        dark:focus:bg-primary-900/50
        dark:active:bg-primary-700
        dark:hover:text-primary-100
        dark:focus:text-primary-100
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-black
        dark:contrast-more:text-primary-50
        dark:contrast-more:hover:bg-primary-800
        dark:contrast-more:focus:bg-primary-800
        dark:contrast-more:hover:text-primary-50
        dark:contrast-more:focus:text-primary-50
        dark:contrast-more:border-primary-200

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-primary-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-900
        text-primary-100
        focus:bg-primary-800
        hover:bg-primary-800
        hover:text-primary-50
        focus:text-primary-50
        active:bg-primary-700
        
        contrast-more:border
        contrast-more:border-primary-50
        contrast-more:hover:bg-primary-600
        contrast-more:focus:bg-primary-600
        contrast-more:hover:text-primary-50
        
        dark:bg-primary-600
        dark:text-primary-50
        dark:hover:bg-primary-500
        dark:focus:bg-primary-500
        dark:hover:text-primary-50
        dark:focus:text-primary-50
        dark:active:bg-primary-600
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-transparent
        dark:contrast-more:bg-primary-100
        dark:contrast-more:text-primary-900
        dark:contrast-more:hover:bg-primary-800
        dark:contrast-more:focus:bg-primary-800
        dark:contrast-more:border-primary-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary-50
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-primary-50
        `.replace(/[\n\r]\s*/g, " "),
    },
  },
  {
    name: `orange`,
    palette:
      "bg-orange-500 dark:bg-orange-600 ring-orange-500 dark:ring-orange-600 text-white",
    active:
      "ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-50
        text-orange-500
        focus:bg-orange-500
        hover:bg-orange-500
        hover:text-orange-50
        focus:text-orange-50
        active:bg-orange-400
        
        contrast-more:border
        contrast-more:bg-primary-50
        contrast-more:text-orange-800
        contrast-more:border-orange-800
        contrast-more:hover:bg-orange-50
        contrast-more:focus:bg-orange-50
        contrast-more:hover:text-orange-800
        
        dark:bg-primary-900
        dark:text-orange-500
        dark:hover:bg-primary-900/50
        dark:focus:bg-primary-900/50
        dark:active:bg-primary-700
        dark:hover:text-orange-400
        dark:focus:text-orange-400
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-black
        dark:contrast-more:text-orange-500
        dark:contrast-more:hover:bg-orange-900
        dark:contrast-more:focus:bg-orange-900
        dark:contrast-more:hover:text-orange-50
        dark:contrast-more:focus:text-orange-50
        dark:contrast-more:border-orange-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-orange-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-orange-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-orange-500
        text-orange-50
        focus:bg-orange-600
        hover:bg-orange-600
        hover:text-orange-50
        focus:text-orange-50
        active:bg-orange-500
        
        contrast-more:border
        contrast-more:border-orange-800
        contrast-more:hover:bg-orange-50
        contrast-more:focus:bg-orange-50
        contrast-more:hover:text-orange-800
        
        dark:bg-orange-600
        dark:text-orange-50
        dark:hover:bg-orange-500
        dark:focus:bg-orange-500
        dark:active:bg-orange-600
        dark:hover:text-orange-50
        dark:focus:text-orange-50
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-transparent
        dark:contrast-more:bg-orange-100
        dark:contrast-more:text-orange-900
        dark:contrast-more:hover:bg-orange-800
        dark:contrast-more:focus:bg-orange-800
        dark:contrast-more:border-orange-500

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
    palette: "bg-yellow-500 dark:bg-oragne-600 text-black",
    active:
      "ring-yellow-500 ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-primary-50
          text-yellow-600
          focus:bg-yellow-500
          hover:bg-yellow-500
          hover:text-yellow-50
          focus:text-yellow-50
          active:bg-yellow-400
          
          contrast-more:border
          contrast-more:bg-primary-50
          contrast-more:text-yellow-800
          contrast-more:border-yellow-800
          contrast-more:hover:bg-yellow-50
          contrast-more:focus:bg-yellow-50
          contrast-more:hover:text-yellow-800
          
          dark:bg-primary-900
          dark:text-yellow-500
          dark:hover:bg-primary-900/50
          dark:focus:bg-primary-900/50
          dark:active:bg-primary-700
          dark:hover:text-yellow-400
          dark:focus:text-yellow-400
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-black
          dark:contrast-more:text-yellow-500
          dark:contrast-more:hover:bg-yellow-900
          dark:contrast-more:focus:bg-yellow-900
          dark:contrast-more:hover:text-yellow-50
          dark:contrast-more:focus:text-yellow-50
          dark:contrast-more:border-yellow-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-yellow-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-yellow-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-yellow-300
          text-primary-900/75
          focus:bg-yellow-400/80
          hover:bg-yellow-400/80
          hover:text-yellow-900
          focus:text-yellow-900
          active:bg-yellow-400
          
          contrast-more:border
          contrast-more:border-yellow-800
          contrast-more:hover:bg-yellow-50
          contrast-more:focus:bg-yellow-50
          contrast-more:hover:text-yellow-800
          
          dark:bg-yellow-500
          dark:text-primary-900/80
          dark:hover:bg-yellow-400
          dark:focus:bg-yellow-400
          dark:active:bg-yellow-500
          dark:hover:text-yellow-800
          dark:focus:text-yellow-800
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-transparent
          dark:contrast-more:bg-yellow-100
          dark:contrast-more:text-yellow-900
          dark:contrast-more:hover:bg-yellow-800
          dark:contrast-more:focus:bg-yellow-800
          dark:contrast-more:border-yellow-500
  
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
    palette: "bg-lime-500 dark:bg-oragne-600 text-black",
    active:
      "ring-lime-500 ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-primary-50
          text-lime-700
          focus:bg-lime-500
          hover:bg-lime-500
          hover:text-lime-50
          focus:text-lime-50
          active:bg-lime-400
          
          contrast-more:border
          contrast-more:bg-primary-50
          contrast-more:text-lime-800
          contrast-more:border-lime-800
          contrast-more:hover:bg-lime-50
          contrast-more:focus:bg-lime-50
          contrast-more:hover:text-lime-800
          
          dark:bg-primary-900
          dark:text-lime-500
          dark:hover:bg-primary-900/50
          dark:focus:bg-primary-900/50
          dark:active:bg-primary-700
          dark:hover:text-lime-400
          dark:focus:text-lime-400
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-black
          dark:contrast-more:text-lime-500
          dark:contrast-more:hover:bg-lime-900
          dark:contrast-more:focus:bg-lime-900
          dark:contrast-more:hover:text-lime-50
          dark:contrast-more:focus:text-lime-50
          dark:contrast-more:border-lime-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-lime-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-lime-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-lime-300
          text-primary-900/75
          focus:bg-lime-400/80
          hover:bg-lime-400/80
          hover:text-lime-900
          focus:text-lime-900
          active:bg-lime-400
          
          contrast-more:border
          contrast-more:border-lime-800
          contrast-more:hover:bg-lime-50
          contrast-more:focus:bg-lime-50
          contrast-more:hover:text-lime-800
          
          dark:bg-lime-500
          dark:text-primary-900/80
          dark:hover:bg-lime-400
          dark:focus:bg-lime-400
          dark:active:bg-lime-500
          dark:hover:text-lime-800
          dark:focus:text-lime-800
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-transparent
          dark:contrast-more:bg-lime-100
          dark:contrast-more:text-lime-900
          dark:contrast-more:hover:bg-lime-800
          dark:contrast-more:focus:bg-lime-800
          dark:contrast-more:border-lime-500
  
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
    palette: "bg-green-500 dark:bg-oragne-600 text-black",
    active:
      "ring-green-500 ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-primary-50
          text-green-600
          focus:bg-green-500
          hover:bg-green-500
          hover:text-green-50
          focus:text-green-50
          active:bg-green-400
          
          contrast-more:border
          contrast-more:bg-primary-50
          contrast-more:text-green-800
          contrast-more:border-green-800
          contrast-more:hover:bg-green-50
          contrast-more:focus:bg-green-50
          contrast-more:hover:text-green-800
          
          dark:bg-primary-900
          dark:text-green-500
          dark:hover:bg-primary-900/50
          dark:focus:bg-primary-900/50
          dark:active:bg-primary-700
          dark:hover:text-green-400
          dark:focus:text-green-400
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-black
          dark:contrast-more:text-green-500
          dark:contrast-more:hover:bg-green-900
          dark:contrast-more:focus:bg-green-900
          dark:contrast-more:hover:text-green-50
          dark:contrast-more:focus:text-green-50
          dark:contrast-more:border-green-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-green-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-green-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-green-300
          text-primary-900/75
          focus:bg-green-400/80
          hover:bg-green-400/80
          hover:text-green-900
          focus:text-green-900
          active:bg-green-400
          
          contrast-more:border
          contrast-more:border-green-800
          contrast-more:hover:bg-green-50
          contrast-more:focus:bg-green-50
          contrast-more:hover:text-green-800
          
          dark:bg-green-500
          dark:text-primary-900/80
          dark:hover:bg-green-400
          dark:focus:bg-green-400
          dark:active:bg-green-500
          dark:hover:text-green-800
          dark:focus:text-green-800
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-transparent
          dark:contrast-more:bg-green-100
          dark:contrast-more:text-green-900
          dark:contrast-more:hover:bg-green-800
          dark:contrast-more:focus:bg-green-800
          dark:contrast-more:border-green-500
  
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
    palette: "bg-teal-500 dark:bg-oragne-600 text-black",
    active:
      "ring-teal-500 ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-primary-50
          text-teal-600
          focus:bg-teal-500
          hover:bg-teal-500
          hover:text-teal-50
          focus:text-teal-50
          active:bg-teal-400
          
          contrast-more:border
          contrast-more:bg-primary-50
          contrast-more:text-teal-800
          contrast-more:border-teal-800
          contrast-more:hover:bg-teal-50
          contrast-more:focus:bg-teal-50
          contrast-more:hover:text-teal-800
          
          dark:bg-primary-900
          dark:text-teal-500
          dark:hover:bg-primary-900/50
          dark:focus:bg-primary-900/50
          dark:active:bg-primary-700
          dark:hover:text-teal-400
          dark:focus:text-teal-400
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-black
          dark:contrast-more:text-teal-500
          dark:contrast-more:hover:bg-teal-900
          dark:contrast-more:focus:bg-teal-900
          dark:contrast-more:hover:text-teal-50
          dark:contrast-more:focus:text-teal-50
          dark:contrast-more:border-teal-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-teal-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-teal-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-teal-300
          text-primary-900/75
          focus:bg-teal-400/80
          hover:bg-teal-400/80
          hover:text-teal-900
          focus:text-teal-900
          active:bg-teal-400
          
          contrast-more:border
          contrast-more:border-teal-800
          contrast-more:hover:bg-teal-50
          contrast-more:focus:bg-teal-50
          contrast-more:hover:text-teal-800
          
          dark:bg-teal-500
          dark:text-primary-900/80
          dark:hover:bg-teal-400
          dark:focus:bg-teal-400
          dark:active:bg-teal-500
          dark:hover:text-teal-800
          dark:focus:text-teal-800
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-transparent
          dark:contrast-more:bg-teal-100
          dark:contrast-more:text-teal-900
          dark:contrast-more:hover:bg-teal-800
          dark:contrast-more:focus:bg-teal-800
          dark:contrast-more:border-teal-500
  
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
    palette: "bg-sky-400 dark:bg-sky-600 text-black",
    active:
      "ring-sky-500 ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-primary-50
          text-sky-600
          focus:bg-sky-500
          hover:bg-sky-500
          hover:text-sky-50
          focus:text-sky-50
          active:bg-sky-400
          
          contrast-more:border
          contrast-more:bg-primary-50
          contrast-more:text-sky-800
          contrast-more:border-sky-800
          contrast-more:hover:bg-sky-50
          contrast-more:focus:bg-sky-50
          contrast-more:hover:text-sky-800
          
          dark:bg-primary-900
          dark:text-sky-500
          dark:hover:bg-primary-900/50
          dark:focus:bg-primary-900/50
          dark:active:bg-primary-700
          dark:hover:text-sky-400
          dark:focus:text-sky-400
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-black
          dark:contrast-more:text-sky-500
          dark:contrast-more:hover:bg-sky-900
          dark:contrast-more:focus:bg-sky-900
          dark:contrast-more:hover:text-sky-50
          dark:contrast-more:focus:text-sky-50
          dark:contrast-more:border-sky-500
  
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-sky-500
          focus-visible:ring-offset-transparent
          dark:focus-visible:ring-offset-sky-600
          `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
          select-none
          disabled:cursor-not-allowed 
          disabled:opacity-80 
          disabled:filter 
          disabled:saturate-0
          transition-colors
          
          bg-sky-300
          text-primary-900/75
          focus:bg-sky-400/80
          hover:bg-sky-400/80
          hover:text-sky-900
          focus:text-sky-900
          active:bg-sky-400
          
          contrast-more:border
          contrast-more:border-sky-800
          contrast-more:hover:bg-sky-50
          contrast-more:focus:bg-sky-50
          contrast-more:hover:text-sky-800
          
          dark:bg-sky-500
          dark:text-primary-900/90
          dark:hover:bg-sky-400
          dark:focus:bg-sky-400
          dark:active:bg-sky-500
          dark:hover:text-sky-800
          dark:focus:text-sky-800
          
          dark:contrast-more:font-bold
          dark:contrast-more:bg-transparent
          dark:contrast-more:bg-sky-100
          dark:contrast-more:text-sky-900
          dark:contrast-more:hover:bg-sky-800
          dark:contrast-more:focus:bg-sky-800
          dark:contrast-more:border-sky-500
  
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
      "bg-indigo-500 dark:bg-indigo-600 ring-indigo-500 dark:ring-indigo-600 text-white",
    active:
      "ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-50
        text-indigo-500
        focus:bg-indigo-500
        hover:bg-indigo-500
        hover:text-indigo-50
        focus:text-indigo-50
        active:bg-indigo-400
        
        contrast-more:border
        contrast-more:bg-primary-50
        contrast-more:text-indigo-800
        contrast-more:border-indigo-800
        contrast-more:hover:bg-indigo-50
        contrast-more:focus:bg-indigo-50
        contrast-more:hover:text-indigo-800
        
        dark:bg-primary-900
        dark:text-indigo-300
        dark:hover:bg-primary-900/50
        dark:focus:bg-primary-900/50
        dark:active:bg-primary-700
        dark:hover:text-indigo-200
        dark:focus:text-indigo-200
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-black
        dark:contrast-more:text-indigo-500
        dark:contrast-more:hover:bg-indigo-900
        dark:contrast-more:focus:bg-indigo-900
        dark:contrast-more:hover:text-indigo-50
        dark:contrast-more:focus:text-indigo-50
        dark:contrast-more:border-indigo-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-indigo-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-indigo-500
        text-indigo-50
        focus:bg-indigo-600
        hover:bg-indigo-600
        hover:text-indigo-50
        focus:text-indigo-50
        active:bg-indigo-500
        
        contrast-more:border
        contrast-more:border-indigo-800
        contrast-more:hover:bg-indigo-50
        contrast-more:focus:bg-indigo-50
        contrast-more:hover:text-indigo-800
        
        dark:bg-indigo-600
        dark:text-indigo-50
        dark:hover:bg-indigo-500
        dark:focus:bg-indigo-500
        dark:active:bg-indigo-600
        dark:hover:text-indigo-50
        dark:focus:text-indigo-50
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-transparent
        dark:contrast-more:bg-indigo-100
        dark:contrast-more:text-indigo-900
        dark:contrast-more:hover:bg-indigo-800
        dark:contrast-more:focus:bg-indigo-800
        dark:contrast-more:border-indigo-500

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
      "bg-fuchsia-500 dark:bg-fuchsia-600 ring-fuchsia-500 dark:ring-fuchsia-600 text-white",
    active:
      "ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-50
        text-fuchsia-500
        focus:bg-fuchsia-500
        hover:bg-fuchsia-500
        hover:text-fuchsia-50
        focus:text-fuchsia-50
        active:bg-fuchsia-400
        
        contrast-more:border
        contrast-more:bg-primary-50
        contrast-more:text-fuchsia-800
        contrast-more:border-fuchsia-800
        contrast-more:hover:bg-fuchsia-50
        contrast-more:focus:bg-fuchsia-50
        contrast-more:hover:text-fuchsia-800
        
        dark:bg-primary-900
        dark:text-fuchsia-400
        dark:hover:bg-primary-900/50
        dark:focus:bg-primary-900/50
        dark:active:bg-primary-700
        dark:hover:text-fuchsia-400
        dark:focus:text-fuchsia-400
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-black
        dark:contrast-more:text-fuchsia-500
        dark:contrast-more:hover:bg-fuchsia-900
        dark:contrast-more:focus:bg-fuchsia-900
        dark:contrast-more:hover:text-fuchsia-50
        dark:contrast-more:focus:text-fuchsia-50
        dark:contrast-more:border-fuchsia-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-fuchsia-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-fuchsia-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-fuchsia-500
        text-fuchsia-50
        focus:bg-fuchsia-600
        hover:bg-fuchsia-600
        hover:text-fuchsia-50
        focus:text-fuchsia-50
        active:bg-fuchsia-500
        
        contrast-more:border
        contrast-more:border-fuchsia-800
        contrast-more:hover:bg-fuchsia-50
        contrast-more:focus:bg-fuchsia-50
        contrast-more:hover:text-fuchsia-800
        
        dark:bg-fuchsia-600
        dark:text-fuchsia-50
        dark:hover:bg-fuchsia-500
        dark:focus:bg-fuchsia-500
        dark:active:bg-fuchsia-500
        dark:hover:text-fuchsia-50
        dark:focus:text-fuchsia-50
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-transparent
        dark:contrast-more:bg-fuchsia-100
        dark:contrast-more:text-fuchsia-900
        dark:contrast-more:hover:bg-fuchsia-800
        dark:contrast-more:focus:bg-fuchsia-800
        dark:contrast-more:border-fuchsia-500

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
    palette:
      "bg-rose-500 dark:bg-rose-600 ring-rose-500 dark:ring-rose-600 text-white",
    active:
      "ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-50
        text-rose-500
        focus:bg-rose-500
        hover:bg-rose-500
        hover:text-rose-50
        focus:text-rose-50
        active:bg-rose-400
        
        contrast-more:border
        contrast-more:bg-primary-50
        contrast-more:text-rose-800
        contrast-more:border-rose-800
        contrast-more:hover:bg-rose-50
        contrast-more:focus:bg-rose-50
        contrast-more:hover:text-rose-800
        
        dark:bg-primary-900
        dark:text-rose-400
        dark:hover:bg-primary-900/50
        dark:focus:bg-primary-900/50
        dark:active:bg-primary-700
        dark:hover:text-rose-400
        dark:focus:text-rose-400
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-black
        dark:contrast-more:text-rose-500
        dark:contrast-more:hover:bg-rose-900
        dark:contrast-more:focus:bg-rose-900
        dark:contrast-more:hover:text-rose-50
        dark:contrast-more:focus:text-rose-50
        dark:contrast-more:border-rose-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-rose-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-rose-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-rose-500
        text-rose-50
        focus:bg-rose-600
        hover:bg-rose-600
        hover:text-rose-50
        focus:text-rose-50
        active:bg-rose-500
        
        contrast-more:border
        contrast-more:border-rose-800
        contrast-more:hover:bg-rose-50
        contrast-more:focus:bg-rose-50
        contrast-more:hover:text-rose-800
        
        dark:bg-rose-600
        dark:text-rose-50
        dark:hover:bg-rose-500
        dark:focus:bg-rose-500
        dark:active:bg-rose-500
        dark:hover:text-rose-50
        dark:focus:text-rose-50
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-transparent
        dark:contrast-more:bg-rose-100
        dark:contrast-more:text-rose-900
        dark:contrast-more:hover:bg-rose-800
        dark:contrast-more:focus:bg-rose-800
        dark:contrast-more:border-rose-500

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
    palette:
      "bg-red-500 dark:bg-red-600 ring-red-500 dark:ring-red-600 text-white",
    active:
      "ring-2 ring-offset-2 ring-offset-primary-50 dark:ring-offset-primary-800",
    color: {
      light: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-primary-50
        text-red-500
        focus:bg-red-500
        hover:bg-red-500
        hover:text-red-50
        focus:text-red-50
        active:bg-red-400
        
        contrast-more:border
        contrast-more:bg-primary-50
        contrast-more:text-red-800
        contrast-more:border-red-800
        contrast-more:hover:bg-red-50
        contrast-more:focus:bg-red-50
        contrast-more:hover:text-red-800
        
        dark:bg-primary-900
        dark:text-red-400
        dark:hover:bg-primary-900/50
        dark:focus:bg-primary-900/50
        dark:active:bg-primary-700
        dark:hover:text-red-300
        dark:focus:text-red-300
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-black
        dark:contrast-more:text-red-500
        dark:contrast-more:hover:bg-red-900
        dark:contrast-more:focus:bg-red-900
        dark:contrast-more:hover:text-red-50
        dark:contrast-more:focus:text-red-50
        dark:contrast-more:border-red-500

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-red-500
        focus-visible:ring-offset-transparent
        dark:focus-visible:ring-offset-red-600
        `.replace(/[\n\r]\s*/g, " "),
      dark: `
          min-w-[3rem]
        select-none
        disabled:cursor-not-allowed 
        disabled:opacity-80 
        disabled:filter 
        disabled:saturate-0
        transition-colors
        
        bg-red-500
        text-red-50
        focus:bg-red-600
        hover:bg-red-600
        hover:text-red-50
        focus:text-red-50
        active:bg-red-500
        
        contrast-more:border
        contrast-more:border-red-800
        contrast-more:hover:bg-red-50
        contrast-more:focus:bg-red-50
        contrast-more:hover:text-red-800
        
        dark:bg-red-600
        dark:text-red-50
        dark:hover:bg-red-500
        dark:focus:bg-red-500
        dark:active:bg-red-500
        dark:hover:text-red-50
        dark:focus:text-red-50
        
        dark:contrast-more:font-bold
        dark:contrast-more:bg-transparent
        dark:contrast-more:bg-red-100
        dark:contrast-more:text-red-900
        dark:contrast-more:hover:bg-red-800
        dark:contrast-more:focus:bg-red-800
        dark:contrast-more:border-red-500

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
  setCookie,
}) => {
  return (
    <button
      className={`rounded-full w-6 h-6 m-1 hover:opacity-80 transition-colors flex justify-center items-center ${palette} ${
        selected ? active : ``
      }`}
      onClick={() => setCookie("selectedColor", name)}
    >
      {selected && <CheckIcon className="w-4 h-4 text-white" />}
    </button>
  );
};

function ColorButtons({ setCookie, selectedColor, ...props }) {
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
            setCookie: setCookie,
          }}
        />
      ))}
    </motion.div>
  );
}

export default ColorButtons;
