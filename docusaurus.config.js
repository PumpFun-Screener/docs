import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PumpFun-Screener',
  tagline: 'Aggregation streams for everyone',
  favicon: 'img/favicon.ico',

  url: 'https://pumpfun-screener.github.io',
  baseUrl: '/',
  organizationName: 'PumpFun-Screener',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/PumpFun-Screener/docs/edit/main/',
        },
        blog: false, // 🔴 Disable the blog completely
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'PumpFun-Screener',
        logo: {
          alt: 'PumpFun-Screener Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://github.com/PumpFun-Screener/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Data API',
                to: '/data-api/real-time-updates',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/PumpFun-Screener/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PumpFun-Screener`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
