# Components

This directory contains the separate components for the website.

## Directory Structure

```
components/
├── header/
│   ├── header.html   <- Clean HTML template of the header
│   └── header.js     <- Web Component <site-header>
└── footer/
    ├── footer.html   <- Clean HTML template of the footer
    └── footer.js     <- Web Component <site-footer>
```

## How It Works

- `<site-header root="./" current="section"></site-header>`: Inserts the navigation header.
- `<site-footer root="./"></site-footer>`: Inserts the site footer.

To change the header or footer across the entire website, simply edit the corresponding component files.
