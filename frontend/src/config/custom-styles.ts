import { tv } from "tailwind-variants";

export const text = tv({
  base: "inline-block tracking-tight leading-relaxed font-normal",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      grey: "from-[#000000] to-[#B4B4B4] dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      xs: "text-base",
      sm: "text-lg",
      md: "text-2xl lg:text-4xl",
      lg: "text-3xl lg:text-6xl",
      xl: "text-4xl lg:text-8xl",
    },
    fullWidth: {
      true: "w-full",
    },
    wide: {
      true: "tracking-wide",
    },
    bold: {
      true: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["violet", "yellow", "blue", "cyan", "green", "pink", "grey"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});
