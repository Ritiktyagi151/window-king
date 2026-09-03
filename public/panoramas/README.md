# Virtual 360 Showroom Tour Panoramas

Place the showroom panorama images for the 360 degree viewer in this folder.

Required filenames used by the website:

- `hotel-room.jpg`

Important image requirements:

- Images must be equirectangular panoramas.
- Aspect ratio must be 2:1, for example `4000x2000px`, `6000x3000px`, or similar.
- Normal room photos will not render correctly in a 360 degree viewer.
- JPG or PNG files are supported, but compressed JPG is recommended for faster loading.
- Keep filenames exactly as listed above, or update the `rooms` array in `components/VirtualShowroomTour.tsx`.

Until these files are added, the tour modal will show a graceful "Panorama Not Found" message instead of a broken image.
