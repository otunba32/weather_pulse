# Classy Weather App

A beautiful, responsive weather application built with React that provides a 7-day weather forecast for any location worldwide, featuring elegant animations and a dark mode toggle.

![Weather Pulse App Screenshot](https://placeholder.svg?height=400&width=800)

## Features

- **Location-based Weather**: Search for any city or location worldwide
- **7-Day Forecast**: View weather predictions for the next week with correct day sequence
- **Detailed Weather Information**: Temperature, precipitation, wind speed
- **Weather Animations**: Beautiful CSS animations for different weather conditions
- **Country Flags**: Displays country flags using emoji
- **Responsive Design**: Works on all devices (mobile, tablet, laptop, desktop)
- **Dark Mode**: Toggle between light and dark themes
- **Persistent Settings**: Remembers your location and theme preference
- **Elegant UI**: Beautiful design with classic serif typography

## Weather Animations

The app includes beautiful CSS animations for different weather conditions:

- **Clear Sky**: Gentle sun ray animation with bouncing weather icon
- **Partly Cloudy**: Floating cloud effect with swaying icon
- **Overcast**: Subtle cloud cover animation
- **Foggy**: Drifting fog effect with complex movement
- **Light Rain**: Animated raindrops with gentle background pulsing
- **Heavy Rain**: Intense raindrop animation with faster falling
- **Snow**: Snowflakes falling with rotation and floating icon
- **Thunderstorm**: Lightning flash effects with dark stormy background
- **Thunderstorm with Hail**: Hailstone animation with bouncing effects

## Technologies Used

- **React**: Functional components with hooks
- **CSS Animations**: Complex weather animations using pure CSS
- **Plain CSS**: Responsive design with media queries
- **Local Storage**: For persistent user preferences
- **Open-Meteo API**: Free weather data API
- **System Fonts**: Times New Roman, Georgia for elegant typography

## Responsive Design

The app is fully responsive and works on all screen sizes using plain CSS media queries:

- **Mobile (< 480px)**: Optimized layout with stacked weather cards, reduced font sizes
- **Small Tablets (480px - 600px)**: Improved spacing and larger touch targets
- **Tablets (600px - 900px)**: Balanced layout with adjusted card sizes
- **Laptops (900px - 1200px)**: Enhanced layout with side-by-side weather cards
- **Desktops (> 1200px)**: Full layout with optimal spacing and sizing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/classy-weather.git
   cd classy-weather
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Search for a Location**: Type a city or location name in the search box
2. **View Weather Details**: See the 7-day forecast with temperature ranges
3. **Toggle Dark Mode**: Click the sun/moon icon in the top-right corner
4. **View Additional Info**: Precipitation and wind speed are shown when available
5. **Enjoy Weather Animations**: Each weather condition has its own unique animation

## CSS Structure

The app uses plain CSS with a well-organized structure:

- **Base Styles**: Typography, colors, and global settings
- **Layout**: Container and app structure
- **Components**: Styles for weather cards, search, toggle button
- **Weather Animations**: Complex animations for different weather conditions
- **Dark Mode**: Complete theme switching
- **Responsive Design**: Media queries for all screen sizes
- **Accessibility**: Respects user's motion preferences

## API Information

This app uses the free [Open-Meteo API](https://open-meteo.com/) for weather data:
- Geocoding API for location search
- Weather Forecast API for weather data

No API key is required as Open-Meteo is a free and open-source weather API.

## Accessibility Features

- **Reduced Motion**: Respects the user's `prefers-reduced-motion` setting
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Semantic HTML**: Proper HTML structure for screen readers
- **Color Contrast**: Sufficient contrast in both light and dark modes
- **Focus Indicators**: Visible focus states for keyboard users

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather icons provided by native emoji support
- Flag emojis for country representation
- Original design inspiration from [Jonas Schmedtmann]

---

Created with ❤️ by Emmanuel Abia
