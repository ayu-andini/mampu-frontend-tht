import "@testing-library/jest-dom";

jest.mock("next/link", () => {
    return ({
        children,
    }: {
        children: React.ReactNode;
    }) => children;
});