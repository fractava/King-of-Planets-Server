<?php

    include("inc/config.inc.php");
    include("inc/functions.inc.php");

    switch($_GET["requestedData"]){
        case "userConfig":
            if(isset($_GET["userId"]) && isset($_GET["secret"])){
                if(checkUserSecret($_GET["userId"],$_GET["secret"])){
                    header('Content-Type: application/json');
                    
                    $statement = $pdo->prepare("SELECT data FROM users WHERE id=:userId LIMIT 1;");
    			    $statement->execute(array("userId"=> $_GET["userId"]));
    			    echo $statement->fetch()["data"];
                }
            }
        break;
        
    }
?>