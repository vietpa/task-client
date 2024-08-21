export const APP_CONSTANTS: any = {
  BASE_API_URL: process.env.API_URL,
  MENU: [
    { name: 'shop', href: '/shop' },
    {
      name: 'recipes', href: '/recipes/categories', children: [
        { name: 'categories', href: '/recipes/categories' },
        { name: 'collections', href: '/recipes/collections/e6279fe1-97a7-467f-838d-e6add2f98677' },
        { name: 'resources', href: '/recipes/resources' }
      ]
    },
    { name: 'learn', href: '/learn' },
    { name: 'about', href: '/about' },
    { name: 'blog', href: '/blog' },
  ]
}