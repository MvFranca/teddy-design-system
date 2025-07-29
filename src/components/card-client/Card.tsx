import Add from "../../icons/add.svg";
import Edit from "../../icons/edit.svg";
import Bin from "../../icons/bin.svg";

interface ClientCardProps {
  name: string;
  salary: number;
  company: number;
  variant?: "with-buttons" | "simple";
}

export function ClientCard({
  name,
  salary,
  company,
  variant = "with-buttons",
}: ClientCardProps) {
  return (
    <div className="p-4 flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-sm h-[138px] flex-col">
      <div className="flex flex-col justify-center items-center gap-[15px] relative">
        <div className="text-center flex flex-col items-center">
          <h3 className="font-semibold text-black text-[16px]">{name}</h3>
          <p className=" text-sm text-black mt-[10px]">Salário: {salary}</p>
          <p className=" text-sm text-black ">Empresa: {company}</p>
        </div>
      </div>
      {variant === "with-buttons" && (
        <div className="w-full flex items-center justify-between gap-4">
          <button className="cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded">
            <img src={Add} alt="Botão de adicionar" width={17} height={17} />
          </button>
          <button className="cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded">
            <img
              src={Edit}
              alt="Botão de excluir"
              className="h-4 w-4 text-red-500"
              width={20}
              height={20}
            />
          </button>
          <button className="cursor-pointer flex items-center justify-center hover:bg-red-50 rounded">
            <img
              src={Bin}
              alt="Botão de excluir"
              className="h-4 w-4 text-red-500"
              width={20}
              height={20}
            />
          </button>
        </div>
      )}

      {variant === "simple" && (
        <div className="p-4 absolute bottom-3 right-3">
          <div className="w-4 h-0.5 bg-red-500"></div>
        </div>
      )}
    </div>
  );
}
