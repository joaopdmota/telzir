module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        "!<rootDir>/src/index.tsx"
    ],
    preset: 'ts-jest',
    setupFilesAfterEnv: [
        '<rootDir>/config/setupTests.ts',
        '@testing-library/jest-dom/extend-expect'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/config/assetsTransformer.js',
        '\\.(css|less)$': '<rootDir>/config/assetsTransformer.js',
    },
};
