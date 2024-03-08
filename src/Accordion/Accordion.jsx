import React, { useState } from 'react';
import './styles.css';

export default function Accordion({ items }) {
  const [active, setActive] = useState(0);
  const handleToggle = index => setActive(index);

  return (
    <section className='image-accordion'>
      {items.map((item, index) => {
        const isActive = active === index ? 'active' : '';
        return (
          <div key={item.image} className={`image-accordion-item ${isActive}`} onClick={() => handleToggle(index)}>
            <img src={item.image} loading='lazy' />
            <div className='content'>
              <div>
                <h2>{item.header}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
