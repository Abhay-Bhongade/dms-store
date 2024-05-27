// // import * as React from "react";
// // import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

// // const settings = {
// //   width: 200,
// //   height: 200,
// //   value: 4.8,
// //   valueMin: 0,
// //   valueMax: 10,
// // };

// // export default function GuageChart() {
// //   return (
// //     <Gauge
// //       {...settings}
// //       cornerRadius="50%"
// //       sx={(theme) => ({
// //         [`& .${gaugeClasses.valueText}`]: {
// //           fontSize: 40,
// //         },
// //         [`& .${gaugeClasses.valueArc}`]: {
// //           fill: "#D60B0B",
// //         },
// //         [`& .${gaugeClasses.referenceArc}`]: {
// //           fill: theme.palette.text.disabled,
// //         },
// //       })}
// //     />
// //   );
// // }

// import * as React from "react";
// import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

// const settings = {
//   width: 200,
//   height: 200,
//   value: 4.8,
//   valueMin: 0,
//   valueMax: 10,
// };

// export default function GaugeChart() {
//   return (
//     <div style={{ position: "relative" }} className="content-in-center">
//       <svg width="0" height="0">
//         <defs>
//           <linearGradient
//             id="valueArcGradient"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="100%"
//           >
//             <stop
//               offset="0%"
//               style={{ stopColor: "#F2B0B0", stopOpacity: 1 }}
//             />
//             <stop
//               offset="100%"
//               style={{ stopColor: "#D60B0B", stopOpacity: 1 }}
//             />
//           </linearGradient>
//         </defs>
//       </svg>
//       <Gauge
//         {...settings}
//         cornerRadius="50%"
//         sx={(theme) => ({
//           [`& .${gaugeClasses.valueText}`]: {
//             fontSize: 40,
//           },
//           [`& .${gaugeClasses.valueArc}`]: {
//             fill: "url(#valueArcGradient)",
//           },
//           [`& .${gaugeClasses.referenceArc}`]: {
//             fill: theme.palette.text.disabled,
//           },
//         })}
//       />
//     </div>
//   );
// }

import * as React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function GaugeChart({ score }) {
  const settings = {
    width: 180,
    height: 180,
    value: score,
    valueMin: 0,
    valueMax: 10,
  };

  return (
    <div style={{ position: "relative" }} className="content-in-center">
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="valueArcGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#F2B0B0", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#D60B0B", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <Gauge
        {...settings}
        cornerRadius="50%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "url(#valueArcGradient)",
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            fill: "#000",
            opacity: 0.1,
          },
        })}
      />
    </div>
  );
}
