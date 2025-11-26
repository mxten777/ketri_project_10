import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Greeting from '../pages/intro/Greeting';
import History from '../pages/intro/History';
import Organization from '../pages/intro/Organization';
import CI from '../pages/intro/CI';
import Certificates from '../pages/intro/Certificates';
import Equipment from '../pages/intro/Equipment';
import Directions from '../pages/intro/Directions';
import WorkEnvironment from '../pages/consulting/WorkEnvironment';
import RiskAssessment from '../pages/consulting/RiskAssessment';
import Musculoskeletal from '../pages/consulting/Musculoskeletal';
import ChemicalManagement from '../pages/consulting/ChemicalManagement';
import ConsultingResults from '../pages/consulting/ConsultingResults';
import WaterIntro from '../pages/water/WaterIntro';
import WaterScope from '../pages/water/WaterScope';
import WaterSchedule from '../pages/water/WaterSchedule';
import WaterRequest from '../pages/water/WaterRequest';
import DialysisIntro from '../pages/dialysis/DialysisIntro';
import DialysisRequest from '../pages/dialysis/DialysisRequest';
import DialysisSchedule from '../pages/dialysis/DialysisSchedule';
import DialysisStandards from '../pages/dialysis/DialysisStandards';
import DialysisSampling from '../pages/dialysis/DialysisSampling';
import IndoorAirQuote from '../pages/indoor/IndoorAirQuote';
import IndoorAirResults from '../pages/indoor/IndoorAirResults';
import AsbestosDensity from '../pages/asbestos/AsbestosDensity';
import AsbestosDispersion from '../pages/asbestos/AsbestosDispersion';
import AsbestosRemoval from '../pages/asbestos/AsbestosRemoval';
import AsbestosRisk from '../pages/asbestos/AsbestosRisk';
import AsbestosAir from '../pages/asbestos/AsbestosAir';
import Notices from '../pages/Notices';
import Admin from '../pages/Admin';
import Privacy from '../pages/footer/Privacy';
import Accessibility from '../pages/footer/Accessibility';
import Copyright from '../pages/footer/Copyright';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro/greeting" element={<Greeting />} />
      <Route path="/intro/history" element={<History />} />
      <Route path="/intro/organization" element={<Organization />} />
      <Route path="/intro/ci" element={<CI />} />
      <Route path="/intro/certificates" element={<Certificates />} />
      <Route path="/intro/equipment" element={<Equipment />} />
      <Route path="/intro/directions" element={<Directions />} />
      <Route path="/consulting/work-environment" element={<WorkEnvironment />} />
      <Route path="/consulting/risk-assessment" element={<RiskAssessment />} />
      <Route path="/consulting/musculoskeletal" element={<Musculoskeletal />} />
      <Route path="/consulting/chemical-management" element={<ChemicalManagement />} />
      <Route path="/consulting/results" element={<ConsultingResults />} />
      <Route path="/water/intro" element={<WaterIntro />} />
      <Route path="/water/scope" element={<WaterScope />} />
      <Route path="/water/schedule" element={<WaterSchedule />} />
      <Route path="/water/request" element={<WaterRequest />} />
      <Route path="/dialysis/intro" element={<DialysisIntro />} />
      <Route path="/dialysis/request" element={<DialysisRequest />} />
      <Route path="/dialysis/schedule" element={<DialysisSchedule />} />
      <Route path="/dialysis/standards" element={<DialysisStandards />} />
      <Route path="/dialysis/sampling" element={<DialysisSampling />} />
      <Route path="/indoor/quote" element={<IndoorAirQuote />} />
      <Route path="/indoor/results" element={<IndoorAirResults />} />
      <Route path="/asbestos/density" element={<AsbestosDensity />} />
      <Route path="/asbestos/dispersion" element={<AsbestosDispersion />} />
      <Route path="/asbestos/removal" element={<AsbestosRemoval />} />
      <Route path="/asbestos/risk" element={<AsbestosRisk />} />
      <Route path="/asbestos/air" element={<AsbestosAir />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route path="/copyright" element={<Copyright />} />
    </Routes>
  );
};

export default AppRoutes;