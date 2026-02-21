'use client'

import { useState } from 'react'
import { Vehicle } from '../types'

export default function AddVehicleForm({
  onAdd,
}: {
  onAdd: (v: Vehicle) => void
}) {
  const [form, setForm] = useState<Vehicle>({
    license_plate: '',
    max_capacity: 0,
    odometer: 0,
    type: '',
    model: '',
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onAdd({ ...form, status: 'Available' })
    setForm({
      license_plate: '',
      max_capacity: 0,
      odometer: 0,
      type: '',
      model: '',
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-xl p-4 space-y-3 bg-white shadow"
    >
      <h2 className="font-semibold">New Vehicle Registration</h2>

      <input
        name="license_plate"
        placeholder="License Plate"
        value={form.license_plate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="max_capacity"
        type="number"
        placeholder="Max Payload"
        value={form.max_capacity}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="odometer"
        type="number"
        placeholder="Initial Odometer"
        value={form.odometer}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="type"
        placeholder="Type"
        value={form.type}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="model"
        placeholder="Model"
        value={form.model}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>

        <button
          type="reset"
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}