import Logo from "@/assets/Logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
         className="justify-content mx-auto w-5/6 gap-16 md:flex"
      >
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5 ">
            Elevate Your Fitness. Transform Your Life. Unleash Your Potential at
            EVOGYM.
          </p>
          <p>© EVOGYM All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 ">Class Schedule</p>
          <p className="my-5 ">Book a Training Session</p>
          <p className="my-5 ">Custom Fitness Plans</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 ">evofitness@evogym.com</p>
          <p className="my-5 ">(332)436-0965</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
