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

const chatMsgAnimationUser = {
    hidden: {
        x: 100,
        opacity: 0,
        display:'none',

    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 1.1 },
        display:'block',

    }),
};

const chatMsgAnimationAdmin = {
    hidden: {
        x: -100,
        opacity: 0,
        display:'none',
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 1.1 },
        display:'block',
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

const solutionTextAnimation = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom) => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

const solutionCaruselAnimation = {
    hidden: {
        y: 100,
        rotate: 20,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        rotate: 0,
        transition: { duration: 1, delay: custom * 0.2 },
    }),
};

const solutionIconAnimation = {
    hidden: {
        y: 100,
        rotate: 20,
        opacity: 0,
        scale: 1.2,
    },
    visible: {
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6 },
    },
};

const pointsBoxAnimation = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom) => ({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, delay: custom * 0.2 },
    }),
};

const contactFormAnimation = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: (custom) => ({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, delay: custom * 0.2 },
    }),
};

export {
    heroTextAnimation,
    imageComparisonAnimation,
    chatAnimation,
    chatMsgAnimationUser,
    chatMsgAnimationAdmin,
    problemTextAnimation,
    problemImageAnimation,
    problemGraphAnimation,
    solutionCaruselAnimation,
    solutionTextAnimation,
    solutionIconAnimation,
    pointsBoxAnimation,
    contactFormAnimation,
};
