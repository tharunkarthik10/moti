from PIL import Image

img = Image.open('logo.png')
width, height = img.size

# Let's crop the arrow (left side). We'll assume it's about 95 pixels wide based on typical proportions.
# We will do a smart crop by finding where the gap is.
# Iterate through columns to find the gap between the arrow and the text.
gap_start = 0
gap_end = 0
for x in range(width):
    col_has_pixels = False
    for y in range(height):
        r, g, b, a = img.getpixel((x, y))
        if a > 10:  # non-transparent
            col_has_pixels = True
            break
    
    # Simple state machine to find the gap
    if col_has_pixels:
        if gap_start > 0 and gap_end == 0:
            gap_end = x
            break # Found the text start
    else:
        if gap_start == 0 and x > 50: # Assuming arrow is at least 50px wide
            gap_start = x

if gap_start == 0 or gap_end == 0:
    # Fallback if no gap found
    gap_start = int(width * 0.4)
    gap_end = int(width * 0.4)

arrow = img.crop((0, 0, gap_start, height))
text = img.crop((gap_end, 0, width, height))

arrow.save('arrow.png')
text.save('text.png')

print(f"Original: {width}x{height}")
print(f"Arrow: {arrow.size[0]}x{height}")
print(f"Text: {text.size[0]}x{height}")
