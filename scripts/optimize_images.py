from pathlib import Path
from PIL import Image

project_dir = Path(__file__).resolve().parent.parent
imae_path = project_dir / "src" / "assets" / "hero-book.png"

with Image.open(imae_path) as image:
  print("Размер:", image.size)
  print("Формат:", image.format)
  print("Цветовой режим:", image.mode)

  image.thumbnail((640, 640), Image.Resampling.LANCZOS)

  output_path = imae_path.with_name("hero-book-small.png")
  image.save(output_path, optimize=True)

  print("Новый размер:", image.size)
  print("Сохранено:", output_path)

