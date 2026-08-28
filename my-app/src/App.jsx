import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import IndustriesPage from './pages/IndustriesPage'
import ResourcesPage from './pages/ResourcesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

import WebDevelopment from './pages/services/WebDevelopment'
import MobileApps from './pages/services/MobileApps'
import UiUxDesign from './pages/services/UiUxDesign'
import ProductDiscovery from './pages/services/ProductDiscovery'
import ApiDevelopment from './pages/services/ApiDevelopment'
import CloudSolutions from './pages/services/CloudSolutions'
import Devops from './pages/services/Devops'
import QaEngineering from './pages/services/QaEngineering'
import AiAutomation from './pages/services/AiAutomation'
import DataEngineering from './pages/services/DataEngineering'
import PerformanceEngineering from './pages/services/PerformanceEngineering'
import SecurityCompliance from './pages/services/SecurityCompliance'
import Maintenance from './pages/services/Maintenance'
import StartupMvps from './pages/solutions/StartupMvps'
import SaasPlatforms from './pages/solutions/SaasPlatforms'
import InternalTools from './pages/solutions/InternalTools'
import AiWorkflowAutomation from './pages/solutions/AiWorkflowAutomation'
import DataDashboardBuild from './pages/solutions/DataDashboardBuild'
import SoftwareModernization from './pages/solutions/SoftwareModernization'
import SupportRetainers from './pages/solutions/SupportRetainers'
import LegacyAppRescue from './pages/solutions/LegacyAppRescue'
import CloudCostControl from './pages/solutions/CloudCostControl'
import MaintenancePlans from './pages/solutions/MaintenancePlans'
import Healthcare from './pages/industries/Healthcare'
import Ecommerce from './pages/industries/Ecommerce'
import Travel from './pages/industries/Travel'
import Education from './pages/industries/Education'
import RealEstate from './pages/industries/RealEstate'
import Finance from './pages/industries/Finance'
import Logistics from './pages/industries/Logistics'
import Manufacturing from './pages/industries/Manufacturing'
import ProfessionalServices from './pages/industries/ProfessionalServices'
import Blog from './pages/resources/Blog'
import Guides from './pages/resources/Guides'
import Playbook from './pages/resources/Playbook'
import Library from './pages/resources/Library'
import Faq from './pages/resources/Faq'
import TechNotes from './pages/resources/TechNotes'
import TechStack from './pages/resources/TechStack'
import Integrations from './pages/resources/Integrations'
import Locations from './pages/resources/Locations'
import About from './pages/resources/About'
import Process from './pages/resources/Process'
import CaseStudies from './pages/resources/CaseStudies'
import Careers from './pages/resources/Careers'

export default function App() {
  return (
    <BrowserRouter basename="/demo-software-development">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/mobile-apps" element={<MobileApps />} />
          <Route path="services/ui-ux-design" element={<UiUxDesign />} />
          <Route path="services/product-discovery" element={<ProductDiscovery />} />
          <Route path="services/api-development" element={<ApiDevelopment />} />
          <Route path="services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="services/devops" element={<Devops />} />
          <Route path="services/qa-engineering" element={<QaEngineering />} />
          <Route path="services/ai-automation" element={<AiAutomation />} />
          <Route path="services/data-engineering" element={<DataEngineering />} />
          <Route path="services/performance-engineering" element={<PerformanceEngineering />} />
          <Route path="services/security-compliance" element={<SecurityCompliance />} />
          <Route path="services/maintenance" element={<Maintenance />} />
          <Route path="solutions/startup-mvps" element={<StartupMvps />} />
          <Route path="solutions/saas-platforms" element={<SaasPlatforms />} />
          <Route path="solutions/internal-tools" element={<InternalTools />} />
          <Route path="solutions/ai-workflow-automation" element={<AiWorkflowAutomation />} />
          <Route path="solutions/data-dashboard-build" element={<DataDashboardBuild />} />
          <Route path="solutions/software-modernization" element={<SoftwareModernization />} />
          <Route path="solutions/support-retainers" element={<SupportRetainers />} />
          <Route path="solutions/legacy-app-rescue" element={<LegacyAppRescue />} />
          <Route path="solutions/cloud-cost-control" element={<CloudCostControl />} />
          <Route path="solutions/maintenance-plans" element={<MaintenancePlans />} />
          <Route path="industries/healthcare" element={<Healthcare />} />
          <Route path="industries/ecommerce" element={<Ecommerce />} />
          <Route path="industries/travel" element={<Travel />} />
          <Route path="industries/education" element={<Education />} />
          <Route path="industries/real-estate" element={<RealEstate />} />
          <Route path="industries/finance" element={<Finance />} />
          <Route path="industries/logistics" element={<Logistics />} />
          <Route path="industries/manufacturing" element={<Manufacturing />} />
          <Route path="industries/professional-services" element={<ProfessionalServices />} />
          <Route path="resources/blog" element={<Blog />} />
          <Route path="resources/guides" element={<Guides />} />
          <Route path="resources/playbook" element={<Playbook />} />
          <Route path="resources/library" element={<Library />} />
          <Route path="resources/faq" element={<Faq />} />
          <Route path="resources/tech-notes" element={<TechNotes />} />
          <Route path="resources/tech-stack" element={<TechStack />} />
          <Route path="resources/integrations" element={<Integrations />} />
          <Route path="resources/locations" element={<Locations />} />
          <Route path="resources/about" element={<About />} />
          <Route path="resources/process" element={<Process />} />
          <Route path="resources/case-studies" element={<CaseStudies />} />
          <Route path="resources/careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
