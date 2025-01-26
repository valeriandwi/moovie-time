import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const cleanEmptyObject = (obj: Record<any, any>) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
};

export const navigateWithParams = (
  router: AppRouterInstance,
  url: string,
  apiParams: Record<string, string>,
  value: Record<string, string | null | undefined>
) => {
  const newParams = {
    ...apiParams,
    page: "1",
    ...value,
  };
  const searchParams = new URLSearchParams(cleanEmptyObject(newParams));
  router.replace(`${url}?${searchParams.toString()}`);
};
