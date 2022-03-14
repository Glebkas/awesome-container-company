const heroTextAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const imageComparisonAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const chatAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const problemTextAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const problemGraphAnimation = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: (custom) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const problemImageAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export {
    heroTextAnimation,
    imageComparisonAnimation,
    chatAnimation,
    problemTextAnimation,
    problemImageAnimation,
    problemGraphAnimation,
};
