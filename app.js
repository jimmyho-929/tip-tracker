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

/******
Creating 2 divs
 */ 
 

monthsOfYear.forEach( (m)=> { 
  if (m.month === e.target.value) {
     const wrapper = document.getElementById("wrapper");
      wrapper.innerHTML = `<span id='tips'>Total Tip: 0</span>`;
      for (let i = 0; i < m.days; i++) {
        const div = document.createElement("div");
        const span = document.getElementById("tips");
        wrapper.insertBefore(div, span);
        div.innerHTML = `${i+1}`;
        div.className = "date";
        const tipBox = document.createElement("div");
        div.appendChild(tipBox)
        tipBox.innerHTML = 'Test'
        tipBox.className = "tip-box"
    }
  }
})

  /******
   Creating list item
   */

  // const orderedList = document.getElementById("list");
  // orderedList.innerHTML = "";
  // 
  // monthsOfYear.forEach((m) => {
  //   if (m.month == getMonth.textContent) {
  //     for (let i = 0; i < m.days; i++) {
        // const li = document.createElement("li");
        // orderedList.appendChild(li);
        // const input = document.createElement("input");
        // input.type = "number";
        // input.min = "0";
        // li.appendChild(input);
        // document.getElementById('tips').innerHTML = `Total Tip: 0`
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
    //   }
    // }
  });
  const tipInput = document.querySelectorAll("input");
  const tipArray = []
  let totalTip = 0;
  tipInput.forEach((tip) => {
    tip.addEventListener("click", () => {
      tip.value = prompt("Enter tip amount");
      tipArray.push(parseInt(tip.value)); 
      tipArray.forEach( (tip) => {  
        totalTip += tip;
        console.log(tipArray, totalTip)
        document.getElementById('tips').innerHTML = `Total Tip: ${totalTip}`
        
      })
      
    });
  
  });
  
  
// });
