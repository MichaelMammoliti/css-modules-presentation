import Cta from '../../components/Cta';
import styles from './main.scss';

const ExamplePage = () =>
  <div className={styles['example-page']}>
    <Cta
      text='something'
      theme='red'
      type='stroke'
    />
  </div>
;

export default ExamplePage;