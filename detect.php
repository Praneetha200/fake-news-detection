<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $news_text = $_POST["news_text"];
    
  
    $command = escapeshellcmd("python3 predict.py " . escapeshellarg($news_text));
    $output = shell_exec($command);
    
    echo $output;
}
?>
