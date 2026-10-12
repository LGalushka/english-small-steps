from pathlib import Path
from PIL import Image

project_dir = Path(__file__).resolve().parent.parent

def optimize_image(image_path: Path, max_size: tuple[int, int]):
  output_path = image_path.with_name(
    f"{image_path.stem}-small.webp"
  )

  with Image.open(image_path) as image:
    image.thumbnail(max_size, Image.Resampling.LANCZOS)
    image.save(output_path, "WEBP", quality=85)

    print(f"{output_path.name}: {image.size}")

#для одиночного изменения
# optimize_image(project_dir /"src" / "assets" / "lesson-1.png", (1000, 1000),)

#дла измения сразу во всех
for number in range(1, 7):
  image_path = (
    project_dir / "src" / "assets" / f"lesson-{number}.png"
  )
  optimize_image(image_path, (1000, 1000))