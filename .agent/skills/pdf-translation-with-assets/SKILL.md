---
name: pdf-translation-with-assets
description: Extended workflow for translating PDFs with image extraction, conversion, and re-insertion into Markdown.
---

# PDF Translation with Assets Skill

> Specialized workflow for handling document translations that require visual faithfulness.

## 1. Prerequisites
- `poppler-utils` (specifically `pdfimages` and `pdftotext`)
- `ImageMagick` (for `convert` command)

## 2. Extraction Workflow

### A. Extract Text
```bash
pdftotext -layout input.pdf output.txt
```

### B. Extract Images
```bash
mkdir -p images/
pdfimages -j input.pdf images/img
```

### C. List Mapping
To know which image belongs to which page:
```bash
pdfimages -list input.pdf > map.txt
```

## 3. Post-Processing
If images are in `.ppm`:
```bash
for f in images/*.ppm; do convert "$f" "${f%.ppm}.jpg"; done && rm images/*.ppm
```

## 4. Re-insertion
Embed images in Markdown using the mapping:
```markdown
![Page X Image](images/img-N.jpg)
```

## 5. Final Output
Convert Markdown to PDF (if requested) using `pandoc` or `livedown`.
