type Trip = {
  id: string
  vehicle: string
  driver: string
  origin: string
  destination: string
  status: string
}

export default function TripTable({ trips }: { trips: Trip[] }) {
  return (
    <div className="bg-[#1B1E19] rounded-2xl p-5 border border-[#2a2d27]">
      <h2 className="font-semibold mb-4 text-[#74A8BA]">
        Active Trips
      </h2>

      {trips.length === 0 ? (
        <div className="text-gray-400 text-sm">
          No trips yet
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-[#2E7536] text-white">
            <tr>
              <th className="p-3 text-left">Vehicle</th>
              <th className="p-3 text-left">Driver</th>
              <th className="p-3 text-left">Origin</th>
              <th className="p-3 text-left">Destination</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {trips.map(t => (
              <tr
                key={t.id}
                className="border-b border-[#2a2d27]"
              >
                <td className="p-3">{t.vehicle}</td>
                <td className="p-3">{t.driver}</td>
                <td className="p-3">{t.origin}</td>
                <td className="p-3">{t.destination}</td>
                <td className="p-3 text-green-400">
                  {t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}