<?php
    session_start();
    header('Content-type: application/json');
    require_once dirname(__DIR__, 3) . "/conn.php";
    if($_SERVER['REQUEST_METHOD'] !== 'POST'){
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'Only POST Method allowed'
        ]);
        die;
    }

    $data = json_decode(file_get_contents('php://input'), false);
    $email = $data->email;
    $pwd = $data->password;

    if(!$email || !$pwd){
        http_response_code(402);
        echo json_encode([
            'status' => 'error',
            'message' => 'Empty Input Detected'
        ]);
        die;
    }

    try {
        $sql = "SELECT * FROM register WHERE email='$email' LIMIT 1";
        $q = mysqli_query($conn, $sql);
        if(!mysqli_num_rows($q) >0){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Email Or Password'
            ]);
            die;
        }
        

        $fetch = mysqli_fetch_assoc($q);
        if(!password_verify($pwd, $fetch['password'])){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Password Or Email Address'
            ]);
            die;
        }

        $sel = "SELECT * FROM user_dentials WHERE email='$email' LIMIT 1";
        $qr = mysqli_query($conn,$sel);
        $userData = mysqli_fetch_assoc($qr);

        $_SESSION['uid'] = $fetch['userid'];
        $_SESSION['_AUTH_US'] = true;
        $expires = time() * 60;
        $_SESSION['uemail'] = $fetch['email'];
        $_SESSION['uphone'] = $fetch['phone'];
        $_SESSION['ufulname'] = $fetch['fname'].' '.$fetch['lname'];
        $_SESSION['ufname'] = $fetch['fname'];
        $_SESSION['ulname'] = $fetch['lname'];
        $_SESSION['walletAD'] = $userData['wallet_address'];
        $_SESSION['relink'] = $userData['refLink'];
        setcookie('___AUTH', $fetch['userid'], $expires, '/', true, false);


        http_response_code(200);
        echo json_encode([
            'status'=> 'success',    
            'message'=> "Login Successfull"
        ]);

    
        

    }catch(Exception $e) {
       http_response_code(500);
       echo json_encode([
        'status' => 'error',
        'message' => $e
       ]);
       die;
    }