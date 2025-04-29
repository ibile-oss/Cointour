<?php
    // session_start();
    // require_once dirname(__DIR__, 3) ."/conn.php";
    // require_once dirname(__DIR__, 3) ."/asset/inc/function.php";

    // $current_user_id = $_SESSION['uid'];
    // header('Content-Type: text/event-stream');
    // header('Cache-Control: no-cache');
    // header('Connection: keep-alive');


    // // Continuously check for new messages for this user
    // while (true) {
    //     $result = "SELECT * FROM messages WHERE userid = '$current_user_id' AND status != 'read' ORDER BY created_at DESC LIMIT 1";
    //     $query = mysqli_query($conn, $result);
    
    //     if ($query->num_rows > 0) {
    //         $row = $query->fetch_assoc();
    //         echo "data: " . json_encode($row) . "\n\n";
    //         ob_flush();
    //         flush();
    //     }
    
    //     sleep(2); // Wait for 2 seconds before checking again
    // }

   session_start();
   require_once dirname(__DIR__, 3) . "/conn.php";
   require_once dirname(__DIR__, 3) . "/asset/inc/function.php";
   
   $current_user_id = $_SESSION['uid'];
   header('Content-Type: application/json');
   
   try {
       // Fetch ONLY the next unread message for this user
       $result = "SELECT * FROM messages WHERE userid = '$current_user_id' AND status = 'unread' ORDER BY created_at ASC LIMIT 1";
       $query = mysqli_query($conn, $result);
   
       if (!$query) {
           throw new Exception("Database query failed: " . mysqli_error($conn));
       }
   
       $message = $query->fetch_assoc(); // Fetch the single unread message
   
       if ($message) {
           // Return the unread message as JSON
           echo json_encode($message);
       } else {
           // No unread messages available
           echo json_encode(["msg" => "No unread messages"]);
       }
   } catch (Exception $e) {
       http_response_code(500); // Internal Server Error
       echo json_encode(["error" => $e->getMessage()]);
   }
   
   $conn->close();
    


   



