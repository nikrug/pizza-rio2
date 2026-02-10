import { DEFAULT_TITLE } from '@shared/config';
import { ROUTES } from '@shared/lib/routes';
import { RouteRecordRaw } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';

import  About  from 'src/pages/about/ui/about.vue';
import  Career  from 'src/pages/career/ui/career.vue';
import Cart from 'src/pages/cart/ui/cart.vue';
import  Contacts  from 'src/pages/contacts/ui/contascts.vue';
import  Delivery  from 'src/pages/delivery/ui/delivery.vue';
import { FormPage } from 'src/pages/form';
import { IndexPage } from 'src/pages/main';
import { ErrorNotFound } from 'src/pages/notFound';
import Office from 'src/pages/office/ui/office.vue';
import { PPostsDetail } from 'src/pages/post';
import { PPostsList } from 'src/pages/post';
import  Stock  from 'src/pages/stock/ui/stock.vue';

const routes: RouteRecordRaw[] = [
  {
    path: ROUTES.MAIN,
    component: MainLayout,
    children: [
      {
        path: ROUTES.MAIN,
        component: IndexPage,
        meta: { title: `${DEFAULT_TITLE}: index page` },
      },
      {
        path: ROUTES.POST.LIST,
        component: PPostsList,
        meta: { title: `${DEFAULT_TITLE}: Posts` },
      },
      {
        path: ROUTES.POST.VIEW(':id'),
        component: PPostsDetail,
        meta: { title: `${DEFAULT_TITLE}: Post` },
      },
      {
        path: ROUTES.FORM,
        component: FormPage,
        meta: { title: `${DEFAULT_TITLE}: Form` },
      },
      {
        path: ROUTES.DELIVERY,
        component:Delivery,
        meta: { title: `${DEFAULT_TITLE}: DELIVERY` },
      },
      {
        path: ROUTES.STOCK,
        component:Stock,
        meta: { title: `${DEFAULT_TITLE}: STOCK` },
      },
      {
        path: ROUTES.CONTACTS,
        component:Contacts,
        meta: { title: `${DEFAULT_TITLE}: CONTACTS` },
      },
      {
        path: ROUTES.ABOUT,
        component:About,
        meta: { title: `${DEFAULT_TITLE}: ABOUT` },
      },
      {
        path: ROUTES.CART,
        component:Cart,
        meta: { title: `${DEFAULT_TITLE}: Cart` },
      },
      {
        path: ROUTES.OFFICE,
        component:Office,
        meta: { title: `${DEFAULT_TITLE}: OFFICE` },
      },
    ],
  },
  {
    path: ROUTES.CAREER,
    component: Career,
    meta: { title: `${DEFAULT_TITLE}: CAREER` },
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
