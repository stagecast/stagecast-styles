/* globals Docute */
new Docute({
  target: '#docute',
  editLinkBase: 'https://github.com/stagecast/stagecast-styles/tree/main/docs/content',
  editLinkText: 'Edit this page on GitHub',
  sourcePath: './docs/content/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Layouts',
      link: 'https://stagecast.github.io/stagecast-styles/layouts/'
    },
    {
      title: 'Github',
      link: 'https://github.com/stagecast/stagecast-styles'
    }
  ],
  sidebar: [
    {
      title: 'Support',
      links: [
        { title: 'Color system', link: '/colors' },
        { title: 'Typography', link: '/typography' }
      ]
    },
    {
      title: 'Components',
      links: [
        { title: 'Alerts', link: '/alerts' },
        { title: 'Avatars', link: '/avatars' },
        { title: 'Badges', link: '/badges' },
        { title: 'Blankstate', link: '/blankstate' },
        { title: 'Buttons', link: '/buttons' },
        { title: 'Forms', link: '/forms' },
        { title: 'Dropdowns', link: '/dropdowns' },
        { title: 'Icons', link: '/icons' },
        { title: 'List Groups', link: '/list-groups' },
        { title: 'Modals', link: '/modals' },
        { title: 'Navs', link: '/nav' },
        { title: 'Progress', link: '/progress' }
      ]
    }

  ],
  cssVariables: {
    accentColor: 'var(--primary-light)',
    pageBackground: 'var(--z-space-00)',
    headerBackground:  'var(--z-space-00)',
    sidebarBackground:  'var(--z-space-00)',
    headerTextColor:  'var(--text-high-emph)',
    linkColor:  'var(--primary-light)',
    navLinkColor:  'var(--text-high-emph)',
    sidebarLinkColor:  'var(--text-high-emph)',
    sidebarLinkActiveColor:  'var(--text-high-emph)',
    sidebarLinkArrowColor:  'var(--text-high-emph)',
    borderColor: 'var(--z-space-24)',
    inlineCodeColor:  'var(--text-high-emph)',
    inlineCodeBackground: 'var(--z-space-24)',
    loaderPrimaryColor:  'var(--z-space-24)',
    loaderSecondaryColor:  'var(--z-space-08)',
    tableHeaderBackground:  'var(--z-space-02)',
    tableHeaderColor:  'var(--text-high-emph)',
    searchIconColor:  'var(--text-high-emph)',
    codeBlockBackground:  'var(--z-space-02)',
    codeBlockTextColor:  'var(--text-high-emph)',
    highlightedLineBackground: 'var(--z-space-24)',
    highlightedLineBorderColor: 'var(--primary-light)'
  },
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} Styles developed by <a href="https://stagecast.io" target="_blank">Stagecast AB</a>. Released under MIT license.
  </div>
  `
})
