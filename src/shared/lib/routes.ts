export const ROUTES = {
  MAIN: '/',
  POST: {
    LIST: '/posts',
    VIEW: (id: string | number) => `/post/${id}`,
    EDIT: (id: string | number) => `/post/${id}/edit`,
  },
  FORM: '/form',
  DELIVERY: '/delivery',
  STOCK: '/stock',
  CONTACTS:'/contacts',
  ABOUT: '/about',
  CAREER: '/career',
  CART:'/cart',
  OFFICE:'/office'
};
