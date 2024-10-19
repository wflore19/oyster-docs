import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const features = [
  {
    title: 'Quick Start',
    description: 'Get up and running in minutes with our easy-to-follow guide.',
    icon: '🚀',
  },
  {
    title: 'Comprehensive Docs',
    description: 'Dive deep into our detailed documentation covering all aspects.',
    icon: '📚',
  },
  {
    title: 'API Reference',
    description: 'Explore our API with interactive examples and clear explanations.',
    icon: '🔧',
  },
];
function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button', 'button--secondary', 'button--lg')}
            to="/docs/introduction"
          >
            Get Started
          </Link>

          <Link className="button button--secondary button--lg" to="/docs/api">
            API Reference
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, icon}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentUpdates() {
  const updates = [
    { title: 'New API Endpoint', date: '2023-06-15', link: '/docs/api/new-endpoint' },
    { title: 'Performance Improvements', date: '2023-06-10', link: '/blog/performance-update' },
    { title: 'Version 2.0 Release', date: '2023-06-01', link: '/docs/changelog' },
  ];

  return (
    <section className={styles.recentUpdates}>
      <div className="container">
        <Heading as="h2">Recent Updates</Heading>
        <ul className={styles.updatesList}>
          {updates.map((update, idx) => (
            <li key={idx}>
              <Link to={update.link}>{update.title}</Link>
              <span className={styles.updateDate}>{update.date}</span>
            </li>
          ))}
        </ul>
        <Link to="/blog" className="button button--link">
          View all updates
        </Link>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Clear, comprehensive documentation for your project">
      <Hero />
      <main>
        <HomepageFeatures />
        <RecentUpdates />
      </main>
    </Layout>
  );
}