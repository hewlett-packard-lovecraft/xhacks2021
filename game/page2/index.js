function handle_submit() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;

  switch (document.getElementById("supplier").value) {
    case "richmond":
      document.getElementById("sscore").innerHTML = 5;
      break;
    case "windsor":
      document.getElementById("sscore").innerHTML = 7;
      break;
    case "smith":
      document.getElementById("sscore").innerHTML = 10;
      break;
  }

  console.log(width);
  console.log(length);
  const height = 20; // hard coded to 20ft
  const time_per_crate = length * width * 0.2;

  const cost_per_crate =
    10 * (2 * length * width + 2 * length * height + 2 * width * height);
  const revenue_per_crate = length * width * height * 36; // profit per crate
  const profit_per_crate_time =
    (revenue_per_crate - cost_per_crate) / time_per_crate;
  const profit_per_crate = revenue_per_crate - cost_per_crate;

  document.getElementById("profit_per_crate_time").innerHTML =
    profit_per_crate_time;
  document.getElementById("revenue_per_crate").innerHTML = revenue_per_crate;
  document.getElementById("profit_per_crate").innerHTML = profit_per_crate;
  return false; // needs to return false or else it reloads the page
}

function validate(e) {
  if (e.value <= 0) {
    alert("Values must be greater than zero");
  }
  e.preventDefault();
  return false;
}

function change_page() {
  window.location.replace("../page3/index.html");
}
