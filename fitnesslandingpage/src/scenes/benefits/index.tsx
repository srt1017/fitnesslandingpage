import HText from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"></HomeModernIcon>,
    title: "State of the Art Facilities",
    description:
      "A mesmerising 10,000 square foot lot with indoor/outdoor sections. 3 pools, 2 basketball courts, 2 tennis courts, a volleyball pit, a soccer field, fitness studio rooms for classes, and a weightlifting section with turf and a posing room. ",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"></UserGroupIcon>,
    title: "Dozens of Diverse Classes",
    description:
      "Sculpt and tone your body in our high-intensity strength training sessions, ignite your metabolism in calorie-blasting cardio classes, find your inner balance in yoga and meditation, or unleash your inner warrior in our world-renowned martial arts-inspired workouts.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"></AcademicCapIcon>,
    title: "Expert Trainers and Coaches",
    description:
      "Our coaches and trainers are more than just instructors; they are mentors, motivators, and guides on your fitness journey. With a wealth of knowledge and experience in various disciplines, they possess the skills to design personalized workout programs tailored to your unique needs and aspirations.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers, and classes to
            help guide you to your fitness goals. We pride ourselves on being
            able to assist anyone in transforming their body. Whether you are a
            professional athlete, or someone just beginning their fitness
            journey, our coaches build custom plans that are tailor made to fit
            you.
          </p>
          motion.
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 self-auto md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            ></Benefit>
          ))}
        </motion.div>

        {/* Graphics and description */}

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">

          {/* Graphic*/}
          <img
          className="mx-auto"
          src={BenefitsPageGraphic} alt="benefits-page-graphic" />

          {/*title*/}

          <div className="relative mt-5">
            <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>

            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            >
              <p className="my-5">
                At EVOGYM, we believe that fitness should be enjoyable and
                engaging, while also providing an adequate challenge. That's why
                we offer a diverse range of group fitness classes led by our
                enthusiastic instructors. From heart-pumping HIIT sessions to
                invigorating yoga classes, there's something for everyone,
                regardless of your fitness level or preferences. Join our
                fitness community, surround yourself with like-minded
                individuals, and experience the power of collective motivation
                and support.
              </p>
              <p className="mb-5">
                Your fitness journey doesn't end when you step out of the gym.
                That's why we provide comprehensive support to help you lead a
                healthy and balanced lifestyle. Our nutrition experts will offer
                guidance on fueling your body with the right nutrients, while
                our wellness programs will help you manage stress and find inner
                peace. We're committed to your overall well-being and are here
                to support you beyond the gym walls.
              </p>
            </motion.div>

            {/*button*/}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
