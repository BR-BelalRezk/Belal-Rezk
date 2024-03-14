"use client";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";

type MenuAnimationValues = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuAnimationContext = createContext<MenuAnimationValues | null>(null);

const useMenuAnimation = () => {
  const context = useContext(MenuAnimationContext);
  if (context === null || context === undefined) {
    throw new Error(
      "use the useMenuAnimation inisde the MenuAnimation context provider"
    );
  }
  return context;
};

const MenuAnimation = ({
  children,
  id,
}: {
  children: Readonly<React.ReactNode>;
  id: "aside" | "navbar";
}) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (id === "navbar" && window.screen.width >= 640) {
      setToggle(true);
    }
  }, [id]);
  return (
    <MenuAnimationContext.Provider value={{ toggle, setToggle }}>
      {children}
    </MenuAnimationContext.Provider>
  );
};

const MenuAnimationParent = ({
  className,
  children,
}: {
  className: string;
  children: Readonly<React.ReactNode>;
}) => {
  const { toggle } = useMenuAnimation();
  return (
    <motion.div
      className={className}
      initial={false}
      animate={toggle ? "open" : "close"}
    >
      {children}
    </motion.div>
  );
};

const MenuAnimationList = ({
  children,
  className,
  insetOpen,
  insetClose,
}: {
  insetOpen: string;
  insetClose: string;
  className: string;
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <motion.ul
      className={className}
      variants={{
        open: {
          clipPath: insetOpen,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 1,
            delayChildren: 0.5,
            staggerChildren: 0.05,
          },
        },
        close: {
          clipPath: insetClose,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 1,
          },
        },
      }}
    >
      {children}
    </motion.ul>
  );
};

const MenuAnimationListItem = ({
  className,
  children,
}: {
  className: string;
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <motion.li
      className={className}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 150, damping: 15 },
        },
        close: { opacity: 0, y: 25, transition: { duration: 0.3 } },
      }}
    >
      {children}
    </motion.li>
  );
};

const MenuAnimationToggleButton = ({
  className,
  children,
}: {
  children: React.ReactElement;
  className: string;
}) => {
  const { toggle, setToggle } = useMenuAnimation();
  return (
    <button
      className={className}
      onClick={() => setToggle((prevState) => !prevState)}
      aria-label="Menu Animation Toggle Button"
    >
      {cloneElement(children, { toggle })}
    </button>
  );
};

export {
  MenuAnimation,
  MenuAnimationParent,
  MenuAnimationList,
  MenuAnimationListItem,
  MenuAnimationToggleButton,
};
