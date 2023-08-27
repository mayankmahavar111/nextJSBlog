import { useEffect, useState } from "react";
import { findNavigationObject } from "../commonUtils";

export default function BreadCrumb() {
  const [navigationList, setNavigationList] = useState([]);

  useEffect(() => {
    if (typeof window === "object") {
      setNavigationList(
        window.location.href.split("://")[1]?.split("/")?.slice(1)
      );
    }
  }, []);
  return (
    <div>
      {navigationList.length > 1 &&
        navigationList.map((item, key) => {
          const urlObject = findNavigationObject(item);
          return (
            urlObject && (
              <a className="padLeft1" href={urlObject?.link}>
                {urlObject?.name}{" "}
                {key !== navigationList.length - 1 ? "-> " : ""}
              </a>
            )
          );
        })}
    </div>
  );
}
