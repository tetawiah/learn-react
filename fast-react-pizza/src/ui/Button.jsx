import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {
  const base =
    'transition-colors text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-3 py-4 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-sm',
    secondary:
      'transition-colors inline-block rounded-full border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 font-semibold uppercase tracking-wide text-stone-400 duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed border-2',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
