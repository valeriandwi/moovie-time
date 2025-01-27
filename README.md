# Moovie Time 🎥

Moovie Time is a movie discovery app built with Next.js, showcasing popular movies, detailed information, and genres fetched from The Movie Database (TMDB) API.

## Features 🚀

- **Movie List**: Browse popular movies with their poster, title, and rating.
- **Search Movies**: Find movies by name using the autocomplete feature.
- **Movie Details**: View detailed information about a selected movie.
- **Dynamic Genres**: Display movies grouped by their genres.

## Tech Stack 🛠️

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [Ant Design](https://ant.design/)
- **Styling**: Custom CSS with utility-first classes

## Setup and Installation 🏗️

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Steps to Run the Project Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/valeriandwi/moovie-time.git
   ```

2. Navigate to the project directory:
   ```bash
   cd moovie-time
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a .env.local file in the root directory with the following content:
   ```bash
   NEXT_PUBLIC_TMDB_API_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGFlMDlmMjRiNTBjZTQyYjQ2MWFjNTQ0MDdiOTEzNiIsIm5iZiI6MTczNzgxNzk5Mi43NDU5OTk4LCJzdWIiOiI2Nzk0ZmY4OGI1MDBmYzdjYTMxODQwYWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bFWJAH39rSGlrCKi0Lk_5LJTfPHCoeVtuJO7Ckm3hAI
   NEXT_PUBLIC_API_URL=https://api.themoviedb.org/3
   ```
5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
6. Open the app in your browser at http://localhost:3000.

## Usage 📖

- **Search for Movies**: Use the search bar to find movies by name.
- **View Movie Details**: Click on any movie card to see detailed information.
- **Browse Popular Movies**: Explore popular movies dynamically fetched from the TMDB API.

## Environment Variables

To run the app, configure the `.env` file with the following variables:

- `NEXT_PUBLIC_TMDB_API_TOKEN`: Your TMDB API Token.
- `NEXT_PUBLIC_API_URL`: The base URL for the TMDB API (`https://api.themoviedb.org/3`).
