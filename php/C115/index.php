<?php
    $input_line = explode(' ',fgets(STDIN));
    $sum=0;
    for ($i = 1; $i < $input_line[0]; $i++) {
         $e=(int)fgets(STDIN);
        if($e<=(int)$input_line[1]){
             $sum+=$e;
         }
    }
    echo($sum)
?>