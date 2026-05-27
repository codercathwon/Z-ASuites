/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { Property } from './components/Property';
import { Gallery } from './components/Gallery';
import { HouseRules } from './components/HouseRules';
import { Checkout } from './components/Checkout';
import { LocalGuide } from './components/LocalGuide';
import { Contact } from './components/Contact';
import { Farewell } from './components/Farewell';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  return (
    <div className="selection:bg-za-gold/30 selection:text-za-espresso bg-za-cream min-h-screen">
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <Property />
        <Gallery />
        <HouseRules />
        <Checkout />
        <LocalGuide />
        <Contact />
      </main>
      <Farewell />
    </div>
  );
}
