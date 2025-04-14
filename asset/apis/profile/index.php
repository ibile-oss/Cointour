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
        $name = $_FILES['profile']['name'];
        $size = $_FILES['profile']['size'];
        $error = $_FILES['profile']['error'];
        $tmp_name = $_FILES['profile']['tmp_name'];
        $type = $_FILES['profile']['type'];
        $uid = $_POST['tittle'];
        $defaultProfile = 'avartar1.png';

        $Allowed = ['jpg','png','jpeg'];

        $file_ext = explode('.',$name);
        $fileReadext = strtolower(end($file_ext));
        $AllowedSize = 1000000000;

        $newName = '_c_n_t_' . '_' . time() . '.' . $fileReadext;
        $uploadIR = '../sendUpload/uploads/' . $newName;

        if(!in_array($fileReadext, $Allowed)){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'File Type Not Allowed'
            ]);
            die;
        }

        if($size > $AllowedSize){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'File Size Not Allowed'
            ]);
            die;
        }

        if($error !== 0){
            http_response_code(403);
            echo json_encode([
                'status' => 'error',
                'message' => 'Uexpected Error Occur'
            ]);
            die;
        }

        if(!move_uploaded_file($tmp_name, $uploadIR)){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Unable To Upload, Please Try Again Later'
            ]);
            die;
        }
        $sel = "SELECT * FROM register WHERE userid='$uid'";
        $q = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($q);
        $hisProfile = $fetch['bot_av'];
        $update = "UPDATE register SET bot_av='$newName' WHERE userid='$uid'";
        mysqli_query($conn,$update);

        if($hisProfile !== $defaultProfile){
            $pathFile = '../sendUpload/uploads/' . $hisProfile;
            if(is_file($pathFile)){
                unlink($pathFile);
            }
        }

        $up2 = "UPDATE fetch_refer_users SET profile_refered='$newName' WHERE person_refered_id='$uid'";
        mysqli_query($conn,$up2);

        echo json_encode([
            'status' => 'success',
            'message' => 'File Upload Successfully'
        ]);
        die;


    }catch (Exeption $th) {
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }



