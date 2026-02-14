declare module '@apiverve/unemployment' {
  export interface unemploymentOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface unemploymentResponse {
    status: string;
    error: string | null;
    data: UnemploymentRateData;
    code?: number;
  }


  interface UnemploymentRateData {
      country:     string;
      countryName: string;
      year:        number;
      count:       number;
      historical:  Historical[];
  }
  
  interface Historical {
      year: number;
      rate: number;
  }

  export default class unemploymentWrapper {
    constructor(options: unemploymentOptions);

    execute(callback: (error: any, data: unemploymentResponse | null) => void): Promise<unemploymentResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: unemploymentResponse | null) => void): Promise<unemploymentResponse>;
    execute(query?: Record<string, any>): Promise<unemploymentResponse>;
  }
}
