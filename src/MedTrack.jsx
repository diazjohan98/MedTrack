import { BrowserRouter } from 'react-router-dom'
import { MedTrackRoutes } from './routes/MedTrackRoutes'

export const MedTrack = () => {
  return (
    <BrowserRouter>
        <MedTrackRoutes />
    </BrowserRouter>
  )
}
