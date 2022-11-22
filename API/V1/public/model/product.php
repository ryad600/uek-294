<?php
		require "database.php";

		function create_new_product($sku, $active, $id_category, $name, $image, $description, $price, $stock) {
			global $database;

			$result = $database->query("INSERT INTO product(sku, active, id_category, name, image, description, price, stock) VALUES('$sku', $active, $id_category, '$name', '$image', '$description', $price, $stock)");

			if (!$result) {
				error("An error occured while saving the product", 500);
			}
			else {
				return true;
			}

		}

		function update_product($product_id, $sku, $active, $id_category, $name, $image, $description, $price, $stock) {
			global $database;

			$result = $database->query("UPDATE product SET sku = '$sku', active = $active, id_category = $id_category, name = '$name', image = '$image', description =  '$description', price = $price, stock = $stock WHERE product_id = $product_id");
			if (!$result) {
				return false;
			}
			else {
				return true;
			}
		}

		function get_one_product($product_id) {
			global $database;

			$result = $database->query("SELECT * FROM product WHERE product_id = '$product_id'");

			if (!$result) {
				error("An error occured while fetching the product.", 500);
			}
			else if ($result === true || $result->num_rows == 0) {
			return array();
			}

			$product = $result->fetch_assoc();
				
			

			return $product;
		}

		function get_all_products() {
			global $database;

			$result = $database->query("SELECT * FROM product");

			if (!$result) {
				error("An error occured while fetching the products.", 500);
			}
			else if ($result === true || $result->num_rows == 0) {
			return array();
			}

			$products = array();

			while ($product = $result->fetch_assoc()) {
				$products[] = $product;
			}

			return $products;
		}

		function delete_product($product_id) {
			global $database;



			$result = $database->query("DELETE FROM product WHERE product_id = '$product_id'");

			if (!$result) {
				error("An error occured while deleting the product.", 500);
			}
			else if ($database->affected_rows == 0) {
				return false;
			}	
			else {
				return true;
			}
			
		}
?>