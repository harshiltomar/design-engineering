'use client';
import { motion } from 'framer-motion';

export const SVGcomponent = () => {
    return (
        <div className="h-20 w-20 flex bg-white rounded-md shadow-sm items-center justify-center">
            <SVG />
        </div>
    );
};

export const DiamondSVG = () => {
    return (
        <motion.svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 399.88599322743346 418.641274397899"
            width="799.7719864548669"
            height="837.282548795798"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
        >
            {/* svg-source:excalidraw */}
            <metadata></metadata>
            <defs>
                {/* <style className="style-fonts"></style> */}
            </defs>
            <rect
                x="0"
                y="0"
                width="399.88599322743346"
                height="418.641274397899"
                fill="#f8f9fa"
            ></rect>
            <g
                strokeLinecap="round"
                transform="translate(10 10) rotate(0 189.94299661371673 199.3206371989495)"
            >
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M190 0 C253.47 66.85, 316.94 133.71, 379.89 200 M190 0 C255.02 68.49, 320.05 136.98, 379.89 200 M379.89 200 C328.27 253.99, 276.66 307.99, 190 398.64 M379.89 200 C308.47 274.71, 237.05 349.43, 190 398.64 M190 398.64 C149.46 356.25, 108.91 313.87, 0 200 M190 398.64 C140.72 347.12, 91.44 295.6, 0 200 M0 200 C51.3 146, 102.6 92, 190 0 M0 200 C64.76 131.83, 129.53 63.66, 190 0"
                    stroke="#1e1e1e"
                    strokeWidth="2"
                    fill="none"
                ></motion.path>
            </g>
        </motion.svg>
    );
};

export const SVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-bell"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
            <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
        </svg>
    );
};