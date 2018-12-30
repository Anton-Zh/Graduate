function GoogleReadyHandlerozqrctmv() {
  var infoWindow, map = new google.maps.Map(document.getElementById("mapozqrctmv"), {
  center: {lat: 55.7583371046516, lng: 37.667954673812574},
  zoom: 12,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
  mapTypeId: "roadmap"
  });
  infoWindow = new google.maps.InfoWindow();
  (new google.maps.Marker({
  position: {lat: 55.785215944904884, lng: 37.665185594298464},
  map: map,
  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAABtklEQVRoge2Zu7HDIBBFtxEt4wrciqtwCepABTgCghcrdQEuQg04V+4C7gtsPB5/+El8pNGd2VCCO2dZFiDatGlZ2insWaJ9jZ3CvvS8vMQaR1Y4s8LICvgRIytcWKItPd8PscaxURgsk/8ajcJQjaFG4y/UwHsIjb6oCVa4TDXxEpc1mChjZo50ssQ5i4lHZQqZ2OioYp+RowD4VKdGYRAS3fu3QqLzrG7XpCZ8aPhUIK/UTEmF75vdLGXUw0y6hW/L9UZhCP2fI81uKTwQEZGVxpc14ZKQ6KxrTeMwvwmJ1jZo9H9zr5OERq6bkagB15JarkEXs9iJ1lV+17EhNhoHx+CztSjJ0sqIPc4hU5vGmDQNlg+Vt6izjSdKdjrMR+NpxLGnTIrctyox1z8+aZjVBFEiKhKn7EaIZqeSn4YRS5wWT+NpJrS0fo907Yi3kRmoFL8yNZpI5VbNc8MUKtXQIHo86ijcYoxUQ8NIaPQRRsrcwNsUQyV5qx6rQCr10TAKafGrpWHEngev0vN0yotKLQ+gLtmoLIKGkfUdZSk0jH5UsHorlU0s0QqNXmj0iyOxadNd/xy7kjKDeZr0AAAAAElFTkSuQmCC",
  title: decodeURIComponent("%D0%9C%D0%BE%D0%B5%20%D0%BC%D0%B5%D1%81%D1%82%D0%BE%D0%BD%D0%B0%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5")
  }));
  return map;
}