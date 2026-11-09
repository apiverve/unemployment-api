using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UnemploymentRate
{
    /// <summary>
    /// Query options for the Unemployment Rate API
    /// </summary>
    public class UnemploymentRateQueryOptions
    {
        /// <summary>
        /// ISO country code (2 or 3 letter). Examples: US, USA, DE, DEU, GB, GBR
        /// </summary>
        [JsonProperty("country")]
        public string Country { get; set; }

        /// <summary>
        /// Specific year to retrieve data for (1991-present). Returns latest if not specified.
        /// </summary>
        [JsonProperty("year")]
        public int? Year { get; set; }

        /// <summary>
        /// Include the change against the previous year, the 5-year change and the 5-year high, low and average rate
        /// </summary>
        [JsonProperty("changes")]
        public bool? Changes { get; set; }
    }
}
