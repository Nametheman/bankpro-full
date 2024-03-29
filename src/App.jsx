import Partners from "./components/Partners";
import HeroSection from "./sections/HeroSection";
import EmpoweringSection from "./sections/EmpoweringSection";
import Trial from "./components/Trial";
import Features from "./sections/Features";
import Footer from "./components/Footer";
import Unleash from "./sections/Unleash";
import StartTrial from "./components/StartTrial";
import { motion } from "framer-motion";
import styled from "styled-components";
import MobileNav from "./components/MobileNa";
import ScrollToTop from "./components/ScrollToTop";
import Bankpro from "./components/Bankpro";
import Lenis from "@studio-freight/lenis";

function App() {
  const workVariants = {
    offscreen: {
      y: "10%",
      opacity: 0,
    },
    onscreen: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", duration: 1, bounce: 0.3, delay: 0.4 },
    },
  };

  const lenis = new Lenis({
    duration: 2.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on("scroll", (e) => {
    console.log(e);
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <Wrapper>
      <MobileNav />
      <HeroSection />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Partners />
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <section id="features">
            <EmpoweringSection />
          </section>
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Trial />
        </motion.div>
      </motion.div>

      <Features />

      <Bankpro />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Unleash />
        </motion.div>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <StartTrial />
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Footer />
        </motion.div>
      </motion.div>
      <ScrollToTop />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  position: relative;
`;
