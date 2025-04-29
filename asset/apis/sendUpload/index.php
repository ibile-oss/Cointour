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

    $uploadDir = 'uploads/';
    if(!is_dir($uploadDir)){
        mkdir($uploadDir, 0777, true);
    }
    

    try {
        if(isset($_FILES['files']) && !empty($_FILES['files']['name'][0])){
            $files = $_FILES['files'];

            $shot1 = $files['name'][0];
            $shot2 = $files['name'][1];
            $shot3 = $files['name'][2];
            $shot4 = $files['name'][3];
            $shot5 = $files['name'][4];

            $uid = $_POST['tittle'];

            foreach ($files['name'] as $key => $filename){
                $tempath = $files['tmp_name'][$key];
    

                $filext = explode('.',$filename);
                $fileExNsion = strtolower(end($filext));
                $AllowedSize = 1000000000;
                $allowed = ['png','jpg','jpeg'];

                $targetpath = $uploadDir . $filename;

    
                if(move_uploaded_file($tempath, $targetpath)){
                    $sel = "SELECT * FROM user_screenshot WHERE userid='$uid'";
                    $query = mysqli_query($conn,$sel);
                    $fetch = mysqli_fetch_assoc($query);
                    if(mysqli_num_rows($query) >0){
                        $old1 = $fetch['shot1'];
                        $old2 = $fetch['shot2'];
                        $old3 = $fetch['shot3'];
                        $old4 = $fetch['shot4'];
                        $old5 = $fetch['shot5'];

                        $update = "UPDATE user_screenshot SET shot1='$shot1', shot2='$shot2', shot3='$shot3',
                        shot4='$shot4', shot5='$shot5' WHERE userid='$uid'";
                        $q = mysqli_query($conn,$update);
                    }else{
                        $ins = "INSERT INTO user_screenshot (userid, shot1, shot2, shot3, shot4, shot5)
                        VALUES('$uid','$shot1','$shot2','$shot3','$shot4','$shot5')";
                        $q = mysqli_query($conn,$ins);
                    }

                    // $pathFile1 = $uploadDir . $old1;
                    // $pathFile2 = $uploadDir . $old2;
                    // $pathFile3 = $uploadDir . $old3;
                    // $pathFile4 = $uploadDir . $old4;
                    // $pathFile5 = $uploadDir . $old5;
                    // if(is_file($pathFile1)){
                    //     unlink($pathFile1);
                    // }if(is_file($pathFile2)){
                    //     unlink($pathFile2);
                    // } if(is_file($pathFile3)){
                    //     unlink($pathFile3);
                    // } if(is_file($pathFile4)){
                    //     unlink($pathFile4);
                    // } if(is_file($pathFile5)){
                    //     unlink($pathFile5);
                    // }

                    
                }
                else{
                    echo json_encode([
                        'status' => 'error',
                        'message' => 'Failed To Upload'
                    ]);
                    die;
                }
            }

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Uploaded, Reload Page To View'
            ]);
            die;
        }
        else{
            echo json_encode([
                'status' => 'error',
                'message' => 'No File Selected'
            ]);
            die;
        }

        
    }catch (Exception $th) {
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

?>




    
    
