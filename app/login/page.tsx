export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-red-400"></div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-6"
        />

        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Login
        </button>
      </div>
    </div>
  );
}