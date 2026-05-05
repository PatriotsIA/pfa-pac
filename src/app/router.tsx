import { createRoutesFromElements, Route } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { AboutPage } from '../pages/AboutPage'
import { IssuesPage } from '../pages/IssuesPage'
import { CountyDirectoryPage } from '../pages/CountyDirectoryPage'
// News pages are temporarily hidden from the frontend.
// import { NewsIndexPage } from '../pages/NewsIndexPage'
// import { NewsPostPage } from '../pages/NewsPostPage'
import { VolunteerPage } from '../pages/VolunteerPage'
import { DonatePage } from '../pages/DonatePage'
import { PatriotProjectsPage } from '../pages/PatriotProjectsPage'
import { ContactPage } from '../pages/ContactPage'
import { PrivacyPage } from '../pages/PrivacyPage'
import { TermsPage } from '../pages/TermsPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { OperationShowUpPage } from '../pages/OperationShowUpPage'
import { MessagingPage } from '../pages/MessagingPage'

export const routes: RouteObject[] = createRoutesFromElements(
  <Route element={<SiteLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/issues" element={<IssuesPage />} />
    <Route path="/counties" element={<CountyDirectoryPage />} />
    {/* News pages are temporarily hidden from the frontend. */}
    {/* <Route path="/news" element={<NewsIndexPage />} /> */}
    {/* <Route path="/news/:postSlug" element={<NewsPostPage />} /> */}
    <Route path="/operation-show-up" element={<OperationShowUpPage />} />
    <Route path="/projects" element={<PatriotProjectsPage />} />
    <Route path="/patriot-projects" element={<PatriotProjectsPage />} />
    <Route path="/volunteer" element={<VolunteerPage />} />
    <Route path="/donate" element={<DonatePage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/messaging" element={<MessagingPage />} />
    <Route path="/privacy" element={<PrivacyPage />} />
    <Route path="/terms" element={<TermsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route>,
)

