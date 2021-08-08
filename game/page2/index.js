/*
 * assuming the cost of plywood is $10/foot
 * Cost per crate = ( 10 * 2lw + 2hw + 2lh)
 * Revenue = lwh * 15
 */


//document.getElementById("v4_6").addEventListener("submit", handle_submit);

function handle_submit() {
  const length = document.getElementById("length").value;
  const width = document.getElementById("width").value;

  console.log(width);
  console.log(length);
  const height = 20; // hard coded to 20ft
  const time_per_crate = 1; // hours

  const cost_per_crate = 10 * ( 2*length*width + 2*length*height + 2*width*height);
  const revenue_per_crate = (length * width * height) * 36; // profit per crate 
  const profit_per_crate_time = (revenue_per_crate - cost_per_crate) / (time_per_crate);

  document.getElementById("profit_per_crate_time").innerHTML = profit_per_crate_time;
  document.getElementById("revenue_per_crate").innerHTML = revenue_per_crate;
  document.getElementById("profit_per_crate").innerHTML = profit_per_crate;

  console.log("profit_per_crate_time " + profit_per_crate_time);
}
