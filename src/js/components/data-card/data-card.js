import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  LineElement,
  LineController,
  Filler,
  Tooltip,
);

function initialiseSparklines() {
  const sparklines = document.querySelectorAll(".iati-data-card__sparkline");

  sparklines.forEach(async (canvas) => {
    if (ChartJS.getChart(canvas)) return;

    const dataAttr = canvas.getAttribute("data-sparkline");
    const dataUrl = canvas.getAttribute("data-url");

    try {
      let data = {};
      let isNested = false;

      if (dataAttr) {
        data = JSON.parse(dataAttr);
      } else if (dataUrl) {
        const response = await fetch(dataUrl);
        const result = await response.json();

        const entries = Object.entries(result).sort(
          ([a], [b]) => new Date(a) - new Date(b),
        );

        data.labels = entries.map(([key]) =>
          new Date(key).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        );

        isNested = entries.some(
          ([, value]) => typeof value === "object" && value !== null,
        );

        if (isNested) {
          canvas.parentElement.style.height = "100px";

          const innerKeys = [
            ...new Set(entries.flatMap(([, value]) => Object.keys(value))),
          ];

          data.datasets = innerKeys.map((key) => ({
            label: key,
            data: entries.map(([, value]) => value[key] ?? 0),
          }));
        } else {
          data.datasets = [{ data: entries.map(([, value]) => value) }];
        }
      }

      const ctx = canvas.getContext("2d");

      const colors = ["#155366", "#00c497"];

      new ChartJS(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: (data.datasets ?? [{ data: data.values }]).map(
            (dataset, i) => ({
              ...dataset,
              borderColor: colors[i % colors.length],
              borderWidth: 2,
              fill: !isNested,
              backgroundColor: "#E6F9FE",
              pointRadius: 0,
            }),
          ),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: isNested,
              position: "bottom",
              labels: {
                pointStyle: "line",
                usePointStyle: true,
              },
            },
            tooltip: {
              enabled: true,
              mode: "nearest",
              intersect: false,
              displayColors: isNested,
              boxPadding: 4,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              titleColor: "#155366",
              bodyColor: "#155366",
              callbacks: {
                label: (context) => `${context.label}: ${context.parsed.y}`,
                title: () => "",
              },
            },
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 0,
            },
          },
          scales: {
            y: { display: false },
            x: { display: false },
          },
        },
      });
    } catch (e) {
      console.error("Failed to create sparkline:", e);
    }
  });
}

function setupMutationObserver() {
  let debounceTimer;

  const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(initialiseSparklines, 50);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initialiseSparklines();
    setupMutationObserver();
  });
} else {
  initialiseSparklines();
  setupMutationObserver();
}

export { initialiseSparklines };
