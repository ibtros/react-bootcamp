import PropTypes from 'prop-types';
import styles from './Todo.module.css';

export const Todo = ({todo, onDelete}) => {
  return (
    <div className={styles.todoContainer}>
      <p>{todo}</p>
      <button className={styles.deleteButton} onClick={onDelete}>-</button>
    </div>
  )
};

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};