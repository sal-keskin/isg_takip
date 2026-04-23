import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import WorkplacesDashboard from './pages/WorkplacesDashboard';
import WorkplaceDetails from './pages/WorkplaceDetails';
import WorkplaceSubsections from './pages/WorkplaceSubsections';
import WorkerRoster from './pages/WorkerRoster';
import TrainingLog from './pages/TrainingLog';
import ImportData from './pages/ImportData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<WorkplacesDashboard />} />
          <Route path="workplace/details" element={<WorkplaceDetails />} />
          <Route path="workplace/subsections" element={<WorkplaceSubsections />} />
          <Route path="workers" element={<WorkerRoster />} />
          <Route path="trainings" element={<TrainingLog />} />
          <Route path="import" element={<ImportData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
