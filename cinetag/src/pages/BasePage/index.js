import Container from "components/Container";
import Header from "components/Header";
import FavoritosProvider from "contexts/Favoritos";

import React from 'react'
import { Outlet } from "react-router-dom";

export default function BasePage() {
  return (
    <main>
        <Header />
        <FavoritosProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritosProvider>
    </main>
  )
}
