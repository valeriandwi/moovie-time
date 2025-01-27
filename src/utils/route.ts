import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const cleanEmptyObject = (
  obj: Record<string, string | null | undefined>
): Record<string, string> => {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj as Record<string, string>;
};

export const navigateWithParams = (
  router: AppRouterInstance,
  url: string,
  apiParams: Record<string, string | null | undefined>,
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
