async function dataShow() {
  let api = "http://localhost:3000/cardata";
  let Table =
    `<table border='1'><tr><th>Rollno</th><th>Name</th><th>City</th><th>Fees</th></tr>`;

  const myObj = await fetch(api);
  //console.log(myObj);
  const Data = await myObj.json();
  console.log(Data);
  Data.map((item) => {
    Table += `<tr>
                         <td> ${item.carno} </td>
                         <td> ${item.name} </td>
                         <td> ${item.city} </td>
                         <td> ${item.prices} </td>
                       </tr> `;
  });
  Table += `</table>`  ;
  document.getElementById("demoDisplay").innerHTML = Table;

}

dataShow()
