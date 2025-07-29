interface ClientCardProps {
    name: string;
    salary: number;
    company: number;
    variant?: "with-buttons" | "simple";
}
export declare function ClientCard({ name, salary, company, variant, }: ClientCardProps): import("react/jsx-runtime").JSX.Element;
export {};
