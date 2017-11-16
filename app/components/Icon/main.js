import classnames from 'classnames/bind';
import styles from './main.scss';

const cx = classnames.bind(styles);

const Icon = ({ theme, size, name }) =>
  <i
    className={cx('icon', {
      [`size-${size}`]: size,
      [`theme-${theme}`]: theme,
    })}
  />
;

Icon.defaultProps = {
  size: 'small',
};

Icon.propTypes = {
  theme: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};
