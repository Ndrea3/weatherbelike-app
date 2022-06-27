export default function Search() {
  return (
    <div className="weather-app">
      <form id="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
