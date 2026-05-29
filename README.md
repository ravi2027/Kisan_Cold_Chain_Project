# Kisan_Cold_Chain_Project
🚜 Kisan Cold Chain — AI-powered cold logistics SaaS platform helping farmers reduce crop spoilage through spoilage prediction, cold storage discovery, shared transport pooling, and smart AI recommendations.

An advanced, AI-driven agricultural cold chain logistics and storage management system tailored for farmers, cooperatives, and supply chain operators. 

This repository houses a fully localized, offline-capable mirror of the Kisan Cold Chain web platform, supercharged with modern UI/UX enhancements, a premium obsidian dark theme, and an interactive multilingual AI support assistant.

---

## 🌟 Key Features

* **Complete Offline-First Architecture**: Remote CDNs and external script references are fully mapped to matching local subdirectories. The app runs completely offline without calling external APIs.
* **Premium Obsidian Dark Theme**: A beautifully integrated dark mode toggled directly from the navigation bar. Backed by smooth CSS transition animations (`0.3s ease`) on all interactive containers.
* **Multilingual AI Assistant**: An interactive chat assistant floating in the bottom-right corner, offering instant resolutions for agricultural cold chain queries in **5 languages** (English, हिन्दी, ਪੰਜਾਬੀ, தமிழ், తెలుగు).
* **Polished, Watermark-Free Interface**: Streamlined brand design with the removal of external system markers for an optimal enterprise presentation.
* **IoT Logistics Ecosystem**: Conceptual visualizations of real-time temperature, humidity, and micro-climate chamber monitoring alongside active reefer truck tracking.

---

## 📂 Project Directory Structure

```text
kisan-cold-chain/
│
├── index.html                               # Core entry point (fully optimized and enhanced)
├── README.md                                # End-to-end project documentation
│
├── assets/
│   └── scripts/
│       ├── main-logger.js                # Build error & runtime reporting logger
│       └── chatbot.js                      # [NEW] Multilingual AI Chatbot Assistant script
│
├── kisan-cold-chain/
│   └── static/
│       └── js/
│           └── bundle.js                   # Pre-compiled core React client-side bundle (4.7MB)
│
├── images.pexels.com/                       # Offline-cached high-quality agricultural media assets
├── static.prod-images/    # Offline-cached localized product graphics
├── fonts.googleapis.com/                    # Offline-cached Typography sheets (Outfit & IBM Plex Sans)
├── fonts.gstatic.com/                       # Static fonts distribution warehouse
├── us-assets.i.posthog.com/                 # Offline-cached local analytics bundles
└── static.cloudflareinsights.com/          # Cloudflare beacon local cache
```

---

## 🚀 Local Development & Setup

Getting the web application running live on your local machine is extremely simple:

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your system.

### Step 1: Start the Local Web Server
Launch a high-performance static web server in the root of the workspace directory. We recommend Node's `http-server` package:

```bash
# Automatically download and spin up the server on port 3000
npx -y http-server -p 3000
```

### Step 2: Open in your Browser
Navigate to the following link to interact with the Kisan Cold Chain platform:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🛠️ Technical Enhancements Walkthrough

### 1. Watermark Removal
The static "Kisan Cold Chain" brand badge `<a id="kcc-badge">` and its nested SVGs have been safely removed from `index.html` to establish an unblemished, fully custom enterprise UI/UX.

### 2. Obsidian Dark Mode Architecture
Implemented a custom CSS-variable stylesheet block inside the document `<head>`:
* **Token Overrides**: Re-defines primary HSL design variables (e.g. `--background`, `--card`, `--border`, `--foreground`) inside a `html.dark` class scope.
* **Utility Patching**: Since the core React bundle uses hardcoded Tailwind classes (such as body background `bg-stone-50` and header navigation `bg-white/70`), specific dark mode overrides with high-priority CSS declarations were created (e.g., `html.dark .bg-stone-50 { background-color: hsl(240 10% 4%) !important }`).
* **Instant Init (No FOUC)**: A script block executes immediately at the start of `<head>` to read local storage or system pre-color schemes:
  ```javascript
  (function() {
      const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      if (theme === 'dark') document.documentElement.classList.add('dark');
  })();
  ```
* **Persistent Injunction**: A polling listener injects the interactive Sun/Moon button right next to the auth actions inside the navbar (`data-testid="navbar"`), ensuring the toggle survives React hydration cycles.

### 3. Kisan AI Chatbot Assistant (`chatbot.js`)
Developed a modular client-side script that injects a premium floating query solver widget:
* **Interface & UX**: Features a glowing floating action button (FAB) with a pulsing micro-animation. Clicking the FAB toggles a glassmorphic chatbot panel supporting dynamic bounce-in origin scaling.
* **Dropdown Language Selector**: Let's users swap languages in real-time. Translates the welcome prompt, text inputs, placeholder prompts, and suggestion chips instantly.
* **Fuzzy Semantic Matcher**: Maps keywords inside the active locale database to return authentic, highly helpful responses in the chosen language.
* **Topics Resolved**:
  1. *Pricing & Rental Rates*: Details storage costs (₹80 - ₹120 per bag) and cooperative discounts.
  2. *Booking Guidelines*: Explains step-by-step how to reserve cold storage or refrigerated transport trucks from the dashboard.
  3. *Reefer Vehicle Transport*: Covers payload specs (3.5T to 20T) and precise thermal management in transit.
  4. *Thermal & Humidity Monitoring*: Guides farmers on reading continuous IoT sensor feeds 24/7.
  5. *Supported Crops*: Covers optimal storage climates for potatoes, onions, apples, carrots, green vegetables, and dairy.

---

## 📄 License
This project is open-sourced under the [MIT License](LICENSE).
