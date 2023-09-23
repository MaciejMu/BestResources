type Props = {
  query: string;
  category: string;
};

const Header = ({ query, category }: Props) => {
  if (query && category) {
    return (
      <h2 className="heading3 self-start text-white-800">
        Search results for "{query}" in{" "}
        <span className="capitalize">{category}</span>
      </h2>
    );
  }

  if (query) {
    return (
      <h2 className="heading3 self-start text-white-800">
        Search results for "{query}"
      </h2>
    );
  }

  if (category) {
    return (
      <h2 className="heading3 self-start text-white-800 capitalize">
        {category}
      </h2>
    );
  }
  return <h2 className="heading3 self-start text-white-800">No Results</h2>;
};

export default Header;
