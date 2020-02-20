export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4e4f571922bb9be67df3bf',
                  title: 'Sanity Studio',
                  name: 'zzagnet-blog-studio',
                  apiId: 'e8c02a5b-21a7-43db-9a37-ea3adee86c9c'
                },
                {
                  buildHookId: '5e4e4f571922bb85507df3be',
                  title: 'Blog Website',
                  name: 'zzagnet-blog',
                  apiId: '06156d91-a825-455f-b352-92564ba0166b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zzagmeister/zzagnet-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://zzagnet-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
