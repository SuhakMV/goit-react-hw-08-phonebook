import css from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button">
        Logout
      </button>
    </div>
  );
};
