import { colors } from "@ignite-ui/tokens";

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: "#fff",
          }}
        >
          <strong
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.25rem 0.5rem",
              backgroundColor: "rgba(0,0,0, 0.5",
              borderRadius: 8,
            }}
          >
            ${key}
          </strong>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.25rem 0.5rem",
              backgroundColor: "rgba(0,0,0, 0.5",
              borderRadius: 8,
            }}
          >
            {color}
          </span>
        </div>
      </div>
    );
  });
}
