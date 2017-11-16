import PropTypes from 'prop-types';

import styles from './main.scss';
import classnames from 'classnames/bind';

import FlexibleRow from '../FlexibleRow';
import FlexibleColumn from '../FlexibleRow/FlexibleColumn';
import Icon from '../Icon';

const cx = classnames.bind(styles);

const Cta = ({ target, href, text, theme, disabled, onClick, full, size, icon, type }) => {
  // Utilities
  // ============================
  const redirect = () => {
    window.open(href, target);
  };

  // Events
  // ============================
  const handleClick = () => {
    if (href && target === '_blank') redirect();

    onClick();
  };

  // Render
  // ============================
  return (
    <div
      className={cx('cta', {
        disabled,
        full,
        [`size-${size}`]: size,
        [`theme-${theme}`]: theme,
        [`type-${type}`]: type,
      })}
      onClick={handleClick}
    >
      <FlexibleRow centerItems='vertical'>

        {icon &&
          <FlexibleColumn align='left'>
            <div className={styles['cta-icon']}>
              <Icon name={icon} size={size} theme='white' />
            </div>
          </FlexibleColumn>
        }

        <FlexibleColumn align='center'>
          <div className={styles['cta-text']}>
            <span>{text}</span>
          </div>
        </FlexibleColumn>

      </FlexibleRow>
    </div>
  );
};

Cta.defaultProps = {
  onClick: () => {},
  theme: 'blue',
  size: 'small',
  type: 'fill',
};

Cta.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  full: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_blank', '_self']),
  theme: PropTypes.oneOf(['blue', 'green', 'red']),
  type: PropTypes.oneOf(['stroke', 'fill']),
};

export default Cta;