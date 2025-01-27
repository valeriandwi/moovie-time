import { API_TOKEN } from "@/constants/constants";
import { TParams } from "@/services/type";
import { message } from "antd";

export async function fetchData<T>({
  url,
  options,
  params,
}: {
  url: string;
  options?: RequestInit;
  params?: TParams;
}): Promise<T | undefined> {
  try {
    const urlPath = new URL(url);
    const urlSearchParams = new URLSearchParams(params);
    urlPath.search = urlSearchParams.toString();

    const response = await fetch(urlPath, {
      ...options,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      message.error(error.message);
    } else {
      message.error("An unknown error occurred");
    }
    throw error;
  }
}
