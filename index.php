<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Test Exercise</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="http://code.jquery.com/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="form.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tablesort/5.0.2/tablesort.min.js">new TableSort(document.getElementById('tbody'));</script>
  </head>
  <body>
    <form id="my_form">
    <p><input type="text" name="brand" id="brand" placeholder="Производитель"></p>
    <p><input type="text" name="model" id="model" placeholder="Наименование"></p>
    <p><input type="text" name="cost" id="cost" placeholder="Цена"></p>
    <p><input type="number" name="quantity" id="quantity" placeholder="Количество"></p>
    <p><input type="submit" value="Добавить"></p>
  </form>
  <br>
  <table name="my_table" id="my_table" border="2" cellpadding="15px" bordercolor="grey" id="table_id" label="asad">
    <thead>
      <th title="Производитель" onclick="sortByBrand()">Производитель</th>
      <th title="Наименование модели">Наименование</th>
      <th title="Цена">Цена</th>
      <th title="Количество">Количество</th>
      <th title="Id" id="id">Id</th>
    </thead>
  <tbody id="tbody" name="tbody">
  </tbody>
  </table>
  <div align="center"> <h4>Цена: <h5 id="sumCost"></h5></h4> <h4>Количество:<h5 id="sumQuantity"></h5></h4> </div>
  </body>
</html>
