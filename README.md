# Future & Options Expiry Tracker

**Live Website:** [https://ajitgautamaccount.github.io/OptionExpiry/](https://ajitgautamaccount.github.io/OptionExpiry/)

A comprehensive F&O (Futures & Options) Expiry Tracker for Indian markets — NSE, BSE, and MCX — built as a single-page static web application hosted on GitHub Pages.

Developed by **Ajit Gautam**

---

## Features

### Multi-Segment Coverage
- **Index Futures (NFO/BFO):** NIFTY, BANKNIFTY, FINNIFTY, MIDCPNIFTY, SENSEX, BANKEX, and more
- **Equity Futures (NFO):** 160+ stock futures with lot sizes and live prices
- **MCX Commodities:** Crude Oil, Natural Gas, Gold, Silver, Copper, Zinc, and commodity indices (MCXBULLDEX, MCXMETLDEX)

### Expiry Date Filters
- **Today:** Shows instruments expiring today
- **This Week:** Shows all instruments expiring within the current week
- **This Month:** Shows all instruments expiring in the current month
- Expiry dates are dynamically computed based on exchange rules (last Thursday for NSE, last Tuesday for BSE, commodity-specific rules for MCX)

### Live Market Data
- Real-time price fetching via Yahoo Finance API
- Auto-refresh toggle for continuous price updates
- Displays Last Traded Price (LTP), lot size, and margin requirements
- MCX margin calculation with per-commodity margin rates

### Search & Sort
- Symbol/name search across all segments
- Sortable table columns (symbol, expiry, lot size, LTP, margin)
- Paginated equity table for easy navigation

### Telegram Notifications
- Daily alerts: notifies 1 day before expiry for Index and MCX instruments
- Weekly alerts: every Monday, lists all expiries for that week
- Multi-recipient support via comma-separated Chat IDs
- Secure: Bot token stored only in browser localStorage

### UI/UX
- Dark and Light theme toggle
- Responsive design for mobile and desktop
- Gradient header with shimmer animation
- Clean, modern interface with Inter and JetBrains Mono fonts

---

## How It Works

The entire application is a single `index.html` file containing all HTML, CSS, and JavaScript. No build tools, frameworks, or backend required.

- **Expiry Calculation:** On page load, the app dynamically computes expiry dates for the current month using exchange-specific rules (e.g., last Thursday for NSE monthly, every Thursday for weekly index options)
- **Price Fetching:** Uses Yahoo Finance API via a CORS proxy to fetch live prices
- **Notifications:** Integrates with Telegram Bot API to send expiry alerts directly to your Telegram

---

## Getting Started

1. Visit the live site: [https://ajitgautamaccount.github.io/OptionExpiry/](https://ajitgautamaccount.github.io/OptionExpiry/)
2. Use the **Today / This Week / This Month** buttons to filter by expiry window
3. Click **Refresh Prices** to fetch live LTP from Yahoo Finance
4. Use the search bar to find specific symbols

### Setting Up Telegram Notifications

1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts to create a bot — copy the **Bot Token**
3. Message your new bot, then message **@userinfobot** to get your **Chat ID**
4. Click the **Notify** button on the website, enter your Bot Token and Chat ID(s), and click **Save & Enable**

---

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Hosting:** GitHub Pages (static site)
- **Data Source:** Yahoo Finance API (live prices)
- **Notifications:** Telegram Bot API
- **Fonts:** Google Fonts (Inter, JetBrains Mono)

---

## License

This project is open source. Feel free to fork and customize for your own use.
