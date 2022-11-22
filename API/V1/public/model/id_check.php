<?php 

	function check_category_id($id) {
		global $database;

		$result = $database->query("SELECT * FROM category WHERE category_id = $id");

		if ($result->num_rows == 0) {
			return false;
		}
		else {
			return true;
			
		}
	}

	function check_product_id($id) {
		global $database;

		$result = $database->query("SELECT * FROM product WHERE product_id = $id");

		if ($result->num_rows == 0) {
			return false;
		}
		else {
			return true;
			
		}
	}

?>