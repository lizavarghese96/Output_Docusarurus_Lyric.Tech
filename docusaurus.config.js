// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

const {themes: prismThemes} = require('prism-react-renderer');

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lyric.Tech Assignment Docs',
  tagline: 'Documentation for Lyric Studio',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lizavarghese96.github.io',
  baseUrl: '/Output_Docusarurus_Lyric.Tech/',

  organizationName: 'lizavarghese96',
  projectName: 'Output_Docusarurus_Lyric.Tech',

  onBrokenLinks: 'throw',

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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
  logo: {
    alt: 'Lyric Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'tutorialSidebar',
      position: 'left',
      label: 'Assignment Docs',
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
                label: 'Assignment Docs',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: "Glenn's Lyric.Tech Technical Writing Assignment",
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;