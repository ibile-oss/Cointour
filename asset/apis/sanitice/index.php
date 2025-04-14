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

    $data = json_decode(file_get_contents('php://input'), false);
    $tube = $data->youtube;
    $face = $data->facebook;
    $ins = $data->instagram;
    $tik = $data->tiktok;
    $twit = $data->twitter;
    $user_id = $data->uid;
    $us_name = $data->ufnme;

    try {
        if(!$tube || !$face || !$ins || !$tik || !$twit){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'All Input Are Required'
            ]);
            die;
        }

        $sel = "SELECT userid,us_nme,you_link,ins_link,twit_link,face_link,tik_blink FROM user_on_media
        WHERE userid='$user_id' LIMIT 1";
        $q = mysqli_query($conn,$sel);
        if(!mysqli_num_rows($q) >0){
            $ins = "INSERT INTO user_on_media (userid,us_nme,you_link,ins_link,twit_link,face_link,tik_blink)
            VALUES('$user_id','$us_name','$tube','$ins','$twit','$face','$tik')";
            mysqli_query($conn,$ins);
        }else{
            $update = "UPDATE user_on_media SET us_nme='$us_name', you_link='$tube',
            ins_link='$ins', twit_link='$twit', face_link='$face', tik_blink='$tik' WHERE userid='$user_id'";
            mysqli_query($conn,$update);
        }

        http_response_code(200);
        echo json_encode([
            'status' => 'success',
            'message' => 'Successfully Pushed',
            'response' => ''
        ]);
        die;

    } catch (Exception $e){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $e
        ]);
        die;
    }