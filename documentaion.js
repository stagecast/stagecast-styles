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
      title: 'Github',
      link: 'https://github.com/stagecast/stagecast-styles'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        { title: 'Introduction', link: '/intro' },
        { title: 'Buttons', link: '/buttons' },
        { title: 'Dropdowns', link: '/dropdowns' },
        { title: 'Typography', link: '/typography' }
      ]
    }
  ],
  cssVariables: {
    pageBackground: 'var(--z-space-00)',
    headerBackground:  'var(--z-space-00)',
    sidebarBackground:  'var(--z-space-00)',
    headerTextColor:  'var(--text-high-emph)',
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
    highlightedLineBorderColor: 'var(--primary-dark)'
  },
  footer: `
  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">
  &copy; ${new Date().getFullYear()} Styles developed by <a href="https://stagecast.io" target="_blank">Stagecast AB</a>. Released under MIT license.
  </div>
  `
})
