import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'
import Header from './components/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)

      const res = await fetch(
        'https://eonet.gsfc.nasa.gov/api/v3/events'
      )

      const { events } = await res.json()
      setEventData(events)

      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <Header />

      {!loading ? (
        <Map
  eventData={eventData}
  center={{ lat: 42.3265, lng: -122.8756 }}
  zoom={6}
/>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App