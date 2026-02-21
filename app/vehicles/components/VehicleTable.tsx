import { Vehicle } from '../types'

type Props = {
  vehicles: Vehicle[]
}

const StatusBadge = ({ status }: { status: string }) => {
  let style = 'bg-gray-700 text-gray-200'

  if (status === 'Available') {
    style = 'bg-green-900/40 text-green-300'
  } else if (status === 'On Trip') {
    style = 'bg-yellow-900/40 text-yellow-300'
  } else if (status === 'In Shop') {
    style = 'bg-red-900/40 text-red-300'
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${style}`}>
      {status}
    </span>
  )
}

export default function VehicleTable({ vehicles }: Props) {
  return (
    <div className="bg-[#1B1E19] rounded-2xl shadow-md border border-[#2a2d27] p-5 text-gray-100">
      {/* Header */}
      <h2 className="font-semibold mb-4 text-[#E4BF1B]">
        Fleet Flow
      </h2>

      {/* Table wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-[#2a2d27]">
          <thead className="bg-[#2E7536] text-white">
            <tr>
              <th className="p-3 text-left">Plate</th>
              <th className="p-3 text-left">Model</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Capacity</th>
              <th className="p-3 text-left">Odometer</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-400"
                >
                  🚚 No vehicles added
                </td>
              </tr>
            ) : (
              vehicles.map((v, i) => (
                <tr
                  key={i}
                  className="border-b border-[#2a2d27] hover:bg-[#232620] transition"
                >
                  <td className="p-3 font-medium">
                    {v.license_plate}
                  </td>
                  <td className="p-3">{v.model}</td>
                  <td className="p-3">{v.type}</td>
                  <td className="p-3">{v.max_capacity}</td>
                  <td className="p-3">{v.odometer}</td>
                  <td className="p-3">
                    <StatusBadge status={v.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}