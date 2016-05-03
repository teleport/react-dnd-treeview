import React from "react";

namespace NormalStyles {

  export const insertTarget: React.CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
    height: "1em",
    position: "absolute",
    zIndex: 1,
    display: "none",
  };

  export const insertBeforeTarget: React.CSSProperties = {
    top: "-0.5em",
  };

  export const insertAfterTarget: React.CSSProperties = {
    bottom: "-0.5em",
  };

  export const insertTargetCanDrop: React.CSSProperties = {
    display: "flex",
  };

  export const insertTargetDropping: React.CSSProperties = {
  };

  export const insertTargetMarkerDropping: React.CSSProperties = {
    boxSizing: "border-box",
    width: "100%",
    height: "3px",
    borderRadius: "2px",
    background: "linear-gradient(90deg, gray, white)",
    alignSelf: "center",
  };

}

namespace DebugStyles {

  export const insertTarget: React.CSSProperties = {
    opacity: 0.5,
  };

  export const insertTargetCanDrop: React.CSSProperties = {
  };

  export const insertTargetDropping: React.CSSProperties = {
    opacity: 0.9,
  };

  export const insertBeforeTarget: React.CSSProperties = {
    backgroundColor: "#ffffdd",
  };

  export const insertAfterTarget: React.CSSProperties = {
    backgroundColor: "#ffddff",
  };

}

const isDebug = false;

export namespace Styles {

  export const insertBeforeTarget = Object.assign(
    {},
    NormalStyles.insertTarget,
    NormalStyles.insertBeforeTarget,
    isDebug ? DebugStyles.insertTarget : {},
    isDebug ? DebugStyles.insertBeforeTarget : {}
  );

  export const insertAfterTarget = Object.assign(
    {},
    NormalStyles.insertTarget,
    NormalStyles.insertAfterTarget,
    isDebug ? DebugStyles.insertTarget : {},
    isDebug ? DebugStyles.insertAfterTarget : {}
  );

  export const insertTargetCanDrop: React.CSSProperties = Object.assign(
    {},
    NormalStyles.insertTargetCanDrop,
    isDebug ? DebugStyles.insertTargetCanDrop : {}
  );

  export const insertTargetDropping: React.CSSProperties = Object.assign(
    {},
    NormalStyles.insertTargetDropping,
    isDebug ? DebugStyles.insertTargetDropping : {}
  );

  export const insertTargetMarkerDropping: React.CSSProperties =
    NormalStyles.insertTargetMarkerDropping;
}
