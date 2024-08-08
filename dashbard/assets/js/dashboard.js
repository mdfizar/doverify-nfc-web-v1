// deashboard heade left =========
// var arrowContainer = document.querySelectorAll(".accordion-header")
//   arrowContainer.forEach((item) => {
//     var arrow = item.querySelector(".arrow i")
//     item.addEventListener("click", () => {
//       if(arrow.style.transform === "rotate(-180deg)") {
//          arrow.style.transform ="rotate(-180deg)";
//           console.log("red")
//       }
//       else{
//         console.log("err")
//       }
//     })
//   })



$(document).ready(function() {
  var ctx = $('#earningsChart');
  var earningsChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        label: 'Expected Earnings',
        data: [7660, 2820, 45257],
        backgroundColor: [
          '#ff0000',
          '#ff0000',
          '#ff0000'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        }
      }
    }
  });

  // Add the earnings and percentage change dynamically
  var totalEarnings = 29300;
  var percentageChange = 2.2;

  $('#totalEarnings').html(`$${totalEarnings} <span style="color: green;">▲ ${percentageChange}%</span>`);
  $('#shoesEarnings').text(`Shoes: $7660`);
  $('#gamingEarnings').text(`Gaming: $2820`);
  $('#othersEarnings').text(`Others: $45257`);
});