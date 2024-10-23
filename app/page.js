"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import './globals.css';
import ClientLayout from './components/ClientLayout';
import Presentation from './components/Presentation';

const WheelComponent = dynamic(() => import('./components/Wheel'), { ssr: false });

const Home = () => {
  return (
    <ClientLayout>
      <div className="page-container">
        <main className="main-content">
          <div className="column-container">
          <div className="image-container">
          <div className="presentation-container">
              <Presentation />
            </div>
          </div>
            <div className="wheel-container">
              <WheelComponent />
            </div>
          </div>
        </main>
      </div>
    </ClientLayout>
  );
};

export default Home;
