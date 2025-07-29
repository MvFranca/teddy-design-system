interface ClientCardProps {
    name: string;
    salary: number;
    company: number;
    variant?: "with-buttons" | "simple";
    onEdit?: () => void;
    onDelete?: () => void;
    onAdd?: () => void;
    onDeleteSelect?: () => void;
}
export declare function ClientCard({ name, salary, company, variant, onEdit, onDelete, onAdd, onDeleteSelect, }: ClientCardProps): import("react/jsx-runtime").JSX.Element;
export {};
