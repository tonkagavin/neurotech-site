# Images Directory

This directory contains all images used in the website. Images are organized by section:

## Directory Structure

- `logo/` - Logo images (e.g., NC State Neurotech logo)
- `hero/` - Hero section images
- `about/` - About Us section images
- `projects/` - Project-related images
- `donate/` - Donation section images

## Usage

To use local images in your components:

```typescript
import heroImage from '/images/hero/hero-image.jpg';

<Image src={heroImage} alt="Description" className="..." />
```

For remote URLs, you can still use the string directly:

```typescript
<Image src="https://example.com/image.jpg" alt="Description" className="..." />
```

## Adding New Images

1. Place your image file in the appropriate subdirectory
2. Import it in your component using the path pattern: `import imageName from '/images/[section]/[filename]'`
3. Use the `<Image>` component with the imported image

