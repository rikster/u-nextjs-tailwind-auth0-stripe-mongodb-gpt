import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Logo = () => {
  return (
    <div className="py-4 text-center font-heading text-3xl">
      BlogStandard
      <FontAwesomeIcon
        icon={faBrain}
        className="ml-1 text-2xl text-slate-400"
      />
    </div>
  );
};
