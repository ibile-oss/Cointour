<?php
    require_once dirname(__DIR__, 3) ."/conn.php";
    if($_SERVER['REQUEST_METHOD'] !== 'POST'){
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'Only POST Method allowed'
        ]);
        die;
    }

    try {
        $data = json_decode(file_get_contents('php://input'), false);

        $lvl = $data->lvl;
        $uid = $data->id;
        $lvlClk = 'clk';
        $str = $data->str;

        
        $tonum = (int) $str;
        for ($i=0; $i < $tonum; $i++) { 
            $ins = "INSERT INTO queeny_str(userid,star)VALUES('$uid','$str')";
            $quy = mysqli_query($conn,$ins);
        }


        if($lvl == 1){
            $ins = "UPDATE lvlclick SET lvl1='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$ins);
        }else if($lvl == 2){
            $upd = "UPDATE lvlclick SET lvl2='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 3){
            $upd = "UPDATE lvlclick SET lvl3='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 4){
            $upd = "UPDATE lvlclick SET lvl4='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 5){
            $upd = "UPDATE lvlclick SET lvl5='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 6){
            $upd = "UPDATE lvlclick SET lvl6='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 7){
            $upd = "UPDATE lvlclick SET lvl7='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 8){
            $upd = "UPDATE lvlclick SET lvl8='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 9){
            $upd = "UPDATE lvlclick SET lvl9='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }else if($lvl == 10){
            $upd = "UPDATE lvlclick SET lvl10='$lvlClk' WHERE userid='$uid'";
            $query = mysqli_query($conn,$upd);
        }



    }catch (Exception $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }