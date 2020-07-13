<?php
 $string_data = file_get_contents("array.txt");
 $serverArray = unserialize($string_data);
 unset($serverArray[array_key_first($_POST)]);
 $string_data = serialize($serverArray);
 file_put_contents("array.txt", $string_data);
 echo json_encode($serverArray, JSON_FORCE_OBJECT);
?>
