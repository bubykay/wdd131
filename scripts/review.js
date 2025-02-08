const REVIEWED = "reviewed";
const reviewCount = Number(localStorage.getItem(REVIEWED));

if (!reviewCount) {
  localStorage.setItem(REVIEWED, "1");
} else {
  localStorage.setItem(REVIEWED, String(reviewCount + 1));
}
