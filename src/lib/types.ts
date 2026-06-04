export const ALL_TAGS = [
  'Stalin-era',
  'Historic Heritage',
  'High Ceilings',
  'Brick Industrial',
  'Art Nouveau',
  'Soviet Modernist',
] as const;

export type Tag = (typeof ALL_TAGS)[number];

export interface Listing {
  id:          string;
  slug:        string;
  title:       string;
  address:     string;
  district:    string;
  tags:        Tag[];
  size_sqm:    number;
  floor:       number;
  total_floors: number;
  year_built?: number;
  images: {
    cover:                string;
    before:               string[];
    after:                string[];
    floor_plan_existing:  string;
    floor_plan_optimized: string;
    /** Current-state photos shown in the property gallery */
    gallery?:             string[];
  };
  financials: {
    asking_price_gel:           number;
    renovation_estimate_gel:    number;
    post_reno_market_value_gel: number;
  };
  featured:    boolean;
  published:   string; // ISO date string
  description: string;
  /** Optional Georgian translations of free-text fields */
  ka?: {
    title?:       string;
    address?:     string;
    description?: string;
  };
}
