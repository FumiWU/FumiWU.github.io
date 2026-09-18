export interface ProjectFigure {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  cardImage: string;
  cardAlt: string;
  summary: string;
  abstract: string;
  figures: ProjectFigure[];
  video?: {
    src: string;
    poster: string;
    caption: string;
  };
  youtubeId?: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: 'ais-behavioral-segmentation',
    title: 'Behavioral Segmentation of AIS Trajectories',
    cardImage: '/images/projects/jmse/study-area.webp',
    cardAlt: 'AIS trajectories crossing the Qiongzhou Strait study area',
    summary: 'An unsupervised matheuristic framework for behaviorally coherent segmentation of AIS vessel trajectories.',
    abstract: 'Accurate behavioral segmentation of vessel trajectories from Automatic Identification System (AIS) is essential for maritime safety and traffic management. Existing methods often rely on predefined thresholds or emphasize geometric criteria and offer limited behavioral interpretability for mobility analysis. This paper introduces an unsupervised behavioral segmentation framework that integrates clustering with matheuristic optimization. Trajectories are cleaned with a forward sliding window, and three smoothed movement features, namely speed, acceleration, and turning rate, are computed for each point. Each feature is discretized by the Jenks Natural Breaks algorithm to extract key feature points and pointwise feature labels. Segment boundaries are near-optimally chosen from these key feature points using a Matheuristic Fixed Set Search (MFSS) that minimizes a Minimum Description Length (MDL) objective. This ensures behavioral consistency within each segment and clear separation between adjacent segments. Experiments on an AIS dataset from the Qiongzhou Strait, China, demonstrate that our proposed method yields more compact, distinctly differentiated segments than baseline methods, while preserving intra-segment behavioral continuity. These segments exhibit strong semantic coherence, making them well-suited for downstream tasks such as traffic risk assessment and route planning.',
    figures: [
      {
        src: '/images/projects/jmse/study-area.webp',
        alt: 'Study area and spatial distribution of AIS trajectory points',
        caption: 'Study area and spatial distribution of original AIS trajectory points in the Qiongzhou Strait case study.',
      },
      {
        src: '/images/projects/jmse/feature-profiles.webp',
        alt: 'Trajectory location with speed, acceleration, and turning-rate profiles',
        caption: 'Trajectory location and the corresponding speed, acceleration, and turning-rate profiles.',
      },
      {
        src: '/images/projects/jmse/key-feature-points.webp',
        alt: 'Key feature points extracted from three vessel-movement profiles',
        caption: 'Key feature points from speed, acceleration, and turning rate are combined into candidate segment boundaries.',
      },
      {
        src: '/images/projects/jmse/mfss-segments.webp',
        alt: 'MFSS behavioral segment representations across the study area',
        caption: 'MFSS behavioral representations for speed, acceleration, and turning rate at study-area, port, and crossing scales.',
      },
    ],
    links: [
      {
        label: 'Research paper · DOI',
        href: 'https://doi.org/10.3390/jmse13122393',
      },
    ],
  },
  {
    slug: 'ais-visualization',
    title: 'AIS Traffic Visualization',
    cardImage: '/images/projects/ais-visualization/ais-traffic-poster.webp',
    cardAlt: 'Animated vessel trajectories in the Qiongzhou Strait',
    summary: 'A visual workflow for exploring AIS trajectories, schedule scenarios, and vessel headways over time.',
    abstract: 'An interactive spatial workflow for inspecting real AIS trajectories, schedule scenarios, representative trajectories, and dynamic vessel headways. Derived Parquet data are queried by time slice and rendered as vessel trails so movement patterns and scenario timing can be examined without loading the full source dataset into the interface.',
    figures: [],
    video: {
      src: '/images/projects/ais-visualization/ais-traffic-visualization.mp4',
      poster: '/images/projects/ais-visualization/ais-traffic-poster.webp',
      caption: 'A ten-hour cleaned AIS window from 25 August 2025, condensed into an 18-second trajectory animation.',
    },
    links: [],
  },
  {
    slug: 'vehicle-behavior-detections',
    title: 'Vehicle Behavior Detections',
    cardImage: '/images/projects/legacy/vehicle-behavior.webp',
    cardAlt: 'Detected and tracked vehicles in online traffic footage',
    summary: 'Traffic-video detection and tracking for classifying vehicle behavior.',
    abstract: 'An integrated traffic-video system combining Mask R-CNN detection, Hungarian assignment, and Kalman filtering to detect, track, and classify vehicles from online camera footage.',
    figures: [
      {
        src: '/images/projects/legacy/vehicle-flow.webp',
        alt: 'Vehicle detection and tracking system flow chart',
        caption: 'Detection, tracking, and behavior-analysis workflow.',
      },
    ],
    youtubeId: 'mTFlKedstPs',
    links: [
      {
        label: 'Research report',
        href: '/docs/vehicle-behavior-detection.pdf',
      },
      {
        label: 'Public code',
        href: 'https://github.com/JoyceWufm/Master-research-project',
      },
    ],
  },
  {
    slug: 'beijing-public-transport',
    title: 'Day of Beijing Public Transport',
    cardImage: '/images/projects/legacy/beijing-transport.webp',
    cardAlt: 'Spatial visualization of Beijing public transport trajectories',
    summary: 'A spatial comparison of weekday and weekend movement from GeoLife GPS trajectories.',
    abstract: 'A spatial visualization of GeoLife GPS trajectories comparing weekday and weekend movement in Beijing. The interface combines transport-mode trajectories, time controls, summary charts, and stay-point analysis.',
    figures: [
      {
        src: '/images/projects/legacy/beijing-transport.webp',
        alt: 'Beijing trajectory visualization interface',
        caption: 'The original interactive trajectory and transport-mode visualization.',
      },
    ],
    youtubeId: 'c_u1-snYJc0',
    links: [
      {
        label: 'Project report',
        href: '/docs/beijing-public-transport-visualisation.pdf',
      },
      {
        label: 'Public code',
        href: 'https://github.com/JoyceWufm/Spatial-visualisation',
      },
    ],
  },
  {
    slug: 'brt-travel-patterns',
    title: 'BRT Travel Patterns',
    cardImage: '/images/projects/legacy/brt-travel.webp',
    cardAlt: 'Travel-time distributions for bus rapid transit data',
    summary: 'Temporal and spatial travel-time patterns derived from Bus Rapid Transit GPS records.',
    abstract: 'A study of Bus Rapid Transit GPS records that cleans matched station-arrival and departure events, derives travel-time statistics, and compares temporal and spatial travel patterns using distribution fitting.',
    figures: [
      {
        src: '/images/projects/legacy/brt-travel.webp',
        alt: 'Bus rapid transit travel-time pattern analysis',
        caption: 'Travel-time pattern analysis derived from BRT GPS records.',
      },
    ],
    links: [
      {
        label: 'Research materials',
        href: 'https://github.com/JoyceWufm/Evaluating-the-Accessibility-of-BRT-System/tree/master/Docs',
      },
      {
        label: 'Public code',
        href: 'https://github.com/JoyceWufm/Evaluating-the-Accessibility-of-BRT-System',
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
