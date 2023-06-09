import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import BigText from "@/shared/htextog";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Whether you're a seasoned weight lifter or just starting your journey into strength training, our expert-led classes are designed to help you build muscle, increase endurance, and achieve the sculpted physique you've always desired.",
    image: image5
  },
  {
    name: "Zumba",
    description:
      "Zumba is not just a workout; it's a celebration of movement. Our Zumba classes combine energetic dance moves with exhilarating music, creating an infectious atmosphere that will leave you feeling energized and alive.",
    image: image1
  },
  {
    name: "Yoga",
    description:
      "In our yoga classes, we believe that movement is a pathway to self-discovery and inner peace. Guided by our experienced yoga instructors, you'll explore a variety of yoga styles, from gentle Hatha and rejuvenating Vinyasa to powerful Ashtanga and meditative Yin. ",
    image: image2
    },
  {
    name: "Martial Arts",
    description:
      "Martial arts is more than just a physical practice; it's a path to personal growth and empowerment. In our martial arts class, you'll learn a combination of striking, grappling, and self-defense techniques derived from various disciplines.",
    image: image4
    },
  {
    name: "Aerobics",
    description:
      "Our aerobics class is designed to get your heart pumping and your blood flowing. With a combination of high-energy movements, choreographed routines, and invigorating music, you'll engage in a full-body workout that targets multiple muscle groups while boosting your cardiovascular endurance.",
    image: image3
    },
  {
    name: "General Fitness",
    description:
      "Our general fitness class is a comprehensive workout that targets various aspects of physical fitness. From cardiovascular conditioning and strength training to flexibility and core stability, each session is thoughtfully designed to provide a well-rounded workout that challenges your body in different ways.",
    image: image6
    },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <BigText>OUR CLASSES</BigText>
            <p className="py-5">
              At EVOGYM, we believe that fitness should be both effective and
              enjoyable. That's why we've curated an incredible lineup of
              fitness classes designed to challenge and inspire you. From
              high-intensity interval training (HIIT) and body sculpting to
              yoga, dance, and everything in between, there's a class to suit
              every interest and fitness level.
            </p>
          </div>
        </motion.div>
        <div className="md:mx-20 mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image}/>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
