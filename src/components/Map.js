import { useState, useMemo, useCallback } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({
  eventData,
  center = { lat: 42.3265, lng: -122.8756 },
  zoom = 6
}) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const wildfires = useMemo(() => {
    return eventData.filter(
      ev => ev.categories?.[0]?.id === 'wildfires'
    )
  }, [eventData])

 
  const onMarkerClick = useCallback((id, title) => {
    setLocationInfo({ id, title })
  }, [])

 
  const markers = useMemo(() => {
    return wildfires.map(ev => (
      <LocationMarker
        key={ev.id}
        lat={ev.geometry[0].coordinates[1]}
        lng={ev.geometry[0].coordinates[0]}
        onClick={() => onMarkerClick(ev.id, ev.title)}
      />
    ))
  }, [wildfires, onMarkerClick])

  return (
    <div
      className="map"
      style={{
        height: 'calc(100vh - 60px)',
        width: '100%'
      }}
    >
<GoogleMapReact
  REACT_APP_GOOGLE_MAPS_API_KEY="your_new_key_here"
  center={center}
  zoom={zoom}
  options={{
    gestureHandling: 'greedy',
    draggable: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    minZoom: 3,
    maxZoom: 10,
  }}
>
  {markers}
</GoogleMapReact>

      {locationInfo && (
        <LocationInfoBox info={locationInfo} />
      )}
    </div>
  )
}

export default Map