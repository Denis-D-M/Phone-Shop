<?php
 $string_data = file_get_contents("array.txt");
 $serverArray = unserialize($string_data);
 echo json_encode($serverArray, JSON_FORCE_OBJECT);
?>
