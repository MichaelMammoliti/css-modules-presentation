import Cta from '../../components/Cta';

import styles from './main.scss';

const CtaExamplePage = () =>
  <div className={styles['cta-example-page']}>

    <div className={styles['cta-example-page-item']}>
      <Cta full text='something' theme='red' />
    </div>

    <div className={styles['cta-example-page-item']}>
      <Cta full text='something else' type='stroke' theme='blue' />
    </div>

    <div className={styles['cta-example-page-item']}>
      <Cta full text='something else' theme='green' icon='close' />
    </div>

  </div>
;

export default CtaExamplePage;