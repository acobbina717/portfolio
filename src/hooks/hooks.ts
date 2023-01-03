import { useScrollIntoView } from "@mantine/hooks";

export const scrollToAbout = () => useScrollIntoView<HTMLDivElement>();
// export const { targetRef: scrollRef } = scrollToAbout();
export const scrollToProjects = () => useScrollIntoView<HTMLDivElement>();

export const openInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
