import styles from './main.scss';

const UserCard = ({ text, icon }) =>
  <div className={styles['user-card']}>

    <div className={styles['user-card-image']}>
      <Image type='circle' size='medium' />
    </div>

    <div className={styles['user-card-details']}>
      <div className={styles['user-card-name']}>{text}</div>
      <div className={styles['user-card-description']}>{text}</div>
    </div>

    <div className={styles['user-card-ctas']}>
      <div className={styles['user-card-ctas-item']}>
        <Cta onClick={onAdd} text='something' />
      </div>

      <div className={styles['user-card-ctas-item']}>
        <Cta onClick={onRemove} />
      </div>

      <div className={styles['user-card-ctas-item']}>
        <Cta onClick={onReport} />
      </div>
    </div>

  </div>
;

UserCard.propTypes = {

};

export default UserCard;
