import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built by Scientists, Designed for Traders',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        PumpQuant is a real-time data analysis platform dedicated to exploring the dynamics of the pump.fun ecosystem. Whether you're tracking fresh token launches or analyzing trading behavior, our tools help you stay ahead of the curve.
      </>
    ),
  },
  {
    title: 'Real-time, No Code Required',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Subscribe to our WebSocket API and receive real-time data for token launches, trades, and account activity—no setup, no SDKs. All you need is a single connection.
      </>
    ),
  },
  {
    title: 'Modular Agents, Openly Shared',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our GitHub organization hosts a suite of agents designed to monitor and react to Pump.fun events. From basic alerts to advanced strategies, everything is open and extendable.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
