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

    $firstName = $_POST['name1'] ?? null;
    $lastName = $_POST['name2'] ?? null;
    $email = $_POST['email'] ?? null;
    $phone = $_POST['phone'] ?? null;
    $password = $_POST['password'] ?? null;
    $cnpassword = $_POST['cnpassword'] ?? null;
    $ref = $_POST['ref'];
    $referrals = 0;
    $profile = 'avartar1.png';

    if(!$firstName || !$lastName || !$email || !$phone || !$password || !$cnpassword){
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'All Input Are Required'
        ]);
        die;
    }

    try {

        if(is_numeric($firstName) || is_numeric($lastName)){
            http_response_code(403);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Name, Name Can\'t Be In Numeric Form'
            ]);
            die;
        }

        if(!is_numeric($phone)){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Phone, Phone Should Expect Numbers'
            ]);
            die;
        }

        if(strlen($phone) > 16){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Phone, Phone Is Too Long'
            ]);
            die;
        }

        if(!preg_match('/^[a-zA-Z ]*$/', $lastName)){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Sorry Invalid Name Character'
            ]);
            die;
        }

        if(!preg_match('/^[a-zA-Z ]*$/', $firstName)){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Sorry Invalid Name Character'
            ]);
            die;
        }

        if(!is_numeric($phone)){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Phone, Phone Should Expect Numbers'
            ]);
            die;
        }

        if(strlen($password) > 8){
            http_response_code(403);
            echo json_encode([
                'status' => 'error',
                'message' => 'Password Too long'
            ]);
            die;
        }

        if($password !== $cnpassword){
            http_response_code(401);
            echo json_encode([
                'status' => 'error',
                'message' => 'Incorrect Password'
            ]);
            die;
        }

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Invalid Email Address'
            ]);
            die;
        }

        $sql = "SELECT * FROM register WHERE phone= '$phone'";
        $stmt = $conn->query($sql);
        if($stmt->num_rows >0){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Phone Already Exist'
            ]);
            die;
        }

        $sql = "SELECT * FROM register WHERE email='$email'";
        $stmt = $conn->query($sql);
        if($stmt->num_rows > 0){
            http_response_code(402);
            echo json_encode([
                'status' => 'error',
                'message' => 'Email Already Exist'
            ]);
            die;
        }

        require dirname(__DIR__, 2) .'/inc/function.php';
        $usid = random_nums(20);
        $walletAd = generateWalletAddress();
        $reflink = uniqid('ref', true);
        $date = date('Y-m-d');


        $encryptpwd = password_hash($password, PASSWORD_DEFAULT);
        $ins = "INSERT INTO register (userid, fname, lname, email, phone, password, registered_at, bot_av)
        VALUES('$usid','$firstName','$lastName','$email','$phone','$encryptpwd','$date','$profile')";
        mysqli_query($conn,$ins);

        $ins1 = "INSERT INTO user_dentials (userid, email, wallet_address, refLink, referrals)
        VALUES('$usid', '$email', '$walletAd','$reflink', '$referrals')";
        mysqli_query($conn,$ins1);

        $i = "INSERT INTO claimclick(userid)VALUES('$usid')";
        mysqli_query($conn,$i);

        $w = "INSERT INTO lvlclick(userid)VALUES('$usid')";
        mysqli_query($conn,$w);

        // $dalyReward = "INSERT INTO daily_reward(userid)VALUES('$usid')";
        // mysqli_query($conn,$dalyReward);

        // $dalycombo = "INSERT INTO daly_combo(userid)VALUES('$usid')";
        // mysqli_query($conn,$dalycombo);

        $taskDon = "INSERT INTO taskclaim(userid)VALUES('$usid')";
        mysqli_query($conn,$taskDon);

        if($ref !== ''){
            $sel = "SELECT * FROM user_dentials WHERE refLink='$ref'";
            $q = mysqli_query($conn,$sel);
    
            if(mysqli_num_rows($q) >0){
                $fetch = mysqli_fetch_assoc($q);
                $refid = $fetch['userid'];
    
    
                $totalRef = $fetch['referrals'] + 1;
                $update = "UPDATE user_dentials SET referrals='$totalRef' WHERE userid='$refid'";
                mysqli_query($conn,$update);
    
                $hisallname = $firstName.' '.$lastName;
                $select = "INSERT INTO fetch_refer_users (referralink, person_refered_id, person_refered, profile_refered)
                VALUES('$ref','$usid','$hisallname','$profile')";
                $q = mysqli_query($conn,$select);
            }
        }


       
        

        echo mysqli_error($conn);
        http_response_code(200);
        echo json_encode([
            'status' => true,
            'message' => 'Registration successfully'
        ]);
        die;

    } catch (Exception $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }


