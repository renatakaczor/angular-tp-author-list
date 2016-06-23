<?php 
error_reporting(1);
include_once 'dbConnect.php';

$res = $pdo->prepare('SELECT * FROM auteur');
$res->execute();
$res = $res->fetchAll(PDO::FETCH_ASSOC);

foreach($res as $key => $val) {
	$result[] = array(
		'nom' => utf8_encode($val->nom),
		'prenom' => utf8_encode($val->description),
		'fonction' => utf8_encode($val->image)
	);
}
echo json_encode($res);
