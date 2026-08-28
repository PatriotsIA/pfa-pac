import { createRoutesFromElements, Route } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'

export const routes: RouteObject[] = createRoutesFromElements(
  <Route element={<SiteLayout />}>
    <Route index element={<HomePage />} />
    <Route path="*" element={<HomePage />} />
  </Route>,
)

