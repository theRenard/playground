declare class SimplexNoise {
  constructor(seed?: number);
  noise2D(x: number, y: number): number;
}

declare module '@/utils/SimplexNoise' {
  export = SimplexNoise;
}
