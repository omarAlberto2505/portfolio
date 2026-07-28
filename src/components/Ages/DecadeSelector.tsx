import { Decade, DecadeSelectorProps } from './types';
import clsx from 'clsx';
import css from './DecadeSelector.module.scss';
import useDecadeStore from '../../store/useDecadeStore';

const decades: Decade[] = [
  {
    value: '1920-1930',
    label: 'Roaring Jazz / Dusty Grit',
    personality:
      'Skill: polished frontend delivery. Strength: reliable execution and persistence under pressure.',
  },
  {
    value: '1940-1950',
    label: 'Victory March / Retro Cool',
    personality:
      'Skill: clean system architecture. Strength: disciplined implementation with attention to detail.',
  },
  {
    value: '1960-1970',
    label: 'Free Spirit / Electric Groove',
    personality:
      'Skill: creative interface design. Strength: rapid problem solving and practical experimentation.',
  },
  {
    value: '1980-1990',
    label: 'Neon Drive / Startup Hustle',
    personality:
      'Skill: modern JavaScript and TypeScript development. Strength: fast prototyping and getting work into production quickly.',
  },
  {
    value: '2000-2010',
    label: 'Dotcom Edge / Mobile Pulse',
    personality:
      'Skill: API development and responsive web apps. Strength: building mobile-ready, user-focused systems.',
  },
  {
    value: '2020',
    label: 'AI Wave',
    personality:
      'Skill: AI integrations and automation. Strength: cloud-native platform engineering and intelligent system design.',
  },
  {
    value: '2030',
    label: 'Future Vision',
    personality:
      'Skill: scalable architecture and future-focused platform work. Strength: building AI-enabled services with practical product thinking.',
  },
];

function DecadeSelector({ headerHeight }: DecadeSelectorProps) {
  const selectedDecade = useDecadeStore((s) => s.decade);
  const setSelectedDecade = useDecadeStore((s) => s.setDecade);

  return (
    <aside
      className={clsx(css['decade-panel'])}
      style={{
        top: `${headerHeight + 10}px`
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
          {decades.find((item) => item.value === selectedDecade)?.personality}
        </div>
      </div>
    </aside>
  );
}

export default DecadeSelector;
