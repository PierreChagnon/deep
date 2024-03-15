import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

const AnimatedButtons = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(false);
    };

    return (
        <div className=''>
            <AnimatePresence mode='popLayout'>
                {isVisible && (
                    <motion.button
                        initial={{ y: 50, opacity: 0 }}
                        exit={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        onClick={handleButtonClick}
                    >
                        Oui
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence mode='popLayout'>
                {isVisible && (
                    <motion.button
                        initial={{ y: 50, opacity: 0 }}
                        exit={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        onClick={handleButtonClick}
                    >
                        Non
                    </motion.button>
                )}
            </AnimatePresence>

            {!isVisible && (
                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Oui
                </motion.button>
            )}

            {!isVisible && (
                <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Non
                </motion.button>
            )}
        </div>
    );
};

export default AnimatedButtons;
