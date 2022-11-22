<?php
		require "database.php";

		function create_new_category($active, $name) {
			global $database;

			$result = $database->query("INSERT INTO category(active, name) VALUES($active, '$name')");

			if (!$result) {
				error("An error occured while saving the product", 500);
			}
			else {
				return true;
			}

		}

		function update_category($category_id, $active, $name) {
			global $database;

			$result = $database->query("UPDATE category SET active = $active, name = '$name' WHERE category_id = $category_id");
			if (!$result) {
				return false;
			}
			else {
				return true;
			}
		}

		function get_one_category($category_id) {
			global $database;

			$result = $database->query("SELECT * FROM category WHERE category_id = '$category_id'");

			if (!$result) {
				error("An error occured while fetching the category.", 500);
			}
			else if ($result === true || $result->num_rows == 0) {
			return array();
			}

			$category = $result->fetch_assoc();
				
			

			return $category;
		}

		function get_all_categories() {
			global $database;

			$result = $database->query("SELECT * FROM category");

			if (!$result) {
				error("An error occured while fetching the categories.", 500);
			}
			else if ($result === true || $result->num_rows == 0) {
			return array();
			}

			$categories = array();

			while ($category = $result->fetch_assoc()) {
				$categories[] = $category;
			}

			return $categories;
		}

		function delete_category($category_id) {
			global $database;



			$result = $database->query("DELETE FROM category WHERE category_id = '$category_id'");

			if (!$result) {
				error("An error occured while deleting the category.", 500);
			}
			else if ($database->affected_rows == 0) {
				return false;
			}	
			else {
				return true;
			}
			
		}
?>