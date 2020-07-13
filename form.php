<?php
 $string_data = file_get_contents("array.txt");
 $serverArray = unserialize($string_data);
 $id = htmlentities(file_get_contents("id.txt"));
 $array = $_POST;
 $serverArray[] = $array;
 $fd = fopen("info.txt", 'a+');

 $brand = current($array);
 fwrite($fd, $id . " :: " . $brand);

 $model = next($array);
 fwrite($fd, " :: " . $model);

 $cost = next($array);
 fwrite($fd, " :: " . $cost);

 $quantity = next($array);
 fwrite($fd, " :: " . $quantity . " ");

 $fd = fopen("id.txt", 'w+');
 fwrite($fd, ++$id);
 fclose($fd);
 $string_data = serialize($serverArray);
 file_put_contents("array.txt", $string_data);
 echo json_encode($serverArray, JSON_FORCE_OBJECT);
?>
