import { Vehicle } from '../types'

type Props = {
  vehicles: Vehicle[]
}

export default function VehicleTable({ vehicles }: Props) {
  return (
    <div className="border rounded-xl p-4 bg-white shadow">
      <h2 className="font-semibold mb-3">Fleet Flow</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Plate</th>
            <th className="p-2 border">Model</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Capacity</th>
            <th className="p-2 border">Odometer</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center p-4">
                No vehicles added
              </td>
            </tr>
          ) : (
            vehicles.map((v, i) => (
              <tr key={i}>
                <td className="border p-2">{v.license_plate}</td>
                <td className="border p-2">{v.model}</td>
                <td className="border p-2">{v.type}</td>
                <td className="border p-2">{v.max_capacity}</td>
                <td className="border p-2">{v.odometer}</td>
                <td className="border p-2">{v.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}