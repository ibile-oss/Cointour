<?php
    define('__Root__','http://localhost/cointour/');
    define('__upl__','http://localhost/cointour/asset/apis/sendUpload/uploads/');
    define('__img__','http://localhost/cointour/asset/img/');


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

    function check_logins($conn){
        if(isset($_SESSION['uid'])){ 
            $id = $_SESSION['uid'];
    
            $select = "SELECT * FROM register WHERE userid = '$id' LIMIT 1";
            $q = mysqli_query($conn,$select);
    
            if($q && mysqli_num_rows($q) >0){
                $user_data = mysqli_fetch_assoc($q);
                return $user_data;
            }
        }
    
        header("Location: signin.html");
        die;
    }

    function generateWalletAddress() {
        $privateKey = bin2hex(random_bytes(32));
    
        $publicKey = hash('sha256', $privateKey);
    
        $walletAddress = hash('ripemd160', $publicKey);
    
        $walletAddress = '0x' . $walletAddress;
    
        return $walletAddress;
    }

    function Fetch_users_data1($conn,$uid){
        $sel = "SELECT fname,lname,email,phone,password,registered_at,bot_av FROM register WHERE userid='$uid'";
        $q = mysqli_query($conn,$sel);

        if(!mysqli_num_rows($q) >0){
            return[0];
        }else{
            $row = mysqli_fetch_assoc($q);

            $profile = $row['bot_av'];
            return['uprofile' =>$profile];
        }
    }

    function fetch_Data_2($conn,$uid){
        $select = "SELECT referrals FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$select);


        if(!mysqli_num_rows($q) >0){
            return[0];
        }else{
            $fetch = mysqli_fetch_assoc($q);
            $refferals = $fetch['referrals'];

            return['ref' => $refferals];
        }
    }

    function fetch_users_reff($conn,$uid){
        $sql = "SELECT COUNT(*) AS referrals FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$sql);

        $row = mysqli_fetch_assoc($q);

        $totalref = $row['referrals'];

        if($totalref >= 20){
            return true;
        }

        return false;
    }

    function fetch_users_reff2($conn,$uid){
        $sql = "SELECT COUNT(*) AS referrals FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$sql);

        $row = mysqli_fetch_assoc($q);

        $totalref = $row['referrals'];

        if($totalref >= 40){
            return true;
        }

        return false;
    }

    function fetch_users_reff3($conn,$uid){
        $sql = "SELECT COUNT(*) AS referrals FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$sql);

        $row = mysqli_fetch_assoc($q);

        $totalref = $row['referrals'];

        if($totalref >= 60){
            return true;
        }

        return false;
    }

    function fetch_users_reff4($conn,$uid){
        $sql = "SELECT COUNT(*) AS referrals FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$sql);

        $row = mysqli_fetch_assoc($q);

        $totalref = $row['referrals'];

        if($totalref >= 80){
            return true;
        }

        return false;
    }

    function fetch_users_reff5($conn,$uid){
        $sql = "SELECT COUNT(*) AS referrals FROM user_dentials WHERE userid='$uid'";
        $q = mysqli_query($conn,$sql);

        $row = mysqli_fetch_assoc($q);

        $totalref = $row['referrals'];

        if($totalref >= 100){
            return true;
        }

        return false;
    }

    function returnuser_img1($conn,$uid){
        $select = "SELECT * FROM user_screenshot WHERE userid='$uid'";
        $qr = mysqli_query($conn,$select);
        if(!mysqli_num_rows($qr)){
            return[0];
        }else{
            $fetch = mysqli_fetch_assoc($qr);
            $pic1 = $fetch['shot1'];
            $pic2 = $fetch['shot2'];
            $pic3 = $fetch['shot3'];
            $pic4 = $fetch['shot4'];
            $pic5 = $fetch['shot5'];

            return['img1' => $pic1, 'img2' => $pic2, 'img3' => $pic3, 'img4' => $pic4, 'img5' => $pic5];
        }
    }

    function fetch_my_referrals($conn,$link){
        $sel2 = "SELECT * FROM fetch_refer_users WHERE referralink='$link'";
        $query = mysqli_query($conn,$sel2);

        if(mysqli_num_rows($query) > 0){
            while ($row = mysqli_fetch_assoc($query)){
                $profile = $row['profile_refered'];
                ?>
                    <span><img src="<?php echo __upl__ . $profile ?>" alt=""></span>
                <?php
            }
        }
    }

    function fetch_queeny_balance($conn,$uid){
        $selc = "SELECT balance FROM queeny_dentials WHERE userid='$uid'";
        $query = mysqli_query($conn,$selc);

        if(!mysqli_num_rows($query) >0){
            return[0];
        }else{
            $fetch = mysqli_fetch_assoc($query);
            $userBalance = $fetch['balance'];

            return['user_Bal' => $userBalance];
        }
    }

    function getStar($conn,$uid){
        $sel = "SELECT * FROM queeny_str WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'str.gif';

        if(!mysqli_num_rows($query) >0){
            
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }

    }

    function get_my_friends($conn,$reflink){
        $sel = "SELECT * FROM fetch_refer_users WHERE referralink='$reflink'";
        $q = mysqli_query($conn,$sel);

    
        if(!mysqli_num_rows($q) >0){
           echo "No Friends Yet";
        }else{
            while ($row = mysqli_fetch_assoc($q)){
               $profile = $row['profile_refered'];
               $name = ucwords($row['person_refered']);


               $reg = "SELECT registered_at FROM register WHERE bot_av='$profile'";
               $qry = mysqli_query($conn,$reg);
               $ft = mysqli_fetch_assoc($qry);
               $regAt = $ft['registered_at'];
               $regInfor = 'Registered In ' . $regAt;
            

                ?>
                    <nav title="<?php echo $regInfor?>" class="each_ref_us">
                        <span class="img_rap wind_load"><img src="<?php echo __upl__ . $profile?>" alt=""></span>
                        <span><?php echo $name ?></span>
                    </nav>
                <?php
            }
        }
    }

    function checkUpload($conn,$uid){
        $check = "SELECT * FROM user_screenshot WHERE userid='$uid'";
        $query = mysqli_query($conn,$check);

        if(mysqli_num_rows($query) > 0){
            return false;
        }

        return true;
    }

    function fetch_user_confirm($conn,$uid){
        $sel = "SELECT * FROM user_screenshot WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        if(!mysqli_num_rows($query) >0){
            echo "No Screenshot Uploaded";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                $scn1 = $fetch['shot1'];
                $scn2 = $fetch['shot2'];
                $scn3 = $fetch['shot3'];
                $scn4 = $fetch['shot4'];
                $scn5 = $fetch['shot5'];

                ?>
                    <nav><img src="<?php echo __upl__ . $scn1 ?>" alt=""></nav>       
                    <nav><img src="<?php echo __upl__ . $scn2 ?>" alt=""></nav>       
                    <nav><img src="<?php echo __upl__ . $scn3 ?>" alt=""></nav>       
                    <nav><img src="<?php echo __upl__ . $scn4 ?>" alt=""></nav>       
                    <nav><img src="<?php echo __upl__ . $scn5 ?>" alt=""></nav>  
                <?php
            }
        }
    }

    function fetStar($conn,$uid){
        $sel = "SELECT * FROM star WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'str.gif';

        if(!mysqli_num_rows($query) >0){
            echo "No Available Stars";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span class="randAni"><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }
    }

    function fetkeystar($conn,$uid){
        $sel = "SELECT * FROM keystar WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'keystar.png';

        if(!mysqli_num_rows($query) >0){
            echo "No Available Keystar";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span class="randAni"><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }
    }

    function fetoctahedron($conn,$uid){
        $sel = "SELECT * FROM octahedron WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'octahedron.png';

        if(!mysqli_num_rows($query) >0){
            echo "No Available Octahedron";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span class="randAni"><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }
    }

    function fetdeltohedron($conn,$uid){
        $sel = "SELECT * FROM deltohedron WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'deltohedron.png';

        if(!mysqli_num_rows($query) >0){
            echo "No Available Deltohedron";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span class="randAni"><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }
    }

    function fetjewel($conn,$uid){
        $sel = "SELECT * FROM jewel WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'jewel.png';

        if(!mysqli_num_rows($query) >0){
            echo "No Available Dewel";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span class="randAni"><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }
    }

    function fetpluto($conn,$uid){
        $sel = "SELECT * FROM pluto WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);
        $star = 'pluto.png';

        if(!mysqli_num_rows($query) >0){
            echo "No Available Pluto";
        }else{
            while ($fetch = mysqli_fetch_assoc($query)){
                ?>
                    <span class="randAni"><i><img src="<?php echo __img__ . $star ?>" alt=""></i></span>
                <?php
            }
        }
    }

    function fetch_testimonials($conn){
        $select = "SELECT * FROM testymonial ORDER BY ID DESC";
        $query = mysqli_query($conn,$select);

        if(!mysqli_num_rows($query) >0){
            echo "Be The Firs To Testify";
        }else{
            while ($row = mysqli_fetch_assoc($query)){
                ?>
                    <nav un="<?php echo $row['unik']?>" class="wrap_tes_ti">
                        <span class="ig_wrap wind_load"><nav><i></i></nav><img src="<?php echo __upl__ . $row['profile']?>" alt=""></span>
                        <span><?php echo $row['name'] ?></span>
                        <h3><?php echo $row['heading'] ?></h3>
                        <nav class="txtrappr">
                            <p>
                                <?php echo $row['testy'] ?>
                            </p>
                            <span class="time_stamp"><?php echo $row['dte']?></span>
                        </nav>
                        <span class="delete__"><i class="fas fa-recycle"></i></span>
                    </nav>
                <?php
            }
        }
    }


    function check_true1($conn,$uid){
        $sel = "SELECT clk5 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk5'];

        return $true;
    }
    function check_true2($conn,$uid){
        $sel = "SELECT clk10 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk10'];

        return $true;
    }
    function check_true3($conn,$uid){
        $sel = "SELECT clk15 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk15'];

        return $true;
    }
    function check_true4($conn,$uid){
        $sel = "SELECT clk20 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk20'];

        return $true;
    }
    function check_true5($conn,$uid){
        $sel = "SELECT clk25 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk25'];

        return $true;
    }
    function check_true6($conn,$uid){
        $sel = "SELECT clk30 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk30'];

        return $true;
    }
    function check_true7($conn,$uid){
        $sel = "SELECT clk35 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk35'];

        return $true;
    }
    function check_true8($conn,$uid){
        $sel = "SELECT clk40 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk40'];

        return $true;
    }
    function check_true9($conn,$uid){
        $sel = "SELECT clk45 FROM claimclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $ft = mysqli_fetch_assoc($query);
        $true = $ft['clk45'];

        return $true;
    }

    function checkLVL1($conn,$uid){
        $sel = "SELECT lvl1 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl1'];

        return $lvl;
    }
    function checkLVL2($conn,$uid){
        $sel = "SELECT lvl2 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl2'];

        return $lvl;
    } 
    function checkLVL3($conn,$uid){
        $sel = "SELECT lvl3 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl3'];

        return $lvl;
    }
    function checkLVL4($conn,$uid){
        $sel = "SELECT lvl4 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl4'];

        return $lvl;
    }
    function checkLVL5($conn,$uid){
        $sel = "SELECT lvl5 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl5'];

        return $lvl;
    }
    function checkLVL6($conn,$uid){
        $sel = "SELECT lvl6 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl6'];

        return $lvl;
    }
    function checkLVL7($conn,$uid){
        $sel = "SELECT lvl7 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl7'];

        return $lvl;
    }
    function checkLVL8($conn,$uid){
        $sel = "SELECT lvl8 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl8'];

        return $lvl;
    }
    function checkLVL9($conn,$uid){
        $sel = "SELECT lvl9 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl9'];

        return $lvl;
    }
    function checkLVL10($conn,$uid){
        $sel = "SELECT lvl10 FROM lvlclick WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $lvl = $fetch['lvl10'];

        return $lvl;
    }

    function check_reward1($conn,$uid){
        $sel = "SELECT day1 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day1'];
        return $day;
    }function check_reward2($conn,$uid){
        $sel = "SELECT day2 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day2'];
        return $day;
    }function check_reward3($conn,$uid){
        $sel = "SELECT day3 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day3'];
        return $day;
    }function check_reward4($conn,$uid){
        $sel = "SELECT day4 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day4'];
        return $day;
    }function check_reward5($conn,$uid){
        $sel = "SELECT day5 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day5'];
        return $day;
    }function check_reward6($conn,$uid){
        $sel = "SELECT day6 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day6'];
        return $day;
    }function check_reward7($conn,$uid){
        $sel = "SELECT day7 FROM daily_reward WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day7'];
        return $day;
    }

    function getTaskClaim1($conn,$uid){
        $sel = "SELECT task1 FROM taskclaim WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $row = $fetch['task1'];
        return $row;
    }
    function getTaskClaim2($conn,$uid){
        $sel = "SELECT task2 FROM taskclaim WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $row = $fetch['task2'];
        return $row;
    }
    function getTaskClaim3($conn,$uid){
        $sel = "SELECT task3 FROM taskclaim WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $row = $fetch['task3'];
        return $row;
    }
    function getTaskClaim4($conn,$uid){
        $sel = "SELECT task4 FROM taskclaim WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $row = $fetch['task4'];
        return $row;
    }
    function getTaskClaim5($conn,$uid){
        $sel = "SELECT task5 FROM taskclaim WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $row = $fetch['task5'];
        return $row;
    }

    function check_combo1($conn,$uid){
        $sel = "SELECT day1 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day1'];
        return $day;
    }
    function check_combo2($conn,$uid){
        $sel = "SELECT day2 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day2'];
        return $day;
    }
    function check_combo3($conn,$uid){
        $sel = "SELECT day3 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day3'];
        return $day;
    }
    function check_combo4($conn,$uid){
        $sel = "SELECT day4 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day4'];
        return $day;
    }
    function check_combo5($conn,$uid){
        $sel = "SELECT day5 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day5'];
        return $day;
    }
    function check_combo6($conn,$uid){
        $sel = "SELECT day6 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day6'];
        return $day;
    }
    function check_combo7($conn,$uid){
        $sel = "SELECT day7 FROM daly_combo WHERE userid='$uid'";
        $query = mysqli_query($conn,$sel);

        $fetch = mysqli_fetch_assoc($query);
        $day = $fetch['day7'];
        return $day;
    }


?>