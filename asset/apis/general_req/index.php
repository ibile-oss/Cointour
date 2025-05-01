<?php
    require_once dirname(__DIR__, 3) ."/conn.php";
    require_once dirname(__DIR__, 3) ."/asset/inc/function.php";
    // function random_nums($length){
    //     $text = "";
    //     if($length < 5){
    //         $length = 5;
    //     }
    
    //     $len = rand(4,$length);
    //     for ($i=0; $i < $len; $i++){ 
    //        $text .= rand(0,9);
    //     }
    
    //     return $text;
    // }
    if($_SERVER['REQUEST_METHOD'] !== 'POST'){
        http_response_code(401);
        echo json_encode([
            'status' => 'error',
            'message' => 'Only POST Method allowed'
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

    } catch (Exception $th) {
        error_log($th); // Logs the full exception
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'An unexpected error occurred. Please try again later.'
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

    }catch(Exception  $th){
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
    }catch(Exception  $th){
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
            
            $screen_shot = "SELECT * FROM uploads WHERE user_id='$uid'";
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

    }catch(Exception  $th){
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

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['sendIDclicked']) && !empty($_POST['sendIDclicked'])){
            $postItems = json_decode($_POST['sendIDclicked']);

            $uid = $postItems->uid;
            $id = $postItems->ID;

            $checkUSERid = "SELECT * FROM star WHERE userid='$uid'";
            $query = mysqli_query($conn,$checkUSERid);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Where Logged Out!'
                ]);
                die;
            }

            $delet = "DELETE FROM star WHERE ID='$id'";
            mysqli_query($conn,$delet);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Claimed'
            ]);
            die;
        }


    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['sendIDkey']) && !empty($_POST['sendIDkey'])){
            $postItems = json_decode($_POST['sendIDkey']);

            $uid = $postItems->uid;
            $id = $postItems->ID;

            $checkUSERid = "SELECT * FROM keystar WHERE userid='$uid'";
            $query = mysqli_query($conn,$checkUSERid);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Where Logged Out!'
                ]);
                die;
            }

            $delet = "DELETE FROM keystar WHERE ID='$id'";
            mysqli_query($conn,$delet);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Claimed'
            ]);
            die;
        }


    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['sendIDoct']) && !empty($_POST['sendIDoct'])){
            $postItems = json_decode($_POST['sendIDoct']);

            $uid = $postItems->uid;
            $id = $postItems->ID;

            $checkUSERid = "SELECT * FROM octahedron WHERE userid='$uid'";
            $query = mysqli_query($conn,$checkUSERid);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Where Logged Out!'
                ]);
                die;
            }

            $delet = "DELETE FROM octahedron WHERE ID='$id'";
            mysqli_query($conn,$delet);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Claimed'
            ]);
            die;
        }

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['sendIDdel']) && !empty($_POST['sendIDdel'])){
            $postItems = json_decode($_POST['sendIDdel']);

            $uid = $postItems->uid;
            $id = $postItems->ID;

            $checkUSERid = "SELECT * FROM deltohedron WHERE userid='$uid'";
            $query = mysqli_query($conn,$checkUSERid);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Where Logged Out!'
                ]);
                die;
            }

            $delet = "DELETE FROM deltohedron WHERE ID='$id'";
            mysqli_query($conn,$delet);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Claimed'
            ]);
            die;
        }

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['sendIDjew']) && !empty($_POST['sendIDjew'])){
            $postItems = json_decode($_POST['sendIDjew']);

            $uid = $postItems->uid;
            $id = $postItems->ID;

            $checkUSERid = "SELECT * FROM jewel WHERE userid='$uid'";
            $query = mysqli_query($conn,$checkUSERid);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Where Logged Out!'
                ]);
                die;
            }

            $delet = "DELETE FROM jewel WHERE ID='$id'";
            mysqli_query($conn,$delet);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Claimed'
            ]);
            die;
        }

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['sendIDplut']) && !empty($_POST['sendIDplut'])){
            $postItems = json_decode($_POST['sendIDplut']);

            $uid = $postItems->uid;
            $id = $postItems->ID;

            $checkUSERid = "SELECT * FROM pluto WHERE userid='$uid'";
            $query = mysqli_query($conn,$checkUSERid);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'You Where Logged Out!'
                ]);
                die;
            }

            $delet = "DELETE FROM pluto WHERE ID='$id'";
            mysqli_query($conn,$delet);

            echo json_encode([
                'status' => 'success',
                'message' => 'Successfully Claimed'
            ]);
            die;
        }

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }
    
    try {
        if(isset($_POST['search_engine']) && !empty($_POST['search_engine'])){
            $data = json_decode($_POST['search_engine']);

            $query = $data->params;

            $check_query = "SELECT * FROM faqsadmin WHERE heading LIKE '%$query%'";
            $que = mysqli_query($conn,$check_query);

            while ($fetch = mysqli_fetch_assoc($que)){
                $queried_data = $fetch['heading'];
                $queried_faqs = $fetch['faqs'];
                $queried_date = $fetch['dte'];
                $queried_name = $fetch['user_name'];
               
                ?>
                    <nav class="faqs_infor">
                        <h3><?php echo $queried_data ?></h3>
                        <span class="phpfaqs"><?php echo $queried_faqs ?></span>
                        <P class="askedby">Queried by: <i><?php echo $queried_name ?></i></P>
                        <P class="Dte">Dte: <i><?php echo $queried_date ?></i></P>
                    </nav> 
                <?php
            }

        }
    } catch (Exception  $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['name']) && !empty($_POST['name'])){
            $receive = json_decode($_POST['name']);
            

            $searchQuery = $receive->nme;
            
            $sele = "SELECT * FROM register WHERE fname LIKE '%$searchQuery%' || lname LIKE '%$searchQuery%'";
            $query = mysqli_query($conn,$sele);

            while ($fetch = mysqli_fetch_assoc($query)){
                if(!mysqli_num_rows($query) > 0){
                    ?>
                        <h3><?php echo $searchQuery?> dosen't exist</h3>
                    <?php
                }else{
                    $name1 = $fetch['fname'];
                    $name2 = $fetch['lname'];
                    $profile = $fetch['bot_av'];
                    $uid = $fetch['userid'];

                    $botName = $name1 . ' ' . $name2; 
                    ?>
                        <nav class="wrap_each_user">
                            <span class="profile"><i><img src="<?php echo __upl__ .  $profile ?>" alt=""></i></span>
                            <p><?php echo $botName?></p>
                            <button class="message__F" user_name="<?php echo $name1 . ' ' . $name2?>" uid="<?php echo $uid?>">Message</button>
                            <button uid="<?php echo $uid?>" class="delete">Delete</button>
                        </nav>
                    <?php
                }
            }
        }

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['faqs']) && !empty($_POST['faqs'])){
            $pdata = json_decode($_POST['faqs']);

            $faqs = $pdata->txt;
            $uid = $pdata->uid;
            $dte = $pdata->theday;

            $sel = "SELECT * FROM faqs WHERE faqs='$faqs'";
            $u = mysqli_query($conn,$sel);
            if(mysqli_num_rows($u) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Faqs Already Exist'
                ]);
                die; 
            }

            $sel = "SELECT * FROM register WHERE userid='$uid'";
            $q = mysqli_query($conn,$sel);
            $fetch = mysqli_fetch_assoc($q);
            $user_profile = $fetch['bot_av'];

        
            $ins = "INSERT INTO faqs(userid,faqs,dte,pfile)VALUES('$uid','$faqs','$dte','$user_profile')";
            $query = mysqli_query($conn,$ins);

            echo json_encode([
                'status' => 'success',
                'message' => 'Faqs will Be Submitted Soon'
            ]);
            die;
        }


    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['faqstoIn']) && !empty($_POST['faqstoIn'])){
            $dint = json_decode($_POST['faqstoIn']);

            $uid = $dint->usv;
            $heading = $dint->hv;
            $txt = $dint->txt;

            $select = "SELECT * FROM register WHERE userid='$uid'";
            $query = mysqli_query($conn,$select);
            if(!mysqli_num_rows($query) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'User dos\'nt exist'
                ]);
                die;
            }
            $fetch = mysqli_fetch_assoc($query);

            $name1 = $fetch['fname'];
            $name2 = $fetch['lname'];

            $user_name = $name1 . ' ' . $name2;
            $dte = "SELECT * FROM faqs WHERE faqs='$heading'";
            $ur = mysqli_query($conn,$dte);
            if(!mysqli_num_rows($ur) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Faqs heading dos\'nt exist'
                ]);
                die;
            }

            $fetch2 = mysqli_fetch_assoc($ur);

            $faqsDate = $fetch2['dte'];
            $replace = str_replace('\'', '', $txt);

            $checkIfFaqs_exist = "SELECT * FROM faqsadmin WHERE heading='$heading'";
            $confirm = mysqli_query($conn,$checkIfFaqs_exist);
            if(mysqli_num_rows($confirm) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'Faqs already exist'
                ]);
                die;
            }
            
            $ins = "INSERT INTO faqsadmin(userid,faqs,heading,dte,user_name)
            VALUES('$uid','$replace','$heading','$faqsDate','$user_name')";
            mysqli_query($conn,$ins);

            echo json_encode([
                'status' => 'success',
                'message' => 'Added'
            ]);
            die;
        }

        echo mysqli_error($conn);

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }
    

    try {
        if(isset($_POST['credential']) && !empty($_POST['credential'])){
            $dntials = json_decode($_POST['credential']);

            $time = $dntials->sendTime;
            $date = $dntials->theday;
            $mesage = $dntials->addresing;
            $uid = $dntials->userId;
            
            $check_if_user_exist = "SELECT * FROM register WHERE userid='$uid'";
            $query_cheking = mysqli_query($conn,$check_if_user_exist);
            if(!mysqli_num_rows($query_cheking) >0){
                echo json_encode([
                    'status' => 'error',
                    'message' => 'User dons\'nt exist'
                ]);
                die;
            }else{
                $ins = "INSERT INTO messages(userid,msg,time,dte)VALUES('$uid','$mesage','$time','$date')";
                $query = mysqli_query($conn,$ins);

                echo json_encode([
                    'status' => 'success',
                    'message' => 'Message send'
                ]);
            }
        }

    }catch(Exception  $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }


    if(isset($_POST['idset']) && !empty($_POST['idset'])){
        $data = json_decode($_POST['idset']);
        $message_id = $data->id;


        $updat = "UPDATE messages SET status = 'read' WHERE ID = '$message_id'";
        $query = mysqli_query($conn,$updat);
    }

    try {
        if(isset($_POST['timeterval']) && !empty($_POST['timeterval'])){
            $data = json_decode(($_POST['timeterval']));

            
            $time = time();
            $id = $data->uid;
    
            $sel = "SELECT * FROM daily_reward WHERE userid='$id'";
            $check = mysqli_query($conn,$sel);
    
            if(mysqli_num_rows($check) >0){
                $upedat = "UPDATE daily_reward SET day='$time' WHERE userid='$id'";
                mysqli_query($conn,$upedat);
            }else{
                $ins = "INSERT INTO daily_reward(userid,day)VALUES('$id','$time')";
                $query = mysqli_query($conn,$ins);
            }
            
        }
    } catch (Exception $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }
   

    try {
        if(isset($_POST['timeState']) && !empty($_POST['timeState'])){
            $data = json_decode(($_POST['timeState']));

            $time = time();
            $id = $data->uid;
    
            $sel = "SELECT * FROM daly_combo WHERE userid='$id'";
            $check = mysqli_query($conn,$sel);
    
            if(mysqli_num_rows($check) >0){
                $upedat = "UPDATE daly_combo SET day='$time' WHERE userid='$id'";
                mysqli_query($conn,$upedat);
            }else{
                $ins = "INSERT INTO daly_combo(userid,day)VALUES('$id','$time')";
                $query = mysqli_query($conn,$ins);
            }
        } 
    } catch (Exception $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }
        
    try {
        if(isset($_POST['check_time']) && !empty($_POST['check_time'])){
            $data = json_decode(($_POST['check_time']), false);

            $id = $data->uid;

            $sel = "SELECT day FROM daily_reward WHERE userid='$id'";
            $query = mysqli_query($conn,$sel);
            $result = mysqli_fetch_assoc($query);

            if ($result) {
                echo json_encode(["timestamp" => $result['day']]);
            } else {
                echo json_encode(["day" => null]);
            }
        }
    } catch (Exception $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['Dcombo']) && !empty($_POST['Dcombo'])){
            $data = json_decode($_POST['Dcombo']);
            
            $id = $data->uid;

            $sel = "SELECT day FROM daly_combo WHERE userid='$id'";
            $query = mysqli_query($conn,$sel);
            $result = mysqli_fetch_assoc($query);

            if ($result) {
                echo json_encode(["timestamp" => $result['day']]);
            } else {
                echo json_encode(["day" => null]);
            }
        }
    } catch (Exception $th){
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['clearit']) && !empty($_POST['clearit'])){
            $data = json_decode(($_POST['clearit']));

            $uid = $data->uid;

            $searchQuery = "SELECT * FROM daily_reward WHERE userid='$uid'";
            
            $query = mysqli_query($conn,$searchQuery);
            if(!mysqli_num_rows($query) >0){
                echo "No Reward Found";
                die;
            }else{
                $delet = "DELETE FROM daily_reward WHERE userid='$uid'";
                mysqli_query($conn,$delet);
                echo "Reward Cleared";
                die;
            }

        }
    } catch (Exception $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;
    }

    try {
        if(isset($_POST['cleaRcombo']) && !empty($_POST['cleaRcombo'])){
            $data = json_decode(($_POST['cleaRcombo']));
            
            $uid = $data->uid;

            $searchQuery = "SELECT * FROM daly_combo WHERE userid='$uid'";
            
            $query = mysqli_query($conn,$searchQuery);
            if(!mysqli_num_rows($query) > 0){
                echo "No Combo Found";
                die;
            }else{
                $delet = "DELETE FROM daly_combo WHERE userid='$uid'";
                mysqli_query($conn,$delet);
                echo "Combo Cleared";
                die;
            }
        }
    } catch (Exception $th) {
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => $th
        ]);
        die;;
    }

  

    