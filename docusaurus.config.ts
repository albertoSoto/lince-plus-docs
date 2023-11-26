import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LINCE PLUS docs',
  tagline: 'Keep learning',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://albertoSoto.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lince-plus-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'albertoSoto', // Usually your GitHub org/user name.
  projectName: 'lince-plus-docs', // Usually your repo name.
  deploymentBranch: "deployment",
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    // locales: ['es','en'],
    locales: ['es','en','fr','de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-PGTBMEJ65G',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/lince-social-card.png',
    navbar: {
      title: 'LINCE PLUS',
      logo: {
        alt: 'LINCE PLUS Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Other links',
          items: [
            {
              label: 'LINCE APP',
              to: 'https://www.lince-plus.com/products/lince-app',
            },
            {
              label: 'LINCE PLUS desktop',
              to: 'https://www.lince-plus.com/products/lince-desktop',
            },
            {
              label: 'LINCE Now',
              to: 'https://www.lince-plus.com/products/lince-now',
            },
          ],
        },
        {
          title: 'Please, cite us',
          items: [
            {
              label: '(2022) LINCE PLUS software for systematic observational studies in sports and health',
              to: 'https://doi.org/10.3758/s13428-021-01642-1',
            }
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/observesport/lince-plus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LINCE PLUS, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
