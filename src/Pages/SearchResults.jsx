import { useSelector } from "react-redux";
import SearchResultCard from "../Components/SearchResultCard/SearchResultCard";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const searchResults = useSelector((store) => store.search.searchResults);
  console.log(searchResults);
  return (
    <section>
      <div className="mx-4 my-1 ">
        {searchResults?.map((result) => {
          return (
            <Link key={result.id} to={`/watch?v=${result?.id?.videoId}`}>
              <SearchResultCard info={result} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SearchResults;
