declare module '@apiverve/unemployment' {
  export interface unemploymentOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface unemploymentResponse {
    status: string;
    error: string | null;
    data: UnemploymentRateData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface UnemploymentRateData {
      country:     null | string;
      countryName: null | string;
      year:        number | null;
      count:       number | null;
      historical:  Historical[];
  }
  
  interface Historical {
      year: number | null;
      rate: number | null;
  }

  export default class unemploymentWrapper {
    constructor(options: unemploymentOptions);

    execute(callback: (error: any, data: unemploymentResponse | null) => void): Promise<unemploymentResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unemploymentResponse | null) => void): Promise<unemploymentResponse>;
    execute(query?: Record<string, any>): Promise<unemploymentResponse>;
  }
}
