import { motion } from "framer-motion";

const routeVariants = {
    initial: {
        opacity: 0,
    },
    final: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.5,
        },
    },
};

const childVariants = {
    initial: {
        y: "10px",
    },
    final: {
        y: "0px",
        transition: {
            duration: 0.5,
            delay: 0.5,
        },
    },
};


export const MotionRoute = ({ children }) => {
    return (
        <motion.div
            variants={routeVariants}
            initial="initial"
            animate="final"
            className="home component"
        >
        {children}
        </motion.div>
    )
}

export const MotionChild = ({ children }) => {
    return (
        <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="home component"
        >
        {children}
        </motion.div>
    )
}

export const MotionSlider = ({ children }) => {
    return (
        <motion.div className="carousel">
            <motion.div className="inner-carousel">
                {children.map((child) => {
                    return (
                        <motion.div>
                            {child}
                        </motion.div>
                    )
                })
                }
            </motion.div>
        </motion.div>
    );
};

