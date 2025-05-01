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

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    $uploadDir = "uploads/";
    $files = $_FILES["proof"];
    $allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

    $user_id = $_POST["user_id"];

    if (!$user_id) {
        echo json_encode(["status" => "error", "message" => "User ID is required"]);
        die;
    }

    if (count($files["name"]) > 5) {
        echo json_encode(["status" => "error", "message" => "You can only upload up to five images."]);
        die;
    }

    if (count($files["name"]) < 5) {
        echo json_encode(["status" => "error", "message" => "You can only upload up to five images."]);
        die;
    }

    $uploadCount = 0;
    foreach ($files["name"] as $index => $fileName) {
        $fileTmpName = $files["tmp_name"][$index];
        $fileType = $files["type"][$index];
        $fileError = $files["error"][$index];

        if (!in_array($fileType, $allowedTypes)) {
            echo json_encode(["status" => "error", "message" => "Only PNG, JPG, and JPEG files are allowed."]);
            die;
        }

        if ($fileError === 0) {
            $newFileName = "_Cnt_" . time() . "_" . $uploadCount . "." . pathinfo($fileName, PATHINFO_EXTENSION);
            $filePath = $uploadDir . $newFileName;

            if (move_uploaded_file($fileTmpName, $filePath)){
                // Insert file details into database with user ID
                $sql = "INSERT INTO uploads (user_id, file_name, file_path) VALUES ('$user_id', '$newFileName', '$filePath')";

                if (mysqli_query($conn, $sql)){
                    $uploadCount++;
                } else {
                    echo json_encode(["status" => "error", "message" => "Database error: " . mysqli_error($conn)]);
                    die;
                }
            } else {
                echo json_encode(["status" => "error", "message" => "File upload failed!"]);
                die;
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Error uploading file!"]);
            die;
        }
    }

    echo json_encode(["status" => "success", "message" => "Shots uploaded successfully!"]);
    echo mysqli_error($conn);

?>




    
    
