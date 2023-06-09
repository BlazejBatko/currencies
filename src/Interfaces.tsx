export interface Currencies {
  table: string;
  no: string;
  effectiveDate: Date;
  rates: Rate[];
}

export interface Rate {
  currency: string;
  code: string;
  mid: number;
}
