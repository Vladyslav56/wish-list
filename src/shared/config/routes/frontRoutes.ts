import { roles } from "../roles";

type Role = (typeof roles)[keyof typeof roles];

type Meta = {
  title: string;
  isInMenu: boolean;
  requireAuth: boolean;
  roles?: Role[];
};

type Page = {
  path: string;
  navigationPath?: string;
  meta: Meta;
};

export const frontRoutes: {
  pages: Record<string, Page>;
} = {
  pages: {
    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "home.menuLabel",
        isInMenu: true,
        requireAuth: false,
      },
    },
    // UsersPage: {
    //   path: "users",
    //   navigationPath: "/users",
    //   meta: {
    //     title: "users.menuLabel",
    //     isInMenu: true,
    //     requireAuth: true,
    //     roles: [roles.admin],
    //   },
    // },
    NotFoundPage: {
      path: "*",
      meta: {
        title: "notFound.title",
        isInMenu: false,
        requireAuth: false,
      },
    },
    ForbiddenPage: {
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "forbidden.title",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
};

export function getPagesObjectList(): Page[] {
  const pageList = Object.keys(frontRoutes.pages);
  return pageList.map((page) => frontRoutes.pages[page]);
}
