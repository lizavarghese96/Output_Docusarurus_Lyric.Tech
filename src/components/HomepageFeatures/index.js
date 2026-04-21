import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Feature Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Clear, user-focused documentation for the new <strong>Bar Chart</strong> feature,
        including what it is, when to use it, how to configure it, and how to customize it
        at a high level.
      </>
    ),
  },
  {
    title: 'UI Messaging',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Improved modal and screen copy for clearer user guidance, with a focus on
        consistency, conciseness, and action-oriented messaging for real product workflows.
      </>
    ),
  },
  {
    title: 'Docs-as-Code Workflow',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A step-by-step documentation lifecycle for the <strong>Smart Filters</strong> feature,
        showing how content moves from Jira and staging review to authoring, pull request,
        validation, and production publishing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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