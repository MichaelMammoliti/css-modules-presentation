import InlineSVG from 'react-svg-inline';
import iconAssets from './iconAssets';

// Styles
import styles from './main.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

// Utilities
const getSVG = name => {
  const svg = iconAssets[name];

  if (!svg) {
    console.warn(`${name}.svg not found.`); // eslint-disable-line
  }

  return svg;
};

// Component
// ===========================
const Icon = ({ theme, size, name }) => {
  const svg = getSVG(name);

  if (!svg) return null;

  return (
    <InlineSVG
      className={cx('icon', {
        [`theme-${theme}`]: theme,
        [`size-${size}`]: size,
      })}
      svg={svg}
      component='i'
    />
  );
};

Icon.defaultProps = {
  size: 'small',
};

Icon.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.oneOf(['white', 'blue', 'red', 'black']),
  size: PropTypes.oneOf(['small', 'medium', 'big']),
};

export default Icon;