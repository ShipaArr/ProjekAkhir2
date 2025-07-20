export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center">
        {icon && <div className="mr-4 text-indigo-500">{icon}</div>}
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-3xl font-bold">{value}</p>
        </div>
      </div>
      <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-500">
        More info →
      </button>
    </div>
  );
}