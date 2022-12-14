import { useScrollIntoView } from "@mantine/hooks";
import { Ref, RefObject } from "react";

export const scrollToAbout = () => useScrollIntoView<HTMLDivElement>();
// export const { targetRef: scrollRef } = scrollToAbout();
export const scrollToProjects = () => useScrollIntoView<HTMLDivElement>();
