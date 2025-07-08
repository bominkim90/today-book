interface ButtonFavoriteProps {
  isbn13: string;
}

export default function ButtonFavorite({ isbn13 }: ButtonFavoriteProps) {
  function toggleFavorite() {
    console.log(isbn13);
  }

  return (
    <button onClick={toggleFavorite}>
      <span className="sr-only">찜 버튼</span>
    </button>
  );
}
