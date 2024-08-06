import React from 'react';
import { card } from '../assets';
import Button from './Button';
import styles, {layout} from '../style';

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>Find a better card deal <br className='sm:block hidden'/> in a few easy steps.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nemo aliquid non voluptatibus laborum eos sit quibusdam aperiam incidunt, a mollitia, fugiat, impedit quaerat accusamus!</p>

      </div>


    </section>
  )


export default CardDeal