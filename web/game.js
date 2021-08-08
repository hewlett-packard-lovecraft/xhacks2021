function handle_submit() {
  var cost_factor;
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;

  switch (document.getElementById("supplier").value) {
    case "richmond":
      document.getElementById("sscore").innerHTML = 5;
      cost_factor = 2.2
      break;
    case "windsor":
      document.getElementById("sscore").innerHTML = 7;
      cost_factor = 2.4
      break;
    case "smith":
      document.getElementById("sscore").innerHTML = 10;
      cost_factor = 2.9
      break;
  }

  console.log(width);
  console.log(length);
  const height = 5; // hard coded to 5ft
  const time_per_crate = (2 * (2 * length + 2 * width) + 2 * (2 * length + 2 * height) + 2 * (2 * width + 2 * height)) / 4 + 5;

  const cost_per_crate = cost_factor * (2 * length * width + 2 * length * height + 2 * width * height);

  const revenue_per_crate = ((length * width * height) * (length * width * height)) * -0.0016 + 4 * (length * width * height); // profit per crate

  const profit_per_crate = revenue_per_crate - cost_per_crate;

  const profit_per_crate_time =
    (profit_per_crate) / time_per_crate;

  document.getElementById("profit_per_crate_time").innerHTML =
    profit_per_crate_time.toFixed(2);
  document.getElementById("revenue_per_crate").innerHTML = revenue_per_crate.toFixed(2);
  document.getElementById("profit_per_crate").innerHTML = profit_per_crate.toFixed(2);
  document.getElementById("cost_per_crate").innerHTML = cost_per_crate.toFixed(2);
  return false; // needs to return false or else it reloads the page
}

function validate(e) {
  if (e.value <= 0) {
    setTimeout(() => {
      alert("Values must be greater than zero");
    }, 1); // alert is now async so it doesn't pause the script
  }
  e.preventDefault();
  return false;
}

function change_page() {
  window.location.replace("../page3/index.html");
}
