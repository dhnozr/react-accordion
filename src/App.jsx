import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';

import './App.css';
import Accordion from './Accordion/Accordion';

function App() {
  const coolImages = [
    {
      header: 'Canada',
      image: image2,
      text: `Image description`,
    },

    {
      header: 'New Zealand',
      image: image1,
      text: `Image description`,
    },

    {
      header: 'Indonesia',
      image: image4,
      text: `Image description`,
    },
    {
      header: 'South Africa',
      image: image5,
      text: `Image description`,
    },
    {
      header: 'Spain',
      image: image3,
      text: `Image description`,
    },
  ];
  return (
    <>
      <section className='page'>
        <Accordion items={coolImages} />
      </section>
    </>
  );
}

export default App;
