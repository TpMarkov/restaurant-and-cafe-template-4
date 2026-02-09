IMAGE Replacement Guidance
=========================

The original template contained photographic assets that must not be reused for this new template.

What I did in this commit:
- Added this guidance file to explain how to replace the images safely.

Recommended replacement workflow:
1. Source wide-angle, ambient, editorial or atmospheric images (avoid close-up food shots and similar compositions to the original).
   - Use licensed stock (Unsplash, Pexels, Shutterstock) or client-provided assets.
   - Prefer dusk/night or cinematic lighting if the original was bright/airy, and vice-versa.
2. Place images in `/public/images/` using descriptive filenames (e.g. `hero-wide.jpg`, `gallery-ambience-1.jpg`).
3. Update components where needed to point to the new filenames. The safest approach is to use `next/image` with explicitly named files.

If you want me to automatically remove or rename the original images from `/public/` I can do that, but I didn't delete them automatically to avoid accidental data loss — confirm and I will move them to `/public/originals/`.

Placeholders included:
- None (UI uses built-in decorative SVG placeholders). Add images under `/public/images/` and update components as requested.

Contact me if you'd like me to fetch suggested unsplash images and add them as remote references or download them into `/public/images/`.
