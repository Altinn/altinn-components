export enum SizeEnum {
  xs = 'XSmall',
  sm = 'Small',
  md = 'Medium',
  lg = 'Large',
  xl = 'XL',
}

export type Size = keyof typeof SizeEnum;
