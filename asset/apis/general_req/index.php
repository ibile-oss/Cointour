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

    