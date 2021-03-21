import React from 'react';
import './assets/styles/style.global.scss';
import { Layout, Container } from './components';

const App = () => (
  <Layout >
    <main style={{ minHeight: '150vh', backgroundColor: 'hsl(0, 0%, 98%)' }}>
      <Container>
        <h1>EasyBank Content</h1>
      </Container>
    </main>
  </Layout>
);

export default App;
