# my-sample-portfolio

My Portfolio V1.0

## Theme update: Corporate Blue (Light Mode)

I updated the light theme to use a professional corporate blue palette instead of a plain black-and-white scheme. If you want to preview or test the light theme locally:

- Open the site and toggle the theme (the app stores the selection in `localStorage` under the `theme` key).
- The CSS variables live in `app/globals.css` under the `.light` block. Key tokens:
	- `--background`: page background (now a very light cool blue)
	- `--foreground`: primary text color (dark slate)
	- `--accent`: primary corporate blue
	- `--accent-secondary`: lighter blue for secondary accents
		- `--border`, `--card`, `--card-hover`: adjusted to subtle blue tones

If you want different shades, edit the `.light` variables in `app/globals.css` and refresh the page.
