"use client";

import { createContext, useRef, useContext, RefObject } from "react";

export type ScrollContextType = {
  homeRef: RefObject<HTMLElement | null>;
  aboutRef: RefObject<HTMLElement | null>;
  contactRef: RefObject<HTMLElement | null>;
  experienceRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  skillsRef: RefObject<HTMLElement | null>;
  scrollTo: (ref: RefObject<HTMLElement | null>) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: any) => {
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{
        homeRef,
        aboutRef,
        contactRef,
        experienceRef,
        projectsRef,
        skillsRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
