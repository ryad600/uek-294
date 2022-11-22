<?php
	header("Content-Type: application/json");

	use Psr\Http\Message\ResponseInterface as Response;
	use Psr\Http\Message\ServerRequestInterface as Request;
	use Slim\Factory\AppFactory;

	require __DIR__ . "/../vendor/autoload.php";
	require_once "config/config.php";
	require "model/product.php";
	require "model/category.php";
	require "model/id_check.php";


	$app = AppFactory::create();

	$app->setBasePath("/API/V1");
	/**
     * @OA\Info(title="M295 Webshop API", version="1.0")
 	 */


	/**
	 * Returns an error to the client with the given message and status code.
	 * This will immediately return the response and end all scripts.
	 * @param $message The error message string.
	 * @param $code The response code to set for the response.
	 */
	function error($message, $code) {
		//Write the error as a JSON object.
		$error = array("Error message" => $message);
		echo json_encode($error);

		//Set the response code.
		http_response_code($code);

		//End all scripts.
		die();
	}
	require "controller/authentification.php";

	$product = array("get_all_products",
					 "get_one_product",
					 "post_product",
					 "put_product",
					 "delete_product");
	$category = array("get_all_categories",
					  "get_one_category",
					  "post_category",
					  "put_category",
					  "delete_category");

	

	for ($i = 1; $i < 6; $i++) { 
		require "controller/products/" . $product[($i - 1)] . ".php";
	}
	for ($i = 1; $i < 6; $i++) { 
		require "controller/categories/" . $category[($i - 1)] . ".php";
	}

	$app->run();
?>