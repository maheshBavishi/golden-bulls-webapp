"use client";

import axios from "axios";

/**
 * Market Data Service - REST API for Twelve Data
 * Fetches current prices on demand
 */
class MarketDataService {
  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_TWELVE_DATA_KEY || "";
    this.priceCache = new Map(); // Cache prices for 5 seconds
    this.cacheTimeout = 5000; // 5 seconds

    this.client = axios.create({
      baseURL: "https://api.twelvedata.com",
      timeout: 10000,
    });
  }

  /**
   * Fetch current price for a symbol
   * @param {string} symbol - Forex pair (e.g., "EUR/USD")
   * @returns {Promise<Object>} Price data
   */
  async fetchPrice(symbol) {
    if (!this.apiKey) {
      console.error("❌ Twelve Data API key not found");
      throw new Error("API key not found");
    }

    // Check cache first
    const cached = this.priceCache.get(symbol);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      console.log(`💾 Using cached price for ${symbol}:`, cached.data);
      return cached.data;
    }

    console.log(`🔄 Fetching price for ${symbol}...`);

    try {
      const response = await this.client.get("/price", {
        params: {
          symbol,
          apikey: this.apiKey,
        },
      });

      const data = response.data;

      if (data?.price) {
        const priceData = {
          price: parseFloat(data.price),
          symbol,
          timestamp: Date.now(),
        };

        // Cache the result
        this.priceCache.set(symbol, {
          data: priceData,
          timestamp: Date.now(),
        });

        console.log(`✅ Price for ${symbol}:`, priceData.price);
        return priceData;
      }

      if (data?.code) {
        console.error(`❌ API Error for ${symbol}:`, data.message);
        throw new Error(data.message || "Failed to fetch price");
      }

      throw new Error("Invalid response format");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          `❌ Axios error for ${symbol}:`,
          error.response?.data || error.message,
        );
        throw new Error(error.response?.data?.message || "Network/API error");
      }

      console.error(`❌ Unknown error for ${symbol}:`, error);
      throw error;
    }
  }

  /**
   * Clear cache for a specific symbol or all symbols
   * @param {string|null} symbol
   */
  clearCache(symbol = null) {
    if (symbol) {
      this.priceCache.delete(symbol);
    } else {
      this.priceCache.clear();
    }
  }
}

// Singleton instance
const marketDataService = new MarketDataService();

export default marketDataService;
