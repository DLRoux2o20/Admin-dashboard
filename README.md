Lessons:

1. Use width: 100%; on body instead of width: 100vw; so that content does not go under scrollbar.
2. Use a negative spread radius value on box shadow that is the same number as the blur radius for a shadow to only show on one axis.
3. If an anchor tag is used on icons or something else that causes layout issues, then set the line-height on the anchor tag to 0.
4. clamp() can be used to define grid rows and columns wit vw or vh as a value, but not with fr as a value.