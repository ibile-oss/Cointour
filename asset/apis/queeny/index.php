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

        $uid = $data->uid;
        $unme = $data->unme;
        $balance = $data->dataIns;
        $mail_b = 100;

        $select = "SELECT userid, user_name, balance FROM queeny_dentials WHERE userid='$uid'";
        $query = mysqli_query($conn,$select);
        if(!mysqli_num_rows($query) >0){
            $in = "INSERT INTO queeny_dentials(userid,user_name,balance)
            VALUES('$uid','$unme','$mail_b')";
            mysqli_query($conn,$in);
        }
        else{
            $upd = "UPDATE queeny_dentials SET balance='$balance' WHERE userid='$uid'";
            $q = mysqli_query($conn,$upd);
            $fetch = mysqli_fetch_assoc($query);
            $curentBalance = $fetch['balance'];

            echo json_encode([
                'status' => 'success',
                'message' => $curentBalance
            ]);
            die;
        }

        
        
    } catch (Exception $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }