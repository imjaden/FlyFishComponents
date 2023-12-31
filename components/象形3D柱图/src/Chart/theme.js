import { merge } from "data-vi/helpers";
import {
  FONTSTYLE,
  FONTWEIGHT,
  TITLELINKTARGET,
  LEGENDTYPE,
  LEGENDORIENT,
  RADARSHAPE,
} from "../constant";
import { XAXISPOSITION } from "../constant/xAxis";
import { YAXISPOSITION } from "../constant/yAxis";
import {
  AXISTYPE,
  AXISNAMELOCATIONTYPE,
  AXISLINETYPE,
  AXISLINECAP,
  AXISLINEJOIN,
} from "../constant/batchAxis";
import { TOOLTIPTIGGER } from "../constant/tooltip";
import {
  SYMBOL,
  SYMBOLREPEATPOSITION,
  SYMBOLPOSITION,
} from "../constant/series";

export const COLORS = [
  "#3891FF",
  "#60B7FF",
  "#00C1FF",
  "#1FDFE9",
  "#FACF14",
  "#E36D6F",
  "#8F4EED",
  "#B8E986",
  "#FF2366",
  "#F5A623",
];

export const BACKGROUNDCOLOR = "#13183000";

export const BORDERCOLOR = "rgba(0, 0, 0, 0.1)";

export const FONTCOLOR = "#9aabbd";

export const FONTFAMILY = '"Helvetica Neue", "Helvetica", "Arial", sans-serif';

export const FONTLINEHEIGHT = 1.5;

export const TOOLTIPTRIGGER = "axis";

export const LEGENDPAGEICONCOLOR = "#aaa";

export const LEGENDPAGEICONINACITVECOLOR = "#2f4554";

export const GRID = {
  top: "10%",
  bottom: "10%",
  left: "10%",
  right: "10%",
};

export const INITFONTSTYLE = {
  color: FONTCOLOR,
  fontStyle: Object.keys(FONTSTYLE)[0],
  fontWeight: Object.keys(FONTWEIGHT)[0],
  fontFamily: "sans-serif",
  fontSize: 18,
  textAlign: 'auto',
  textVerticalAlign: 'auto',
  ...GRID,
};

export const INITTITLES = {
  show: true,
  top: 10,
  left: 10,
  target: Object.keys(TITLELINKTARGET)[0],
  subtarget: Object.keys(TITLELINKTARGET)[0],
};

export const RECT = {
  width: "auto",
  height: "auto",
  backgroundColor: "transparent",
};

export const LEGEND = {
  show: true,
  width: 20,
  type: Object.keys(LEGENDTYPE)[0],
  orient: Object.keys(LEGENDORIENT)[0],
};

export const TOOLTIP = {
  show: true,
  showContent: true,
  alwaysShowContent: false,
  confine: false,
  enterable: false,
  hideDelay: 100,
  trigger: Object.keys(TOOLTIPTIGGER)[1],
};

export const XAXIS = {
  show: true,
  position: Object.keys(XAXISPOSITION)[0],
  type: Object.keys(AXISTYPE)[1],
  nameGap: 15,
  nameLocation: Object.keys(AXISNAMELOCATIONTYPE)[0],
  axisLabel: {
    formatter: (value, index) => value,
  },
  splitArea:{ 
    show:true,
    interval:'auto',
    areaStyle:{
        color: ['rgba(250,250,250,0)','rgba(56,128,255,0.14)'],
    }
  },
};

export const YAXIS = {
  show: true,
  position: Object.keys(YAXISPOSITION)[0],
  type: Object.keys(AXISTYPE)[0],
  name:"单位：G",
  nameGap: 15,
  nameLocation: Object.keys(AXISNAMELOCATIONTYPE)[0],
  axisLabel: {
    formatter: (value, index) => value,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: ["#315070"],
    },
  },
};

export const LINESTYLE = {
  color: BORDERCOLOR,
  width: 1,
  type: Object.keys(AXISLINETYPE)[0],
  dashOffset: 0,
  cap: Object.keys(AXISLINECAP)[0],
  join: Object.keys(AXISLINEJOIN)[0],
  miterLimit: 10,
  opacity: 1,
};

export const AREASTYLE = {
  color: BORDERCOLOR,
  opacity: 1,
};

export const AXISLINE = {
  show: true,
  onZero: true,
  lineStyle: LINESTYLE,
};

export const AXISTICK = {
  show: true,
  alignWithLabel: false,
  length: 5,
  inside: false,
  lineStyle: LINESTYLE,
};

export const SPLITLINE = {
  show: true,
  lineStyle: LINESTYLE,
};

export const AXISLABELWITHOUTRECT = {
  show: true,
  inside: false,
  margin: 8,
  ...INITFONTSTYLE,
};

export const SERIESLABEL = merge({}, AXISLABELWITHOUTRECT, { show: false });

export const AXISLABEL = {
  ...AXISLABELWITHOUTRECT,
  ...RECT,
};

export const RADARSERIES = {
  symbol: Object.keys(SYMBOL)[0],
  symbolSize: 4,
  symbolKeepAspect: false,
  lineStyle: LINESTYLE,
  areaStyle: AREASTYLE,
};

export const RADAR = {
  radius: 75,
  startAngle: 90,
  splitNumber: 5,
  scale: false,
  shape: Object.keys(RADARSHAPE)[0],
  axisTick: {
    show: false,
  },
};

export const RADARGRID = {
  top: "50%",
  left: "50%",
  radius: "75%",
};

export const INITSERIES = {
  label: SERIESLABEL,
  showImageType: false,
  symbolSize: ["100%", "100%"],
  symbolOffset: [0, 0],
  symbolRepeat: false,
  symbolRepeatDirection: Object.keys(SYMBOLREPEATPOSITION)[0],
  symbolPosition: Object.keys(SYMBOLPOSITION)[0],
  symbolClip: false,
};

export const AXISPOINTER = {
  show: false,
  type: 'line',
  triggerTooltip: true,
  triggerOn: 'mousemove|click'
}

export const ANIMATION = {
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationDurationUpdate: 300,
  animationEasing: 'cubicOut',
  animationEasingUpdate: 'cubicInOut',
  animationDelay: 0,
  animationDelayUpdate: 0,
}
