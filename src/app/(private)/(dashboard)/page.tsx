import Badge, { BadgeVariant } from "@/src/components/ui/Badge";
import StatCard from "@/src/components/ui/StatCard";
import { Users, User, Bus, Briefcase } from "lucide-react";

export default function DashboardPage() {
  const destinations = [
    { city: "Cajazeiras", value: 62, percent: "w-[85%]" },
    { city: "Sousa", value: 41, percent: "w-[60%]" },
    { city: "João Pessoa", value: 22, percent: "w-[35%]" },
    { city: "Patos", value: 17, percent: "w-[25%]" },
  ];

  const recentTrips: {
    date: string;
    driver: string;
    vehicle: string;
    dest: string;
    pass: number;
    status: BadgeVariant;
  }[] = [
    { date: "20/05", driver: "João Silva", vehicle: "PBR-2341", dest: "Cajazeiras", pass: 7, status: "success" },
    { date: "20/05", driver: "Marcos Lima", vehicle: "MRZ-1190", dest: "Sousa", pass: 4, status: "info" },
    { date: "19/05", driver: "Pedro Alves", vehicle: "JOA-5512", dest: "João Pessoa", pass: 11, status: "success" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard — Maio 2026</h1>
        <div className="text-sm text-slate-500">Atualizado em: {new Date().toLocaleDateString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total de Viagens"
          value="142"
          subValue="+18 este mês"
          icon={<Briefcase size={18} />}
          trend="positive"
        />
        <StatCard label="Passageiros" value="631" subValue="Transportados" icon={<Users size={18} />} />
        <StatCard label="Motoristas" value="8" subValue="Ativos" icon={<User size={18} />} />
        <StatCard label="Veículos" value="5" subValue="Em operação" icon={<Bus size={18} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-sm font-bold text-slate-700 uppercase mb-6 tracking-wide">Viagens por Destino</h2>
          <div className="space-y-4">
            {destinations.map((item) => (
              <div key={item.city} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-slate-600">
                  <span>{item.city}</span>
                  <span>{item.value}</span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-blue-600 rounded-full ${item.percent}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Viagens Recentes</h2>
          </div>
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
              <tr className="border-b border-slate-100">
                <th className="px-6 py-3">Data</th>
                <th className="px-6 py-3">Motorista</th>
                <th className="px-6 py-3">Veículo</th>
                <th className="px-6 py-3">Destino</th>
                <th className="px-6 py-3 text-center">Pac.</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-100">
              {recentTrips.map((trip, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-slate-600">{trip.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-800">{trip.driver}</td>
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{trip.vehicle}</td>
                  <td className="px-6 py-4 text-slate-600">{trip.dest}</td>
                  <td className="px-6 py-4 text-center font-bold text-slate-800">{trip.pass}</td>
                  <td className="px-6 py-4">
                    <Badge variant={trip.status}>{trip.status === "success" ? "Concluída" : "Em andamento"}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
