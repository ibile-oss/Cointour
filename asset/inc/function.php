<?php
    define('__Root__','http://localhost//cointour/');


    function random_nums($length){
        $text = "";
        if($length < 5){
            $length = 5;
        }
    
        $len = rand(4,$length);
        for ($i=0; $i < $len; $i++) { 
           $text .= rand(0,9);
        }
    
        return $text;
    }
?>