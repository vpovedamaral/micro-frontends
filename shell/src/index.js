import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const Header = React.lazy(() => import('header/Header'));

const App = () => (
    <div>
        <Suspense fallback={<div>Chargement...</div>}>
            <Header />
        </Suspense>
        <main>
            <h2>Application Shell</h2>
            <p>Contenu principal de l'application hôte.</p>
        </main>
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
