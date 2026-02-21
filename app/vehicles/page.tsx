'use client'

import { useState } from 'react'
import AddVehicleForm from './components/AddVehicleForm'
import VehicleTable from './components/VehicleTable'
import { Vehicle } from './types'

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])

  const handleAddVehicle = (vehicle: Vehicle) => {
    setVehicles((prev) => [...prev, vehicle])
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Vehicle Registry</h1>

      <AddVehicleForm onAdd={handleAddVehicle} />

      <VehicleTable vehicles={vehicles} />
    </div>
  )
}