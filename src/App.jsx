import './App.css'
import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'

function App() {
  const business = useQuery(api.business.list) ?? []

  return (
    <div className="page">
      <header className="navbar">
        <h2 className="logo">QueueLess</h2>
        <button className="btn">Log in</button>
      </header>

      <main className="hero">
        <h1>Book smart. Skip the wait.</h1>
        <p>Find a business, pick a time slot, and get confirmed instantly.</p>
        <button className="btn btn-big">Browse business</button>
      </main>

      <section className="directory">
        <h2>Available business</h2>
        <div className="cards">
          {business.map((b) => (
            <div className="card" key={b._id}>
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