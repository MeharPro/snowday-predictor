# ❄️ Snow Day Predictor

**Predict whether there is going to be a snow day at Halton District School Board!**

A beautiful, real-time snow day predictor web app that uses live weather data to calculate the probability of school closures.

![Snow Day Predictor](https://img.shields.io/badge/weather-api-blue) ![Halton](https://img.shields.io/badge/HDSB-predictor-green)

## 🌟 Features

- **📍 Postal Code Lookup** - Enter any Canadian postal code to get a localized prediction
- **🌡️ Real-Time Weather Data** - Uses Open-Meteo API for accurate forecasts
- **📊 Multi-Factor Analysis** - Considers snowfall, temperature, wind chill, visibility, and timing
- **🎨 Stunning UI** - Beautiful winter-themed design with animated snowfall
- **📱 Fully Responsive** - Works on desktop, tablet, and mobile devices

## 🚀 Live Demo

Simply open `index.html` in your browser or deploy to any static hosting service!

### Quick Start

```bash
# Clone the repository
git clone https://github.com/MeharPro/snowday-predictor.git

# Navigate to the directory
cd snowday-predictor

# Open in browser (macOS)
open index.html

# Or start a local server
npx serve
```

## 🧮 How the Prediction Works

The predictor analyzes multiple weather factors for tomorrow's forecast:

| Factor | Impact |
|--------|--------|
| **Snowfall** | Primary indicator - 15+ cm typically causes closures |
| **Temperature** | Extreme cold (below -20°C) increases probability |
| **Wind Chill** | Dangerous wind chill conditions add weight |
| **Visibility** | Low visibility from blizzards/whiteouts |
| **Wind Speed** | High winds with snow cause blowing/drifting |
| **Morning Timing** | Heavy snow during 6-9 AM commute hours |

## 📁 Project Structure

```
snowday-predictor/
├── index.html      # Main web application (standalone)
├── Snowdaypred.py  # Original Python predictor (reference)
├── README.md       # Documentation
└── LICENSE         # MIT License
```

## 🌐 Deployment Options

### GitHub Pages
1. Go to your repository Settings
2. Navigate to Pages
3. Select "Deploy from a branch"
4. Choose `main` and `/ (root)`
5. Your site will be live at `https://username.github.io/snowday-predictor`

### Vercel / Netlify
Simply connect your GitHub repository - the static HTML will deploy automatically!

### Local Development
```bash
npx serve -p 3000
```

## 📡 APIs Used

- **Open-Meteo API** - Free weather forecasts (no API key required)
- **OpenStreetMap Nominatim** - Geocoding for postal codes

## 🤝 Contributing

Want to improve the predictor? Contributions are welcome!

1. Fork the repository
2. Add historical snow day data from [Toronto Weather Stats](https://toronto.weatherstats.ca/metrics/snow.html)
3. Submit a pull request with your improvements

### Adding Historical Data

You can help improve predictions by adding verified snow day data:
- Date of confirmed HDSB closure
- Snowfall amount that day
- Temperature and wind conditions

## ⚠️ Disclaimer

This predictor is for **entertainment purposes only**. Always check official [HDSB announcements](https://www.hdsb.ca/) for actual school closure information.

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

Made with ❄️ by the community
