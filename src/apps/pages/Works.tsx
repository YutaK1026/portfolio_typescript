import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import CODE_DUEL from "./CODE_DUEL.png"
import { NavigationComponents } from "../../libs/home/components/Navigater/Example";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const worksImg = [CODE_DUEL , "HYOKA"]
const worksTitle = ["CODE_DUEL","HYOKA"]

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
		<section>
			<NavigationComponents/>
				<div ref={ref}>
						<img src={`${worksImg[0]}`} className = "works-img" alt="picture" />
				</div>
				<motion.h2 style={{ y }} className = "works-title">
					{`#00${id}`}
					<br/>
					{`${worksTitle[id-1]}`}
				</motion.h2>
		</section>
  );
}

export default function Works() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
			<motion.article
				initial="hidden"
				animate="visible"
				exit={{ opacity: 0, transition: { duration: 0.5 } }}
			>
				{[1, 2, 3, 4, 5].map((image) => (
						<Image id={image} />
				))}
				<motion.div className="progress" style={{ scaleX }} />
			</motion.article>
    </>
  );
}
