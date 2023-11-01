const select = document.querySelectorAll("select");
console.log(select);

const arr = [];
const newArr = [];

function addCard() {
  let x = arr.length + 1;
  if (newArr.length != 0) {
    x = newArr[0];
    newArr.splice(0, 1);
  }

  arr.push({
    id: x,
    f: select[0].value,
    s: select[1].value,
    t: select[2].value,
    d: select[3].value,
    s: select[4].value,
  });

  console.log("AddCard newArr", newArr);
  console.log("AddCard arr", arr);

  seeCard();
}

function removeCard(arrId) {
  console.log(arrId);
  const index = arr.findIndex((item) => item.id == arrId);
  arr.splice(index, 1);

  newArr.push(arrId);

  console.log("Removdaki arr", arr);
  console.log("Removdaki newArr", newArr);
  seeCard();
}

function seeCard() {
  let metbext = document.getElementById("metbext");
  metbext.innerHTML = "";
  let kod = "";
  for (let i = 0; i < arr.length; i++) {
    kod += `
        <div id="c${arr[i].id}"  class="shadow-lg border border-2 w-25 p-3 mb-5">
        <h3>Masa <span>${arr[i].id}</span></h3>
        <ul>
            <li>Yemekler: <span>${arr[i].f}</span></li>
            <li>Salatlar: <span>${arr[i].s}</span></li>
            <li>Tursular: <span>${arr[i].t}</span></li>
            <li>Ickiler: <span>${arr[i].d}</span></li>
            <li>Souslar: <span>${arr[i].s}</span></li>
        </ul>
        <button class="btn btn-primary text-white px-4 py-2" onclick="removeCard(${arr[i].id})">Sifaris icra olundu</button>
        </div>`;
  }
  metbext.innerHTML = kod;
}
