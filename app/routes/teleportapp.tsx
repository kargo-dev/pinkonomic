import { forwardRef } from "react";
import { motion } from "framer-motion";
import HomeButton from "~/components/HomeButton";

const TELEPORT_URL = "https://pinkteleports.netlify.app/";

const TeleportApp = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    id="teleport-app"
    ref={ref}
    className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
  >
    <HomeButton />

    {/* 🔥 Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-pink-700/50 to-black opacity-60 -z-10"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] bg-pink-500 rounded-full blur-[160px] opacity-30 -z-10"></div>

    {/* 🌌 Section Title (Positioned on Sides for Visual Balance) */}
    <div className="relative flex items-center justify-center min-h-screen w-full">
      {/* 🏆 "Teleport" Text (Left Side, Vertical) */}
      <motion.h2
        className="absolute left-10 text-3xl md:text-5xl font-bold tracking-wide uppercase bg-gradient-to-b from-pink-400 to-blue-500 text-transparent bg-clip-text hidden lg:block rotate-180 [writing-mode:vertical-rl]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Teleport $Pink
      </motion.h2>

      {/* 🌌 Teleport App Embed (Gradient Border) */}
      <motion.div
        className="relative w-full max-w-[1027px] h-[680px] rounded-3xl overflow-hidden"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* ✨ Gradient Border */}
        <div className="absolute inset-0 rounded-3xl p-[8px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <div className="relative w-full h-full bg-black rounded-3xl overflow-hidden">
            {/* 🛸 Teleport iFrame */}
            <iframe
              src={TELEPORT_URL}
              title="Pink Teleports"
              className="w-full h-full rounded-3xl"
              style={{ display: "block" }}
            ></iframe>

            {/* 💫 Subtle Glow for Depth */}
            <motion.div
              className="absolute inset-0 bg-pink-500/30 blur-[160px] rounded-3xl -z-10"
              animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            {/* 🌟 Diffusing Shadow Effect */}
            <motion.div
              className="absolute inset-[-40px] bg-pink-500/10 blur-[200px] rounded-3xl -z-20"
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
      </motion.div>

      {/* 🏆 "Teleport" Text (Right Side, Vertical) */}
      <motion.h2
        className="absolute right-10 text-3xl md:text-5xl font-bold tracking-wide uppercase bg-gradient-to-b from-pink-400 to-blue-500 text-transparent bg-clip-text hidden lg:block [writing-mode:vertical-rl]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Teleport $Pink
      </motion.h2>
    </div>
  </section>
));

TeleportApp.displayName = "TeleportApp";
export default TeleportApp;
