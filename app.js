const monthsOfYear = [
  {
    month: "January",
    days: 31,
  },
  {
    month: "February",
    days: 28,
  },
  {
    month: "March",
    days: 31,
  },
  {
    month: "April",
    days: 30,
  },
  {
    month: "May",
    days: 31,
  },
  {
    month: "June",
    days: 30,
  },
  {
    month: "July",
    days: 31,
  },
  {
    month: "August",
    days: 31,
  },
  {
    month: "September",
    days: 30,
  },
  {
    month: "October",
    days: 31,
  },
  {
    month: "November",
    days: 30,
  },
  {
    month: "December",
    days: 31,
  },
];

const getMonth = document.querySelector("h1");
const month = document.querySelector("select");

month.addEventListener("change", (e) => {
  getMonth.innerHTML = e.target.value;
  document.getElementById(
    "tips"
  ).innerHTML = `Total Tip: <span style="font-weight:bold">0</span>`

  monthsOfYear.forEach((m) => {
    if (m.month === e.target.value) {
      const wrapper = document.getElementById("wrapper");
      wrapper.innerHTML = ``;
      for (let i = 0; i < m.days; i++) {
        const div = document.createElement("div");
        wrapper.appendChild(div);
        div.innerHTML = `${i + 1}`;
        div.className = "date";
        const tipBox = document.createElement("div");
        div.appendChild(tipBox);
        tipBox.innerHTML = "XX";
        tipBox.className = "tip-box";
      }
      const tipInput = [...document.getElementsByClassName("tip-box")];
      const tipArray = [];
      let totalTip = 0;
      

      tipInput.forEach((tip) => {
        tip.addEventListener("click", () => {
          tip.value = prompt("Enter tip amount");
          tip.innerHTML = tip.value;
          tip.style.color = 'black';
          tipArray.push(parseInt(tip.value)); 
          totalTip = 0;
          tipArray.forEach((tip) => {
            totalTip += tip;
            document.getElementById(
              "tips"
            ).innerHTML = `Total Tip: <span style="font-weight:bold">${totalTip}</span>`;
              
            let myChart = document.getElementById('myChart').getContext('2d');
          let barChart = new Chart(myChart, {
            type: 'bar',
            data: {
              labels: ['Tips'],
              datasets: [{
                label: 'Tip',
                data: [totalTip]
              }]
            },
            options: {}
          }) 

          // barChart.destroy();
        

        // barChart = new Chart(myChart, {
        //   type: 'bar',
        //   data: {
        //     labels: ['Tips'],
        //     datasets: [{
        //       label: 'Tip',
        //       data: [totalTip]
        //     }]
        //   },
        //   options: {}
        // }) 
            
          
          });
          
        });
        
      });
    }
  });
});



