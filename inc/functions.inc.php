<?php
    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    function checkUserSecret($userId,$secret){
        global $pdo;
        $statement = $pdo->prepare("SELECT secret FROM users WHERE id=:id");
        $result = $statement->execute(array("id"=> $userId));
        
        return $secret == $statement->fetch()["secret"];
    }
?>