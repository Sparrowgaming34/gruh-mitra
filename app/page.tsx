export default function Home() {
return ( <main className="min-h-screen bg-white">

```
  {/* Navbar */}
  <nav className="flex items-center justify-between px-8 py-5 border-b">
    <h1 className="text-2xl font-bold text-blue-600">
      Gruh Mitra
    </h1>

    <div className="hidden md:flex gap-6 font-medium">
      <a href="#">Home</a>
      <a href="#">Find Helpers</a>
      <a href="#">Become a Helper</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>

    <div className="flex gap-3">
      <button className="px-4 py-2 border rounded-lg">
        Login
      </button>

      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Register
      </button>
    </div>
  </nav>

  {/* Hero Section */}
  <section className="text-center py-24 px-6">
    <h1 className="text-5xl md:text-6xl font-bold text-black">
      Trusted Help For Every Home
    </h1>

    <p className="mt-6 text-xl text-gray-800 max-w-3xl mx-auto">
      Hire verified maids, cooks, drivers, babysitters and caregivers near you.
    </p>

    <div className="mt-10 flex justify-center gap-4">
      <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
        Find Helpers
      </button>

      <button className="border px-8 py-4 rounded-xl">
        Become a Helper
      </button>
    </div>
  </section>

  {/* Stats */}
  <section className="max-w-5xl mx-auto py-10 px-6">
    <div className="grid md:grid-cols-3 gap-6 text-center">
      <div className="shadow rounded-xl p-8">
        <h3 className="text-4xl font-bold text-blue-600">500+</h3>
        <p>Verified Helpers</p>
      </div>

      <div className="shadow rounded-xl p-8">
        <h3 className="text-4xl font-bold text-blue-600">100+</h3>
        <p>Happy Families</p>
      </div>

      <div className="shadow rounded-xl p-8">
        <h3 className="text-4xl font-bold text-blue-600">5+</h3>
        <p>Services</p>
      </div>
    </div>
  </section>

  {/* Services */}
  <section className="py-20 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-12">
      Our Services
    </h2>

    <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
      {["Maid", "Cook", "Babysitter", "Driver", "Elder Care"].map(
        (service) => (
          <div
            key={service}
            className="bg-white rounded-xl shadow p-8 text-center"
          >
            <h3 className="font-semibold text-lg">
              {service}
            </h3>
          </div>
        )
      )}
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-20">
    <h2 className="text-4xl font-bold text-center mb-12">
      Why Choose Gruh Mitra?
    </h2>

    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
      <div className="shadow p-6 rounded-xl">
        ✅ Verified Profiles
      </div>

      <div className="shadow p-6 rounded-xl">
        ✅ Safe Chat System
      </div>

      <div className="shadow p-6 rounded-xl">
        ✅ Easy Hiring
      </div>

      <div className="shadow p-6 rounded-xl">
        ✅ Trusted Reviews
      </div>
    </div>
  </section>

  {/* Featured Helpers */}
  <section className="py-20 bg-gray-50">
    <h2 className="text-4xl font-bold text-center mb-12">
      Featured Helpers
    </h2>

    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="font-bold text-xl">Priya</h3>
        <p>Cook</p>
        <p>5 Years Experience</p>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="font-bold text-xl">Rahul</h3>
        <p>Driver</p>
        <p>8 Years Experience</p>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="font-bold text-xl">Neha</h3>
        <p>Babysitter</p>
        <p>3 Years Experience</p>
      </div>

    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black text-white py-10 text-center">
    <h3 className="text-2xl font-bold">
      Gruh Mitra
    </h3>

    <p className="mt-3">
      Trusted Help. Happy Homes.
    </p>
  </footer>

</main>
);
}
