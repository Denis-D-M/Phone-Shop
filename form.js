$(document).ready(function() {
  $.ajax({
    url: "reload.php",
    dataType: 'json'
  }).done(function(data) {
    let arr = data;
    let sumCost = 0;
    let sumQuantity = 0;
    for(let i in arr) {
            let table = document.getElementById("my_table").getElementsByTagName('tbody') [0];
            let newRow = table.insertRow(0);
            let cel1 = newRow.insertCell(0);
            let cel2 = newRow.insertCell(1);
            let cel3 = newRow.insertCell(2);
            let cel4 = newRow.insertCell(3);
            let cel5 = newRow.insertCell(4);

            cel1.innerHTML = arr[i].brand;
            cel2.innerHTML = arr[i].model;
            cel3.innerHTML = arr[i].cost;
            cel4.innerHTML = arr[i].quantity;
            cel5.innerHTML = i;
            cel5.style.display = "none";
            let myTitle = "Производитель - " + cel1.textContent + "\n Наименование - " + cel2.textContent + "\n Цена - " + cel3.textContent + "\n Количество - " + cel4.textContent;
            $(cel1).attr('title', myTitle);
            $(cel2).attr('title', myTitle);
            $(cel3).attr('title', myTitle);
            $(cel4).attr('title', myTitle);
            sumCost += Number(cel3.textContent);
            sumQuantity += Number(cel4.textContent);
          }
    console.log("Данные отображены");
    document.getElementById("sumCost").textContent = sumCost;
    document.getElementById("sumQuantity").textContent = sumQuantity
  });

  $('form').submit(function() {
    let myTable = document.getElementById("my_table");
    let rowCount = myTable.rows.length;
    for (let x=rowCount-1; x>0; x--) {
      myTable.deleteRow(x);
}
        $.ajax({
          type: "POST",
          url: "form.php",
          data: $(this).serialize(),
          dataType: 'json'
        }).done(function(data) {
          let arr = data;
          let sumCost = 0;
          let sumQuantity = 0;
          for(let i in arr) {
                  let table = document.getElementsByName('my_table') [0];
                  let newRow = table.insertRow(1);
                  let cel1 = newRow.insertCell(0);
                  let cel2 = newRow.insertCell(1);
                  let cel3 = newRow.insertCell(2);
                  let cel4 = newRow.insertCell(3);
                  let cel5 = newRow.insertCell(4);


                  cel1.innerHTML = arr[i].brand;
                  cel2.innerHTML = arr[i].model;
                  cel3.innerHTML = arr[i].cost;
                  cel4.innerHTML = arr[i].quantity;
                  cel5.innerHTML = i;
                  cel5.style.display = "none";
                  sumCost += Number(cel3.textContent);
                  sumQuantity += Number(cel4.textContent);
                }
          console.log("Запись добавлена");
          jQuery('form')[0].reset();
          document.getElementById("sumCost").textContent = sumCost;
          document.getElementById("sumQuantity").textContent = sumQuantity;
        });
        return false;
      });

  $('tbody').on('click', 'tr', function(){
         let id = this.cells[4].textContent;
         let myTable = document.getElementById("my_table");
         let rowCount = myTable.rows.length;
         for (let x=rowCount-1; x>0; x--) {
           myTable.deleteRow(x);
     }
         $.ajax({
           type: "POST",
           url: "delete.php",
           data: id,
           dataType: "json"
         }).done(function(data) {
           let arr = data;
           let sumCost = 0;
           let sumQuantity = 0;
           for(var i in arr) {
                   let table = document.getElementsByName('my_table') [0];
                   let newRow = table.insertRow(1);
                   let cel1 = newRow.insertCell(0);
                   let cel2 = newRow.insertCell(1);
                   let cel3 = newRow.insertCell(2);
                   let cel4 = newRow.insertCell(3);
                   let cel5 = newRow.insertCell(4);

                   cel1.innerHTML = arr[i].brand;
                   cel2.innerHTML = arr[i].model;
                   cel3.innerHTML = arr[i].cost;
                   cel4.innerHTML = arr[i].quantity;
                   cel5.innerHTML = i;
                   cel5.style.display = "none";
                   sumCost += Number(cel3.textContent);
                   sumQuantity += Number(cel4.textContent);
                 }
           console.log(arr);
           document.getElementById("sumCost").textContent = sumCost;
           document.getElementById("sumQuantity").textContent = sumQuantity;
         });
      });


      

});
