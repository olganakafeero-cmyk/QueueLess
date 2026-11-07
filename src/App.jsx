import './App.css'

const businesses = [
  { id: 1, name: 'Glow Salon', category: 'Hair & Beauty', location: 'Kampala' },
  { id: 2, name: 'City Dental Clinic', category: 'Health', location: 'Ntinda' },
  { id: 3, name: 'QuickFix Garage', category: 'Auto', location: 'Entebbe' },
]

function App() {
  return (
    <div className="page">
      <header className="navbar">
        <h2 className="logo">QueueLess</h2>
        <button className="btn">Log in</button>
      </header>

      <main className="hero">
        <h1>Book smart. Skip the wait.</h1>
        <p>Find a business, pick a time slot, and get confirmed instantly.</p>
        <button className="btn btn-big">Browse businesses</button>
      </main>

      <section className="directory">
        <h2>Available businesses</h2>
        <div className="cards">
          {businesses.map((b) => (
            <div className="card" key={b.id}>
              <h3>{b.name}</h3>
              <p>{b.category}</p>
              <p>📍 {b.location}</p>
              <button className="btn btn-big">Book now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App