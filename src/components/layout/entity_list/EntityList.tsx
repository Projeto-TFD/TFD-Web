import { Search, Eye, Pencil, Trash, Plus } from "lucide-react";
import { ReactNode } from "react";

export interface EntityListProps<T> {
  title: string;
  entities: T[];
  renderName: (item: T) => ReactNode | string;
  renderSubtext: (item: T) => ReactNode;
  renderAvatar: (item: T) => ReactNode;
  renderStatus: (item: T) => ReactNode;
  onAdd: () => void;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  onView: (item: T) => void;
}

export default function EntityList<T>({
  title,
  entities,
  renderName,
  renderSubtext,
  renderAvatar,
  renderStatus,
  onAdd,
  onEdit,
  onDelete,
  onView,
}: EntityListProps<T>) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
        >
          <Plus size={18} /> Novo Registro
        </button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Buscar registro..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 font-medium transition-colors">
          Filtros ▾
        </button>
      </div>

      <div className="space-y-3">
        {entities.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300 text-slate-500">
            Nenhum registro encontrado.
          </div>
        ) : (
          entities.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-300 transition-all group"
            >
              {renderAvatar(item)}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-800 truncate">{renderName(item)}</div>
                <div className="text-xs text-slate-500 truncate">{renderSubtext(item)}</div>
              </div>
              {renderStatus(item)}
              <div className="flex gap-2">
                <button
                  onClick={() => onView(item)}
                  className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 rounded-lg text-slate-500 transition-colors"
                  title="Visualizar"
                >
                  <Eye size={16} />
                </button>
                <button
                  onClick={() => onEdit(item)}
                  className="p-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 rounded-lg text-slate-500 transition-colors"
                  title="Editar"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => onDelete(item)}
                  className="p-2 bg-slate-50 hover:bg-red-50 hover:text-red-600 border border-slate-200 rounded-lg text-slate-500 transition-colors"
                  title="Excluir"
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>Mostrando {entities.length} registros</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Anterior</button>
          <button className="px-3 py-1 border border-blue-600 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 border border-slate-200 rounded bg-white hover:bg-slate-50">Próximo</button>
        </div>
      </div>
    </div>
  );
}
