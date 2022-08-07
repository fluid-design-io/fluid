import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRef, useState } from "react";

function GlassButtonComponent({ setNotification, ...props }) {
  const { t } = useTranslation("button");
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);
  return (
    <div className="w-full h-full min-h-[28rem] relative  glass-button-wrap">
      {/* */}
      <div
        className="absolute z-20 flex items-center justify-center w-[calc(100%-4rem)] h-[calc(100%-6rem)] my-12 mx-8 space-x-8"
        ref={constraintsRef}
      >
        <motion.button
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`relative px-6 py-2 rounded-lg bg-white/50 backdrop-filter backdrop-blur-md backdrop-brightness-105 backdrop-saturate-150 text-black/70 contrast-more:bg-white/80 contrast-more:text-black/90 contrast-more:border-black border border-white/5 transition-colors font-medium  select-none ${
            isDragging
              ? "z-50"
              : "active:bg-white/70 hover:bg-white/60 z-10 contrast-more:hover:bg-white contrast-more:active:border-black"
          }`}
          /* onClick={() =>
            setNotification({
              enabled: true,
              message: t("Button"),
            })
          } */
        >
          Drag Me
        </motion.button>
        <motion.button
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin={true}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`relative px-6 py-2 rounded-lg bg-stone-900/40 backdrop-filter backdrop-blur-md backdrop-brightness-90 backdrop-saturate-150 text-white/70 contrast-more:black/90 contrast-more:text-white/90  dark:contrast-more:border-white border border-white/10 transition-colors font-medium select-none ${
            isDragging
              ? "z-50"
              : "active:bg-black/70 hover:bg-black/60 z-10 contrast-more:hover:bg-black contrast-more:active:border-black"
          }`}
          /* onClick={() =>
            setNotification({
              enabled: true,
              message: t("Button"),
            })
          } */
        >
          Drag Me
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1541904563-aa0331e9f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          }
          layout="fill"
          objectFit="cover"
          alt="Fall. By Aaron Burden from Unsplash."
        />
      </div>
      {/* <>
        <span
          className="glass-bg-one glass-bg-circle dim_two azure blur_one op_seven"
          style={{ top: "2%", left: " 2%" }}
        />
        <span
          className="glass-bg-two glass-bg-circle dim_three ciano blur_one op_three"
          style={{ top: "10%", left: " 6%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_four purple blur_one op_two"
          style={{ top: "11%", left: " 5%" }}
        />
        <span
          className="glass-bg-three glass-bg-circle dim_three blue blur_one op_one"
          style={{ top: "21%", left: " 15%" }}
        />
        <span
          className="glass-bg-three glass-bg-circle dim_three white blur_one op_three"
          style={{ top: "20%", left: " 18%" }}
        />
        <span
          className="glass-bg-three glass-bg-circle dim_three white blur_one op_three"
          style={{ top: -"4%", left: " 24%" }}
        />

        <span
          className="glass-bg-two glass-bg-circle dim_six white blur_two op_two"
          style={{ top: "50%", left: " 78%" }}
        />
        <span
          className="glass-bg-three glass-bg-circle dim_seven ciano blur_one op_seven"
          style={{ top: "60%", left: " 80%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_three purple blur op_five"
          style={{ top: "72%", left: " 87%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_four white blur_two op_four"
          style={{ top: "67%", left: " 86%" }}
        />

        <span
          className="glass-bg-two glass-bg-circle dim_three blue blur_one op_four"
          style={{ top: "40%", left: " -3%" }}
        />
        <span
          className="glass-bg-three glass-bg-circle dim_three white blur_one op_three"
          style={{ top: "70%", left: " 2%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_three white blur_three op_three"
          style={{ top: "90%", left: " 50%" }}
        />

        <span
          className="glass-bg-one glass-bg-circle dim_three blue blur_three op_five"
          style={{ top: "13%", left: " 53%" }}
        />
        <span
          className="glass-bg-three glass-bg-circle dim_three purple blur_one op_two"
          style={{ top: "3%", left: " 78%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_five white blur_two op_three"
          style={{ top: "7%", left: " 80%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_two ciano blur_two op_three"
          style={{ top: "12%", left: " 78%" }}
        />
        <span
          className="glass-bg-two glass-bg-circle dim_five ciano blur_one op_six"
          style={{ top: "12%", left: " 57%" }}
        />
        <span
          className="glass-bg-two glass-bg-circle dim_four white blur_one op_four"
          style={{ top: "67%", left: " 86%" }}
        />

        <span
          className="glass-bg-three glass-bg-circle dim_six white blur_two op_two"
          style={{ top: "50%", left: " 38%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_seven ciano blur_one op_seven"
          style={{ top: "45%", left: " 43%" }}
        />
        <span
          className="glass-bg-one glass-bg-circle dim_three purple op_five"
          style={{ top: "55%", left: " 50%" }}
        />
        <span
          className="glass-bg-two glass-bg-circle dim_four white blur_one op_four"
          style={{ top: "42%", left: " 56%" }}
        />
        <span
          className="glass-bg-two glass-bg-circle dim_four ciano blur_one op_five"
          style={{ top: "42%", left: " 56%" }}
        />
        <span
          className="glass-bg-two glass-bg-circle dim_four purple blur_five op_six"
          style={{ top: "2%", left: " 5%" }}
        />
        <span
          className="glass-bg-seven glass-bg-circle dim_three ciano blur_three op_seven"
          style={{ top: "42%", left: " 25%" }}
        />
      </> */}
    </div>
  );
}

export default GlassButtonComponent;
