
CREATE DATABASE IF NOT EXISTS artifact_uprising;

USE artifact_uprising;

CREATE TABLE IF NOT EXISTS `cart` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `session_id` VARCHAR(100) NOT NULL,
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `phone` VARCHAR(15) NULL,
  `email` VARCHAR(50) NULL,
  `address` VARCHAR(50) NULL DEFAULT NULL,
  `city` VARCHAR(50) NULL DEFAULT NULL,
  `state` VARCHAR(50) NULL DEFAULT NULL,
  `country` VARCHAR(50) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_cart_session_id` (`session_id` ASC));

CREATE TABLE IF NOT EXISTS `product` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(75) NOT NULL,
  `summary` TINYTEXT NULL,
  `sku` VARCHAR(100) NOT NULL,
  `price` FLOAT NOT NULL DEFAULT 0,
  `quantity` SMALLINT(6) NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `uq_sku` (`sku` ASC));

# Some products
INSERT IGNORE INTO `product` (`title`, `summary`, `sku`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
('Product A', 'Product A - Summary', 'A', 150, 100, UTC_TIMESTAMP(), UTC_TIMESTAMP());
INSERT IGNORE INTO `product` (`title`, `summary`, `sku`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
('Product B', 'Product B - Summary', 'B', 75, 100, UTC_TIMESTAMP(), UTC_TIMESTAMP());
INSERT IGNORE INTO `product` (`title`, `summary`, `sku`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
('Product C', 'Product C - Summary', 'C', 100, 100, UTC_TIMESTAMP(), UTC_TIMESTAMP());
INSERT IGNORE INTO `product` (`title`, `summary`, `sku`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
('Product D', 'Product D - Summary', 'D', 50, 100, UTC_TIMESTAMP(), UTC_TIMESTAMP());
INSERT IGNORE INTO `product` (`title`, `summary`, `sku`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
('Product E', 'Product E - Summary', 'E', 25, 100, UTC_TIMESTAMP(), UTC_TIMESTAMP());


CREATE TABLE IF NOT EXISTS `cart_item` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `product_id` BIGINT NOT NULL,
  `cart_id` BIGINT NOT NULL,
  `quantity` SMALLINT(6) NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `idx_cart_item_product` (`product_id` ASC));