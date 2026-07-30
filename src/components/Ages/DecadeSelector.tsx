import { Decade, DecadeSelectorProps } from './types';
import clsx from 'clsx';
import css from './DecadeSelector.module.scss';
import useDecadeStore from '../../store/useDecadeStore';
import { decades } from './specs';


function DecadeSelector({ headerHeight }: DecadeSelectorProps) {
  const selectedDecade = useDecadeStore((s) => s.decade);
  const setSelectedDecade = useDecadeStore((s) => s.setDecade);

  const backgroundImage = decades.find(d => d.value == selectedDecade)?.background

  return (
    <aside
      className={clsx(css['decade-panel'])}
      style={{
        top: `${headerHeight + 10}px`,
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className={clsx(css['decade-panel-inner'])}>
        <div className={clsx(css['section-heading'])}>
          <span>Decades</span>
          <h2 className={clsx(css["section-subtitle"])}>Pick a decade</h2>
        </div>
        <div className={clsx(css['decades-list'])}>
          {decades.map((decade) => (
            <button
              key={decade.value}
              type="button"
              className={clsx(css['decade-bubble'], css[`decade-${decade.value}`], {
                [css.active]: selectedDecade === decade.value,
              })}
              onClick={() => setSelectedDecade(decade.value as any)}
              title={decade.label}
            >
              <strong>{decade.value}</strong>
            </button>
          ))}
        </div>
        <div className={clsx(css['decade-personality'])}>
          {/* {decades.find((item) => item.value === selectedDecade)?.personality} */}
        </div>
      </div>
    </aside>
  );
}

export default DecadeSelector;
