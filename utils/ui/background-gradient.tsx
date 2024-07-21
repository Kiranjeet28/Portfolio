import { cn } from "../cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  isDarkMode = false,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  isDarkMode?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 20%", "50% 25%", "0 30%"],
    },
  };

  const lightModeGradient = "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffc414,#141316)]";
  const darkModeGradient = "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_100%_0,#4b0082,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#4b0082,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffc414,#141316)]";

  const selectedGradient = isDarkMode ? darkModeGradient : lightModeGradient;

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform",
          selectedGradient
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute will-change-transform",
          selectedGradient
        )}
      />

      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
};
