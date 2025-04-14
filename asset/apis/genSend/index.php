<?php
    session_start();
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

        $num = $data->params;
        $uid = $data->uid;
        $claim = 'true';

        if($num == 5){
            $ins = "UPDATE claimclick SET clk5='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 10){
            $ins = "UPDATE claimclick SET clk10='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 15){
            $ins = "UPDATE claimclick SET clk15='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 20){
            $ins = "UPDATE claimclick SET clk20='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 25){
            $ins = "UPDATE claimclick SET clk25='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 30){
            $ins = "UPDATE claimclick SET clk30='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 35){
            $ins = "UPDATE claimclick SET clk35='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 40){
            $ins = "UPDATE claimclick SET clk40='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }else if($num == 45){
            $ins = "UPDATE claimclick SET clk45='$claim' WHERE userid='$uid'";
            $q = mysqli_query($conn,$ins);
        }

    }catch(Exeption $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }