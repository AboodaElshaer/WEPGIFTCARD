# Nexus Shopify Theme

This folder contains the compiled Shopify theme based on your React UI.

## How to use

1. Download the `shopify-theme.zip` file.
2. Go to your Shopify Admin Panel.
3. Navigate to **Online Store** > **Themes**.
4. Scroll down to the **Theme library** section.
5. Click **Add theme** > **Upload zip file**.
6. Upload the `shopify-theme.zip` file.
7. Once uploaded, you can customize it and publish it.

## Included files

- `layout/theme.liquid`: The main layout file (with CSS and fonts included).
- `templates/index.json`: The homepage template.
- `sections/header.liquid`: The navigation bar, adapted to use Shopify Liquid variables (cart count, links, etc).
- `assets/style.css`: The compiled Tailwind CSS and custom styles.
