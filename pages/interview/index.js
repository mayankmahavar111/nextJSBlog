import Link from "next/link";
import { interviewTopicListRoute } from "../../components/api/helper";
import { listContainerVariant } from "../../components/motion/listMotion";
import { motion } from "framer-motion";

export default function Interview(props) {
  return (
    <main>
      <h1>Interview related Topic list</h1>
      <motion.div
        initial="hidden"
        animate="show"
        variants={listContainerVariant}
      >
        {interviewTopicListRoute.map((item) => {
          return (
            item.indexFile === false && (
              <Link href={item?.link} key={item?.key}>
                {item?.name}
              </Link>
            )
          );
        })}
      </motion.div>
    </main>
  );
}
