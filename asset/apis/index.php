<?php
    require_once dirname(__DIR__, 2) ."/conn.php";
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
        $uid =  $data->uid;
        
        
        $sel = "SELECT * FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$sel);
        $fetch = mysqli_fetch_assoc($q);

        $Ref = $fetch['referrals'];

        echo json_encode([
            'status' => 'success',
            'Referrals' => $Ref
        ]);
        die;
        

    }catch (Exeption $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }