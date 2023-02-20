import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
  return `
    <div class="row d-flex align-items-center">
    <div class="col-11 searchbar-div">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" class="form-control rounded-pill search-input" placeholder="Search Tuiter"
            aria-label="search" />
    </div>
    <div class="col-1"><i class="fa-solid fa-gear fs-4"></i></div>
</div>
<ul class="nav nav-tabs mt-2 mb-2">
    <li class="nav-item">
        <a href="#" class="nav-link active">For you</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Trending</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">News</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Sports</a>
    </li>
    <li class="nav-item d-none d-md-block">
        <a href="#" class="nav-link">Entertainment</a>
    </li>
</ul>
<div class="banner-div">
<img src="../spaceX.jpeg" alt="SpaceX" class="img-fluid" />
<div class="banner-label fs-2 fw-bold">
    SpaceX's Starship
</div>
</div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
