import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './src/layouts/DefaultLayout'
import { Home } from './src/pages/Home'
import { Details } from './src/pages/Details'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name/:repo/" element={<Details />} />
      </Route>
    </Routes>
  )
}
