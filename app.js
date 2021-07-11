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
  const orderedList = document.getElementById("list");
  orderedList.innerHTML = '';
  getMonth.innerHTML = e.target.value;
  monthsOfYear.forEach((m) => {
    if (m.month == getMonth.textContent) {
      for (let i = 0; i < m.days; i++) {
        const li = document.createElement("li");
        orderedList.appendChild(li);
        const input = document.createElement("input");
        input.type = 'number';
        input.min = '0';
        li.appendChild(input); 
        // const button = document.createElement('button');
        // button.innerHTML = 'Edit';
        // li.appendChild(button);
        // button.addEventListener('click', () => {
        //   if (button.innerHTML == 'Edit') {
        //     button.innerHTML = 'Save';
        //   } else if (button.innerHTML == 'Save') {
        //     button.innerHTML = 'Edit';
        //   }
        // })
      } 
    }
  });
  const tipInput = document.querySelectorAll('input');
  tipInput.forEach( tip => { tip.addEventListener('click', () => {tip.value = prompt('Enter tip amount')})})
});


        