import Header from './components/Header';
import Top from './components/Top';
import Work from './components/work';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
export default function Home() {
  return (
    <div className="w-full ">
      <div className="w-full fixed ">
        {' '}
        <Header />
      </div>
      <div className="w-full pt-16">
        <Top />
        <Work />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}
