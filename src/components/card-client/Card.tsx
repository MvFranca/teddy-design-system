import Add from "../../icons/add.svg";
import Edit from "../../icons/edit.svg";
import Bin from "../../icons/bin.svg";

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

export function ClientCard({
  name,
  salary,
  company,
  variant = "with-buttons",
  onEdit,
  onDelete,
  onAdd,
  onDeleteSelect,
}: ClientCardProps) {
  return (
    <div className="p-4 flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm h-[138px] flex-col">
      <div className="flex flex-col justify-center items-center gap-[15px] relative">
        <div className="text-center flex flex-col items-center">
          <h3 className="font-semibold text-black text-[16px]">{name}</h3>
          <p className="text-sm text-black mt-[10px]">Salário: R${salary}</p>
          <p className="text-sm text-black">Empresa: R${company}</p>
        </div>
      </div>

      {variant === "with-buttons" && (
        <div className="w-full flex items-center justify-between gap-4">
          <button
            onClick={onAdd}
            className="cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded"
          >
            <img src={Add} alt="Adicionar" width={17} height={17} />
          </button>

          <button
            onClick={onEdit}
            className="cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded"
          >
            <img
              src={Edit}
              alt="Editar"
              className="h-4 w-4"
              width={25}
              height={25}
            />
          </button>

          <button
            onClick={onDelete}
            className="cursor-pointer flex items-center justify-center hover:bg-red-50 rounded"
          >
            <img
              src={Bin}
              alt="Excluir"
              className="h-4 w-4"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}

      {variant === "simple" && (
        <div className="w-full flex items-center justify-end gap-4">
          <button
            onClick={onDeleteSelect}
            className="p-2 cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded"
            title="Remover"
          >
            <span className="text-black w-3 h-0.5 bg-red-600"></span>
          </button>
        </div>
      )}
    </div>
  );
}
