import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../assets/Navbar'

import { HelmetProvider } from "react-helmet-async";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Navbar />
        <Outlet />
      </HelmetProvider>
    </React.Fragment>
  )
}
