/* globals Docute */
new Docute({
  target: '#docute',
  sourcePath: './docs/content/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        { title: 'Introduction', link: '/intro' },
        { title: 'Buttons', link: '/buttons' },
        { title: 'Dropdowns', link: '/dropdowns' }
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
    borderColor: 'var(--z-space-24)'
  }
})
