
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { AnimatePresence, MotionConfig, motion, useMotionTemplate, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Carousel = ({ images, thumbnails}) => {
    
    let [index, setIndex] = useState(0);

    let x = index * 100;
    let xSpring = useSpring(x, { bounce: 0 });
    let xPercentage = useMotionTemplate`-${xSpring}%`;

    useEffect(() => {
        xSpring.set(x);
    }, [x, xSpring]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "ArrowLeft") {
                if (index > 0) {
                    setIndex(index - 1);
                }
            } else if (e.key === "ArrowRight") {
                if (index < images.length - 1) {
                    setIndex(index + 1);
                }
            }
        }

        document.addEventListener("keydown", handleKeyPress);

        return () => {
        document.removeEventListener("keydown", handleKeyPress);
        };
    }, [index]);

    return (
        <div className="carousel">
            <MotionConfig transition={{ type: "spring", bounce: 0 }}>
                <div className="flex h-full flex-col justify-between">
                    <div className="relative mb-3 overflow-hidden">
                        <motion.div style={{ x: xPercentage }} className="flex">
                            {images.map((image, i) => (
                            <motion.img
                                key={image}
                                src={image}
                                animate={{ opacity: i === index ? 1 : 0.4 }}
                                className="aspect-[1.85] w-full flex-shrink-0 object-cover"
                            />
                            ))}
                        </motion.div>
                        <div className="carousel-buttons">
                            <AnimatePresence initial={false}>
                                {index > 0 && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    exit={{ opacity: 0, pointerEvents: "none" }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                                    onClick={() => setIndex(index - 1)}
                                >
                                    <CaretLeftIcon key="ArrowLeft" className="h-6 w-6 text-black" />
                                </motion.button>
                                )}
                            </AnimatePresence>

                            <AnimatePresence initial={false}>
                                {index + 1 < images.length && (
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.7 }}
                                    exit={{ opacity: 0, pointerEvents: "none" }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                                    onClick={() => setIndex(index + 1)}
                                >
                                    <CaretRightIcon key="ArrowRight" className="h-6 w-6 text-black" />
                                </motion.button>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    {thumbnails ? 
                        <Thumbnails index={index} setIndex={setIndex} images={images}/> :
                        <Dots index={index} setIndex={setIndex} images={images}/>
                    }
                </div>
            </MotionConfig>
        </div>
    );
    }

const Thumbnails = ({ index, setIndex, images }) => {

    const COLLAPSED_ASPECT_RATIO = 0.5;
    const FULL_ASPECT_RATIO = 3 / 2;
    const MARGIN = 10;
    const GAP = 2;

    let x = index * 100 * (COLLAPSED_ASPECT_RATIO / FULL_ASPECT_RATIO) + MARGIN + index * GAP;
    let xSpring = useSpring(x, { bounce: 0 });
    let xPercentage = useMotionTemplate`-${xSpring}%`;

    useEffect(() => {
        xSpring.set(x);
    }, [x, xSpring]);

    return (
        <div className="mb-4 flex h-12 justify-center overflow-hidden m-1">
            <motion.div
                style={{
                aspectRatio: FULL_ASPECT_RATIO,
                gap: `${GAP}%`,
                x: xPercentage
                }}
                className="flex min-w-0"
            >
                {images.map((image, i) => (
                <motion.button
                    onClick={() => setIndex(i)}
                    initial={false}
                    animate={i === index ? "active" : "inactive"}
                    variants={{
                    active: {
                        aspectRatio: FULL_ASPECT_RATIO,
                        marginLeft: `${MARGIN}%`,
                        marginRight: `${MARGIN}%`,
                        opacity: 1
                    },
                    inactive: {
                        aspectRatio: COLLAPSED_ASPECT_RATIO,
                        marginLeft: 0,
                        marginRight: 0,
                        opacity: 0.5
                    }
                    }}
                    className="h-full shrink-0"
                    key={image}
                >
                    <img alt="" src={image} className="h-full w-full object-cover" />
                </motion.button>
                ))}
            </motion.div>
        </div>
    );
}


const Dots = ({ index, setIndex, images }) => {

    const FULL_ASPECT_RATIO = 1;
    const GAP = 40;

    return (
        <div className="mb-4 flex h-2 justify-center">
            <motion.div
                    style={{
                    aspectRatio: FULL_ASPECT_RATIO,
                    gap: `${GAP}%`,
                }}
                className="flex justify-center min-w-0 "
            >
                {images.map((image, i) => (
                <motion.button
                    onClick={() => setIndex(i)}
                    initial={false}
                    animate={i === index ? "active" : "inactive"}
                    variants={{
                        active: {
                            aspectRatio: FULL_ASPECT_RATIO,
                            opacity: 1
                        },
                        inactive: {
                            aspectRatio: 1,
                            opacity: 0.3
                        }
                    }}
                    className="shrink-0"
                    key={image}
                >
                    <div className="h-full w-full object-cover bg-gray-500 rounded-xl" />
                </motion.button>
                ))}
            </motion.div>
        </div>
    );
}