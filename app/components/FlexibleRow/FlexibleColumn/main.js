import styles from './main.scss';

const FlexibleCol = ({ children }) =>
  <div className={styles['flexible-column']}>{children}</div>
;

FlexibleCol.defaultProps = {
  align: 'center',
};

FlexibleCol.propTypes = {
  children: PropTypes.node,

  // this prop is used by the parent: "flexible-row".
  align: PropTypes.oneOf(['left', 'center', 'right']), // eslint-disable-line react/no-unused-prop-types
};

export default FlexibleCol;