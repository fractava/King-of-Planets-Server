<?php

    include("inc/config.inc.php");
    include("inc/functions.inc.php");

    switch($_GET["action"]){
        case "register":
            header('Content-Type: application/json');
            
            $secret = generateRandomString(15);
            $data = '{"deck": {},"planet": 0,"stats": {"won_fights": 0,"lost_fights": 0}}';
            
            $statement = $pdo->prepare("INSERT INTO users (secret, data) VALUES (:secret, :data);");
			$result = $statement->execute(array("secret"=> $secret, "data"=> $data));
			$users = $statement->fetch();
			
			//get id
			$statement = $pdo->prepare("SELECT id FROM users WHERE secret=:secret");
			$result = $statement->execute(array("secret"=> $secret));
			$id = $statement->fetch()["id"];
			
			$response = array("secret"=> $secret, "id"=> $id);
			echo json_encode($response);
        break;
        case "fight":
            if(isset($_GET["userId"]) && isset($_GET["secret"]) && isset($_GET["characterId"])){
                if(checkUserSecret($_GET["userId"],$_GET["secret"])){
                    //add user to waiting_for_fight list
                    $statement = $pdo->prepare("INSERT INTO waiting_for_fight (userId,characterId) VALUES (:userId,:characterId);");
    			    $statement->execute(array("userId"=> $_GET["userId"],"characterId"=> $_GET["characterId"]));
    			    
    			    //check IF 6 Players waiting
    			    $statement2 = $pdo->prepare("SELECT COUNT(userId) FROM waiting_for_fight;");
    			    $statement2->execute();
    			    $playersWaiting = $statement2->fetch()[0];
    			    
    			    if($playersWaiting >= 6){
    			        $newFight = array();
    			        $newFight["players"] = array();
    			        $newFight["map"] = 0;
    			        
    			        for($i = 0; $i < 6; $i++){
    			            $statement3 = $pdo->prepare("SELECT * FROM waiting_for_fight ORDER BY timestamp ASC LIMIT 1;");
    			            $statement3->execute();
    			            $player = $statement3->fetch();

    			            if($i < 3){
    			                $team = 0;
    			            }else{
    			                $team = 1;
    			            }
    			            
    			            $newFight["players"][] = array("id"=> $player["userId"], "team"=> $team, "characterId"=> $player["characterId"], "position"=> array("x"=> 0,"y"=> 0));
    			            
    			            //remove from waiting_for_fight list
    			            $statement4 = $pdo->prepare("DELETE FROM waiting_for_fight WHERE userId=:userId LIMIT 1;");
    			            $statement4->execute(array("userId"=> $player["userId"]));
    			            
    			            //set isInFight in user Table
    			            $statement5 = $pdo->prepare("UPDATE users SET isInFight=1 WHERE id=:userId LIMIT 1;");
    			            $statement5->execute(array("userId"=> $player["userId"]));
    			            
    			        }
    			        
    			        $statement6 = $pdo->prepare("INSERT INTO fights (data) VALUES (:data);");
    			        $statement6->execute(array("data"=> json_encode($newFight)));
    			    }
                }else{
                    echo "auth failed";
                }
            }
        break;
    }

?>