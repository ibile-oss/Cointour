<?php
    require_once dirname(__DIR__, 2) . "/inc/pdo.php";
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

        // // $sql = "SELECT COUNT(*) FROM register WHERE phone= :phone";
        // // $stmt = $pdo->prepare($sql);
        // // $stmt->$sql->bindParam(':phone', $phone);
        // // $stmt = $stmt->execute();
        // // $user = $stmt->fetchColumn();
        // // $sql = "SELECT COUNT(*) FROM register WHERE phone= ?";
        // // $stmt = mysqli_init($pdo);
        // // mysqli_stmt_prepare($sql);
        // // mysqli_stmt_bind_params($stmt, 's', $phone);
        // // $ex = mysqli_stmt_execute($stmt);

        // if($user >0){
        //     http_response_code(403);
        //     echo json_encode([
        //         'status' => 'error', 
        //         'message' => 'Phone Already Exist'
        //     ]);
        //     die;
        // }
        // echo $sql;

        $encryptpwd = password_hash($password, PASSWORD_DEFAULT);
        require dirname(__DIR__) .'/inc/function.php';
        $usid = random_nums(20);

        $sql = $pdo->prepare("INSERT INTO register(userid,fname,lname,email,
        phone,password,registered_at,bot_av)
        VALUE(:usn, :fn, :ln, :em, :pn, :pwd, NOW()");

        $sql->execute([
            ':usn' => $usid,
            ':fn' => $firstName,
            ':ln' => $lastName,
            ':em' => $email,
            ':pn' => $phone,
            ':pwd' => $password,
        ]);
        
        http_response_code(200);
        echo json_encode([
            'status' => 'success',
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


