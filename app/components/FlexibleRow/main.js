import { Children } from 'react';

import styles from './main.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

// Getters
// ====================================
const getColumns = children => {
  const items = {
    left: undefined,
    center: undefined,
    right: undefined,
  };

  Children.forEach(children, child => {
    if (!child) return;

    const { align } = child.props;

    if (items[align]) return;

    items[align] = child;
  });

  return items;
};

// Checkers
// ====================================
const hasColumns = items => {
  let hasItems;

  Object.keys(items).forEach(key => {
    if (!items[key] || hasItems) return;

    hasItems = true;
  });

  return hasItems;
};

const FlexibleRow = ({ children, inline, centerItems }) => {
  // Render
  // ====================================
  if (!Children.count(children)) return null;

  const columns = getColumns(children);

  if (!hasColumns(columns)) return null;

  return (
    <div
      className={cx('flexible-row', {
        inline,
        [`center-${centerItems}`]: centerItems,
      })}
    >
      {columns.left &&
        <div className={styles['flexible-row-item--left']}>{columns.left}</div>
      }

      {columns.center &&
        <div className={styles['flexible-row-item--center']}>{columns.center}</div>
      }

      {columns.right &&
        <div className={styles['flexible-row-item--right']}>{columns.right}</div>
      }
    </div>
  );
};

FlexibleRow.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  centerItems: PropTypes.oneOf(['both', 'vertical', 'horizontal']),
};

export default FlexibleRow;