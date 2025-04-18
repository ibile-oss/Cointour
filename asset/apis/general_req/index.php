<?php
    require_once dirname(__DIR__, 3) ."/conn.php";
    function random_nums($length){
        $text = "";
        if($length < 5){
            $length = 5;
        }
    
        $len = rand(4,$length);
        for ($i=0; $i < $len; $i++){ 
           $text .= rand(0,9);
        }
    
        return $text;
    }
    if($_SERVER['REQUEST_METHOD'] !== 'POST'){
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'Only POST Method allowed'
        ]);
        die;
    }

    if(isset($_POST['docu']) && $_POST['docu'] !== ''){
        try {
            $data =json_decode($_POST['docu']);
            $day = $data->day;
            $uid = $data->uid;
            $txt = 'true';

            if($day == 1){
                $ins = "UPDATE daily_reward SET day1='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }else if($day == 2){
                $ins = "UPDATE daily_reward SET day2='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }else if($day == 3){
                $ins = "UPDATE daily_reward SET day3='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }else if($day == 4){
                $ins = "UPDATE daily_reward SET day4='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }else if($day == 5){
                $ins = "UPDATE daily_reward SET day5='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }else if($day == 6){
                $ins = "UPDATE daily_reward SET day6='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }else if($day == 7){
                $ins = "UPDATE daily_reward SET day7='$txt' WHERE userid='$uid'";
                $query = mysqli_query($conn,$ins);
            }


        }catch (Exeption $th) {
            http_response_code(500);
            echo json_encode([
                'status' => 'error',
                'message' => $th
            ]);
            die;
        }
    }

    try {
        if(isset($_POST['check']) && !empty($_POST['check'])){
            $data = json_decode($_POST['check']);
    
            $uid = $data->uid;
    
            $update_reward = "UPDATE daily_reward SET day1='', day2='', day3='', day4='', day5='',
            day6='', day7='' WHERE userid='$uid'";
            $query = mysqli_query($conn,$update_reward);

            $update_combo = "UPDATE daly_combo SET day1='', day2='', day3='', day4='', day5='',
            day6='', day7='' WHERE userid='$uid'";
            $query = mysqli_query($conn,$update_combo);
        }

    }catch (Exeption $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['taskM']) && !empty($_POST['taskM'])){
            $data = json_decode($_POST['taskM']);
    
            $uid = $data->uid;
            $taskN = $data->taskNum;
            $set = 'clk';

            if($taskN == 1){
                $upd = "UPDATE taskclaim SET task1='$set' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($taskN == 2){
                $upd = "UPDATE taskclaim SET task2='$set' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($taskN == 3){
                $upd = "UPDATE taskclaim SET task3='$set' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($taskN == 4){
                $upd = "UPDATE taskclaim SET task4='$set' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($taskN == 5){
                $upd = "UPDATE taskclaim SET task5='$set' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }

        }

    } catch (Exeption $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['dataSet']) && !empty($_POST['dataSet'])){
            $postData = json_decode($_POST['dataSet']);

            $uid = $postData->uid;
            $day = $postData->day;
            $strng = 'clk';

            if($day == 1){
                $upd = "UPDATE daly_combo SET day1='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($day == 2){
                $upd = "UPDATE daly_combo SET day2='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($day == 3){
                $upd = "UPDATE daly_combo SET day3='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($day == 4){
                $upd = "UPDATE daly_combo SET day4='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($day == 5){
                $upd = "UPDATE daly_combo SET day5='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($day == 6){
                $upd = "UPDATE daly_combo SET day6='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }else if($day == 7){
                $upd = "UPDATE daly_combo SET day7='$strng' WHERE userid='$uid'";
                $query = mysqli_query($conn,$upd);
            }
        }

        //echo mysqli_error($conn);

    }catch(Exeption $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['test']) && !empty($_POST['test'])){
            $postContent = json_decode($_POST['test']);

           $user_name = $postContent->user_name;
           $txt = $postContent->txt;
           $heading = $postContent->heading;
           $uid = $postContent->uid;
           $dte = $postContent->dteday;
           $uik = random_nums(20);

           $rep = str_replace('\'', '', $txt);
           
           $select = "SELECT * FROM register WHERE userid='$uid'";
           $query = mysqli_query($conn,$select);

           $fetch = mysqli_fetch_assoc($query);
           $user_profile = $fetch['bot_av'];

           $ins = "INSERT INTO testymonial (userid,profile,name,heading,testy,dte,unik)
           VALUES('$uid','$user_profile','$user_name','$heading','$rep','$dte','$uik')";
           $q = mysqli_query($conn,$ins);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Added'
            ]);
            die;
        }

    }catch(Exeption $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['txt_testi']) && !empty($_POST['txt_testi'])){
            $txt = json_decode($_POST['txt_testi']);

            $unik = $txt->uni;
            $uid = $txt->uid;

            $select = "SELECT * FROM testymonial WHERE unik='$unik'";
            $query = mysqli_query($conn,$select);

            $fetch = mysqli_fetch_assoc($query);
            $unikID = $fetch['userid'];

            if($uid !== $unikID){

                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Can Only Recycle Your Testimonial!'
                ]);
                die;

            }else{

                $delet = "DELETE FROM testymonial WHERE unik='$unik'";
                mysqli_query($conn,$delet);

                echo json_encode([
                    'status' => 'success',
                    'message' => 'Recycle Successfully'
                ]);
                die;
            }

        }
    }catch(Exeption $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['task_check']) && !empty($_POST['task_check'])){
            $posdata = json_decode($_POST['task_check']);

            $uid = $posdata->uid;
            
            $screen_shot = "SELECT * FROM user_screenshot WHERE userid='$uid'";
            $query = mysqli_query($conn,$screen_shot);

            $user_links = "SELECT * FROM user_on_media WHERE userid='$uid'";
            $que = mysqli_query($conn,$user_links);

            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Are Not Eligible For Our Tools!, Please Kindly Complete Task To Elig Our Tools'
                ]);
                die;
            }

            if(!mysqli_num_rows($que) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Are Not Eligible For Our Tools!, Please Kindly Upload Your Social Links To Elig'
                ]);
                die;
            }

            // $check_ref = "SELECT * FROM user_dentials WHERE userid='$uid'";
            // $q = mysqli_query($conn,$check_ref);
            // $fetch = mysqli_fetch_assoc($q);

            // $current_ref = $fetch['referrals'];
            // $verified_ref = 10;
            // if($current_ref < $verified_ref){
            //     echo json_encode([
            //         'status' => 'error',
            //         'message' => 'You Are Not Eligible For Our Tools!, Gain Up To 10 Referrals To Elig, Your Current Ref Is ' . $current_ref
            //     ]);
            //     die;
            // }

            echo json_encode([
                'status' => 'success',
                'message' => 'You Are Eligible'
            ]);
            die;
        }

        echo mysqli_error($conn);

    }catch(Exeption $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['infor_gen']) && !empty($_POST['infor_gen'])){
            $details = json_decode($_POST['infor_gen']);

            $uid = $details->id;
            $category = $details->spltEXt;
            $price = $details->spltPrice;
            $buy_from = $details->val;
            $lenght = $details->lenght;


            $check_if_account_exist_in_buy_from = 
            "SELECT * FROM queeny_dentials WHERE userid='$uid'";
            $query = mysqli_query($conn,$check_if_account_exist_in_buy_from);

            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Do Non Have An Account On ' . $buy_from
                ]);
                die;
            }

            $fetch = mysqli_fetch_assoc($query);
            $current_balance = $fetch['balance'];
            if($price > $current_balance){

                echo json_encode([
                    'status' => 'error',
                    'message' => 'Insufficient Balance In ' .$buy_from
                ]);
                die;
            }

            $new_balance = $current_balance - $price;
            
            

            $set_back_new_balance = "UPDATE queeny_dentials SET balance='$new_balance' WHERE userid='$uid'";
            $qy = mysqli_query($conn,$set_back_new_balance);


            $tonum = (int) $lenght;
            if($category == 'jewel'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO jewel(userid,jewel)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'pluto'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO pluto(userid,pluto)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'crys'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO crys(userid,crys)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'gem'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO gem(userid,gem)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'keystar'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO keystar(userid,keystar)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'maxkey'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO maxkey(userid,maxkey)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'octahedron'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO octahedron(userid,octahedron)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'sapphire'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO sapphire(userid,sapphire)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'ruby'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO ruby(userid,ruby)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'star'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO star(userid,star)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }else if($category == 'deltohedron'){
                for($i=0; $i < $tonum; $i++){ 
                    $ins = "INSERT INTO deltohedron(userid,deltohedron)VALUES('$uid','$lenght')";
                    $quy = mysqli_query($conn,$ins);
                }
            }
                  
            echo json_encode([
                'status' => 'success',
                'newBalance' => $new_balance,
                'message' => 'Successfully bought ' . $category
            ]);
            die;
        }

    } catch (Exeption $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    