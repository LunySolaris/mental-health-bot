import { ChartJSNodeCanvas } from "chartjs-node-canvas";

export async function generateGraph(
  week1: number[],
  week2: number[]
): Promise<Buffer> {
  const canvas = new ChartJSNodeCanvas({ width: 800, height: 400 });

  return canvas.renderToBuffer({
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Week 1",
          data: week1,
          borderColor: "pink"
        },
        {
          label: "Week 2",
          data: week2,
          borderColor: "green"
        }
      ]
    }
  });
}
